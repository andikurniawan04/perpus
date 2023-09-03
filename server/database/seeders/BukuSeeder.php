<?php

namespace Database\Seeders;

use App\Models\Buku;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $buku = Storage::get('public/buku.json');
        $json = json_decode($buku, true);

        foreach ($json as $r) {
            Buku::create([
                'judul' => $r['judul'],
                'penulis' => $r['penulis'],
                'penerbit' => $r['penerbit'],
                'tahun_terbit' => $r['tahun_terbit'],
                'jumlah_halaman' => $r['jumlah_halaman'],
                'img_url' => $r['img_url'],
                'stok' => $r['stok'],
                'kategori_id' => $r['kategori_id'],

            ]);
        }
    }
}
