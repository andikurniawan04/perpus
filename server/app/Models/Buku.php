<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    use HasFactory;
    protected $table = 'bukus';
    protected $fillable = [
        'judul',
        'penulis',
        'penerbit',
        'tahun_terbit',
        'jumlah_halaman',
        'img_url',
        'stok',
        'kategori_id'
    ];

    public function pinjam()
    {
        return $this->hasMany(Pinjam::class);
    }

    public function kategori()
    {
        return $this->belongsTo(Kategori::class);
    }
}
