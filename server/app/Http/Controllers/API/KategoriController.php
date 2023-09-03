<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Kategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    public function index()
    {
        $kategori = Kategori::select('id', 'nama')->get();

        return response()->json([
            "status" => "Sukses",
            "data" => $kategori
        ]);
    }
}
