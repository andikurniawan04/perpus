import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useBuku from '../hooks/use-buku';
import useKategori from '../hooks/use-kategori';
import { Buku as BukuType } from '../types';
import { InfoModal } from '../components/Modal';
const Buku = () => {
    const { buku, getBuku } = useBuku();
    const { kategori, getKategori } = useKategori();
    const [data, setData] = useState<BukuType>();
    const [params] = useSearchParams();
    const [searchCategory, setSearchCategory] = useState<string>(params.get("kategori") || '');

    const bukuTersedia = buku.filter((item) => item.stok >= 1).filter((item) => item.kategori_buku.includes(searchCategory));
    const bukuTidakTersedia = buku.filter((item) => item.stok < 1).filter((item) => item.kategori_buku.includes(searchCategory));

    const showModal = (data: BukuType) => {
        setData(data);
    };

    useEffect(() => {
        getBuku();
        getKategori();
    }, []);


    return (
        <div className=" w-11/12 mx-auto my-10">
            {data && <InfoModal buku={data} />}
            <h1 className='text-2xl font-bold text-center my-5 '>List Buku</h1>
            <select
                required
                onChange={(e) => setSearchCategory(e.target.value)}
                name="buku_id"
                className="select select-bordered w-full max-w-xs float-right z-10">
                <option disabled selected>Pilih Kategori</option>
                {kategori.map((item) => (
                    <option key={item.id} value={item.nama}>{item.nama}</option>
                ))}
            </select>
            <h1 className='text-2xl font-bold  my-5 '>Buku Tersedia</h1>
            <div className='flex flex-wrap gap-10'>
                {bukuTersedia.map((item) => (
                    <label key={item.id} htmlFor='modal' onClick={() => showModal(item)}>
                        <div className='shadow-xl w-60 h-96 border-2 p-2 duration-150 hover:scale-110 hover:shadow-2xl cursor-pointer relative'>
                            <img className='h-60 m-auto' src={item.img_url} alt="gambar 1" />
                            <h1 className='text-lg text-gray-500 font-medium'>{item.judul}</h1>
                            <div className='flex justify-between items-center absolute bottom-0 left-0 right-0 p-2'>
                                <p className='text-base'>{item.penulis}</p>
                                <label htmlFor='modal' className='btn btn-info text-white'>Detail</label>
                            </div>
                        </div>
                    </label>
                ))}
            </div>

            <h1 className='text-2xl font-bold  mt-20 mb-5 '>Buku Tidak Tersedia</h1>
            <div className='flex flex-wrap gap-10'>
                {bukuTidakTersedia.map((item) => (
                    <label key={item.id} htmlFor='modal' onClick={() => showModal(item)}>
                        <div className='shadow-xl opacity-50 w-60 h-96 border-2 p-2 duration-150 hover:scale-110 cursor-pointer relative'>
                            <img className='h-60 m-auto' src={item.img_url} alt="gambar 1" />
                            <h1 className='text-lg text-gray-500 font-medium'>{item.judul}</h1>
                            <div className='flex justify-between items-center absolute bottom-0 left-0 right-0 p-2'>
                                <p className='text-base'>{item.penulis}</p>
                                <button className='btn btn-info text-white'>Detail</button>
                            </div>
                        </div>
                    </label>
                ))}
            </div>

        </div>
    )
}

export default Buku