<?php

namespace Database\Seeders;

use App\Models\Anggota;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class AnggotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $buku = Storage::get('public/anggota.json');
        $json = json_decode($buku, true);

        foreach ($json as $r) {
            Anggota::create([
                'nama_lengkap' => $r['nama_lengkap'],
                'no_hp' => $r['no_hp'],
                'alamat' => $r['alamat']
            ]);
        }
    }
}
