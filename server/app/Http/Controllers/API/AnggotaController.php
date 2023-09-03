<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Anggota;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    public function index()
    {
        $anggota = Anggota::select('id', 'nama_lengkap', 'no_hp', 'alamat')->get();

        return response()->json([
            "status" => "Sukses",
            "data" => $anggota
        ]);
    }
}
