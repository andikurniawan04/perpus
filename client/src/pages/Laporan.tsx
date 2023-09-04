import { jsPDF } from 'jspdf';
import autoTable from "jspdf-autotable";
import { useEffect } from "react";
import usePinjam from "../hooks/use-pinjam";
import { formatDate } from "../utils/formatDate";
import Loading from '../components/Loading';

const Laporan = () => {
    const { pinjam, loading, getPinjam } = usePinjam();

    useEffect(() => {
        getPinjam();
    }, []);

    const generatePDF = async () => {
        const report = new jsPDF();
        autoTable(report, { html: '#report' })
        report.save("report.pdf");
    }

    return (
        <div className="overflow-x-auto w-4/5 mx-auto my-10" >
            <h1 className='text-2xl font-bold text-center my-5'>Riwayat Transaksi</h1>
            {loading ? <Loading /> :
                <>
                    <button onClick={generatePDF} className='btn btn-error text-white my-5 hover:bg-red-500'>Download<i className='fa-solid fa-file-pdf'></i></button>
                    <table className="table" id='report'>
                        <thead >
                            <tr className="bg-base-200 text-lg font-bold text-black">
                                <th>No</th>
                                <th>Nama Peminjam</th>
                                <th>Judul Buku</th>
                                <th>Tanggal Pinjam</th>
                                <th>Tanggal Kembali</th>
                                <th>Status</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}

export default Laporan