<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anggota extends Model
{
    use HasFactory;
    protected $table = 'anggotas';
    protected $fillable = [
        'nama_lengkap',
        'no_hp',
        'alamat',
    ];

    public function pinjam()
    {
        return $this->hasMany(Pinjam::class);
    }
}
