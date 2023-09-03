<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Buku;
use App\Models\Pinjam;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class PinjamController extends Controller
{
    public function index()
    {
        $pinjam = Pinjam::join('bukus', 'pinjams.buku_id', '=', 'bukus.id')->join('anggotas', 'pinjams.anggota_id', '=', 'anggotas.id')
            ->select('pinjams.id', 'anggotas.nama_lengkap as nama_peminjam', 'bukus.judul as judul_buku', 'pinjams.tanggal_pinjam', 'pinjams.tanggal_kembali', 'pinjams.status')
            ->get();
        return response()->json([
            "status" => "Sukses",
            "data" => $pinjam
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'buku_id' => ['required', 'integer'],
            'anggota_id' => ['required', 'integer']

        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => "Gagal",
                "message" => $validator->errors()
            ], 422);
        }

        $buku = Buku::where('id', $request->buku_id)->first();

        if ($buku->stok < 1) {
            return response()->json([
                "status" => "Gagal",
                "message" => "Stok buku habis"
            ], 401);
        }

        Pinjam::create([
            'tanggal_pinjam' => Carbon::now(),
            'tanggal_kembali' => Carbon::now()->addDays(3),
            'buku_id' => (int)$request->buku_id,
            'anggota_id' => $request->anggota_id
        ]);

        $buku->update(['stok' => (int)$buku->stok - 1]);


        return response()->json([
            "status" => "Sukses",
            "message" => "Buku berhasil dipinjam",
        ], 201);
    }

    public function update($id)
    {
        $pinjam = Pinjam::where('id', $id)->first();

        if (!$pinjam) {
            return response()->json([
                "status" => "Gagal",
                "message" => "Data tidak ditemukan"
            ], 400);
        }

        $buku = Buku::where('id', $pinjam->buku_id)->first();

        $pinjam->update([
            "status" => "kembali",
            "tanggal_kembali" => Carbon::now()
        ]);

        $buku->update(['stok' => (int)$buku->stok + 1]);

        return response()->json([
            "status" => "Sukses",
            "message" => "Buku berhasil dikembalikan",
        ]);
    }

    public function destroy($id)
    {
        $pinjam = Pinjam::where('id', $id)->first();

        if (!$pinjam) {
            return response()->json([
                "status" => "Gagal",
                "message" => "Data tidak ditemukan"
            ], 400);
        }

        if ($pinjam->status == 'kembali') {
            return response()->json([
                "status" => "Gagal",
                "message" => "Buku yang sudah dikembalikan tidak dapat dihapus"
            ], 400);
        }

        $buku = Buku::where('id', $pinjam->buku_id)->first();
        $buku->update(['stok' => (int)$buku->stok + 1]);

        $pinjam->delete();

        return response()->json([
            "status" => "Sukses",
            "message" => "Data berhasil dihapus",
        ]);
    }
}
