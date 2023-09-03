<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Buku;
use Illuminate\Http\Request;

class BukuController extends Controller
{
    public function index()
    {
        $buku = Buku::select('id', 'judul', 'penulis', 'penerbit', 'tahun_terbit', 'jumlah_halaman', 'img_url', 'stok')->orderBy('stok', 'desc')->get();

        return response()->json([
            "status" => "Sukses",
            "data" => $buku
        ]);
    }
}
