import { useEffect } from 'react';
import useAnggota from '../hooks/use-anggota';
import Loading from '../components/Loading';

const Anggota = () => {
    const { anggota, getAnggota, loading } = useAnggota();

    useEffect(() => {
        getAnggota();
    }, [])
    return (
        <div className="overflow-x-auto w-4/5 mx-auto my-10">
            <h1 className='text-2xl font-bold text-center my-5'>List Anggota</h1>
            {loading ? <Loading /> :
                <table className="table">
                    <thead>
                        <tr className="bg-base-200 text-lg font-bold text-black">
                            <th>No</th>
                            <th>Nama</th>
                            <th>No HP</th>
                        </tr>
                    </thead>
                    <tbody className='text-lg'>
                        {anggota.map((item, i) => (
                            <tr key={item.id}>
                                <th>{i + 1}</th>
                                <td>{item.nama_lengkap}</td>
                                <td>{item.no_hp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Anggota