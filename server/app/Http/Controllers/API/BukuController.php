<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Buku;
use Illuminate\Http\Request;

class BukuController extends Controller
{
    public function index()
    {
        $buku = Buku::join('kategoris', 'bukus.kategori_id', '=', 'kategoris.id')->select('bukus.id', 'bukus.judul', 'bukus.penulis', 'bukus.penerbit', 'bukus.tahun_terbit', 'bukus.jumlah_halaman', 'bukus.img_url', 'bukus.stok', 'kategoris.nama as kategori_buku')->orderBy('bukus.stok', 'desc')->get();

        return response()->json([
            "status" => "Sukses",
            "data" => $buku
        ]);
    }
}
