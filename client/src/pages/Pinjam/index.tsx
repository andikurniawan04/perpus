import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useState, useEffect } from 'react';
import usePinjam from "../../hooks/use-pinjam";
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import Alert from '../../components/Alert';
import { Modal } from '../../components/Modal';

const PInjam = () => {
    const { pinjam, getPinjam, putPinjam, deletePinjam } = usePinjam();
    const [id, setId] = useState<number>(0);
    const location = useLocation();

    useEffect(() => {
        getPinjam();
        window.history.replaceState({}, document.title)
    }, []);

    return (
        <div className="overflow-x-auto w-4/5 mx-auto my-10">
            <Modal handleDelete={() => deletePinjam(id)} />
            {location.state && <Alert>{location.state}</Alert>}
            <h1 className='text-2xl font-bold text-center'>List Peminjam</h1>
            <a href='/pinjam/create' className='btn btn-info my-5 text-white hover:bg-blue-500'>Tambah Data</a>
            <table className="table">
                <thead >
                    <tr className="bg-base-200 text-lg font-bold text-black">
                        <th>No</th>
                        <th>Nama Peminjam</th>
                        <th>Judul Buku</th>
                        <th>Tanggal Pinjam</th>
                        <th>Tanggal Kembali</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {pinjam.map((item, i) => (
                        <tr key={item.id} className="text-base">
                            <th>{i + 1}</th>
                            <td>{item.nama_peminjam}</td>
                            <td>{item.judul_buku}</td>
                            <td>{formatDate(item.tanggal_pinjam)}</td>
                            <td>{formatDate(item.tanggal_kembali)}</td>
                            <td className={`badge text-white mt-3.5 ${item.status == 'pinjam' ? 'badge-info' : 'badge-success'}`}>{item.status}</td>
                            <td>
                                {item.status == 'pinjam' &&
                                    <div className='flex gap-5'>
                                        <button onClick={() => putPinjam(item.id)} className='btn btn-success text-white hover:bg-green-500'>Kembali</button>
                                        <label htmlFor='modal' onClick={() => setId(item.id)} className='btn btn-error text-white hover:bg-red-500'>Hapus</label>
                                    </div>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PInjam