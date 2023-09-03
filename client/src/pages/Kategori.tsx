import { useEffect } from 'react';
import useKategori from '../hooks/use-kategori';
import Loading from '../components/Loading';
import { openPage } from '../utils/openPage';

const Kategori = () => {
    const { kategori, loading, getKategori } = useKategori();

    useEffect(() => {
        getKategori();
    }, [])
    return (
        <div className="overflow-x-auto w-4/5 mx-auto my-10">
            <h1 className='text-2xl font-bold text-center my-5'>List Kategori</h1>
            {loading ? <Loading /> :
                <table className="table">
                    <thead>
                        <tr className="bg-base-200 text-lg font-bold text-black">
                            <th>No</th>
                            <th>Nama</th>
                            <th>Jumlah Buku</th>
                        </tr>
                    </thead>

                    <tbody className='text-lg'>

                        {kategori.map((item, i) => (
                            <tr className='cursor-pointer hover:bg-base-300' onClick={() => openPage(`/buku?kategori=${item.nama}`)} key={item.id}>
                                <th>{i + 1}</th>
                                <td>{item.nama}</td>
                                <td>{item.jumlah_buku}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Kategori