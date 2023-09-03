import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBuku from "../hooks/use-buku";
import usePinjam from '../hooks/use-pinjam';
import useAnggota from '../hooks/use-anggota';

const Home = () => {
    const { buku, getBuku } = useBuku();
    const { pinjam, getPinjam } = usePinjam();
    const { anggota, getAnggota } = useAnggota();
    const navigate = useNavigate();

    const bukuTersedia = buku.filter((item) => item.stok >= 1);
    const bukuTidakTersedia = buku.filter((item) => item.stok < 1);

    const bukuDipinjam = pinjam.filter((item) => item.status == 'pinjam');
    const bukuKembali = pinjam.filter((item) => item.status == 'kembali');


    useEffect(() => {
        getBuku();
        getPinjam();
        getAnggota();
    }, [])

    return (
        <div className='flex flex-wrap justify-center items-center gap-16 my-10'>
            <button onClick={() => navigate('/buku')} className='flex justify-between items-center w-60 bg-green-500 rounded p-2 hover:scale-110 duration-150'>
                <div className='text-left'>
                    <h1 className='text-xl text-white'>Data Buku ({buku.length})</h1>
                    <p className='text-base text-white'><span className='font-bold'>{bukuTersedia.length}</span> Buku tersedia</p>
                    <p className='text-base text-white'><span className='font-bold'>{bukuTidakTersedia.length}</span> Buku tidak tersedia</p>
                </div>
                <div className='p-2'>
                    <i className='fa-solid fa-book text-white text-4xl opacity-90'></i>
                </div>
            </button>
            <button onClick={() => navigate('/laporan')} className='flex justify-between items-center w-60 bg-blue-500 rounded p-2 hover:scale-110 duration-150'>
                <div className='text-left'>
                    <h1 className='text-xl text-white'>Data Transaksi ({pinjam.length})</h1>
                    <p className='text-base text-white'><span className='font-bold'>{bukuDipinjam.length}</span> Buku dipinjam</p>
                    <p className='text-base text-white'><span className='font-bold'>{bukuKembali.length}</span> Buku dikembalikan</p>
                </div>
                <div className='p-2'>
                    <i className='fa-solid fa-book-open-reader text-white text-4xl opacity-90'></i>
                </div>
            </button>
            <button onClick={() => navigate('/anggota')} className='flex justify-between items-center w-60 bg-red-500 rounded p-2 hover:scale-110 duration-150'>
                <div className='text-left'>
                    <h1 className='text-xl text-white'>Data Anggota ({anggota.length})</h1>
                </div>
                <div className='p-2'>
                    <i className='fa-solid fa-user text-white text-4xl opacity-90'></i>
                </div>
            </button>

        </div>
    )
}

export default Home