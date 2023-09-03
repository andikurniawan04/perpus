declare global {
    interface Window {
        my_modal: any; // 👈️ turn off type checking
    }
}


export type Buku = {
    id: number,
    judul: string,
    penulis: string,
    penerbit: string,
    tahun_terbit: number,
    jumlah_halaman: number,
    img_url: string,
    stok: number
}

export type Anggota = {
    id: number,
    nama_lengkap: string,
    no_hp: string,
    alamat: string
}

export type Pinjam = {
    id: number,
    nama_peminjam: string,
    judul_buku: string,
    status: string,
    tanggal_pinjam: Date,
    tanggal_kembali: Date
}

export type Peminjaman = {
    buku_id: number,
    anggota_id: number
}