import { useState, useEffect } from 'react';
import useBuku from "../hooks/use-buku";
import { Buku as BukuType } from '../types';
import { InfoModal } from '../components/Modal';
const Buku = () => {
    const { buku, getBuku } = useBuku();
    const [data, setData] = useState<BukuType>();

    const bukuTersedia = buku.filter((item) => item.stok >= 1);
    const bukuTidakTersedia = buku.filter((item) => item.stok < 1);

    const showModal = (data: BukuType) => {
        setData(data);
    };

    useEffect(() => {
        getBuku();
    }, [])
    return (
        <div className=" w-11/12 mx-auto my-10">
            {data && <InfoModal buku={data} />}


            <h1 className='text-2xl font-bold text-center my-5 '>List Buku</h1>
            <h1 className='text-2xl font-bold  my-5 '>Buku Tersedia</h1>
            <div className='flex flex-wrap gap-10'>
                {bukuTersedia.map((item) => (
                    <label key={item.id} htmlFor='modal' onClick={() => showModal(item)}>
                        <div className='shadow-xl w-60 h-96 border-2 p-2 duration-150 hover:scale-110 cursor-pointer relative'>
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