<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $anggota = Storage::get('public/kategori.json');
        $json = json_decode($anggota, true);

        foreach ($json as $r) {
            Kategori::create([
                'nama' => $r['nama']
            ]);
        }
    }
}
