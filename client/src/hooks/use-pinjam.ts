import { useState } from "react";
import { api } from "../utils/api";
import { Peminjaman, Pinjam } from "../types";
import { useNavigate } from "react-router-dom";

const usePinjam = () => {
    const [pinjam, setBuku] = useState<Pinjam[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const urlPinjam = '/pinjam';

    const getPinjam = async () => {
        try {
            setLoading(true);
            const res = await api.get(urlPinjam);
            const { data } = res.data;
            setBuku(data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    }

    const postPinjam = async (pinjamData: Peminjaman) => {
        try {
            setLoading(true);
            const res = await api.post(urlPinjam, pinjamData);
            const { message } = res.data;
            setLoading(false);
            navigate('/pinjam', { state: message })
        } catch (error) {
            console.log(error);
            navigate('/pinjam', { state: 'Buku gagal dipinjam' });
        }
    }

    const putPinjam = async (id: number) => {
        try {
            setLoading(true);
            const res = await api.put(`${urlPinjam}/${id}`);
            const { message } = res.data;
            setLoading(false);
            window.location.reload();
            navigate('/pinjam', { state: message })
        } catch (error) {
            console.log(error);
            navigate('/pinjam', { state: 'Buku gagal dikembalikan' });
        }
    }

    const deletePinjam = async (id: number) => {
        try {
            setLoading(true);
            const res = await api.delete(`${urlPinjam}/${id}`);
            const { message } = res.data;
            setLoading(false);
            window.location.reload();
            navigate('/pinjam', { state: message })
        } catch (error) {
            console.log(error);
            navigate('/pinjam', { state: 'Buku gagal dihapus' });
        }
    }

    return { pinjam, getPinjam, postPinjam, putPinjam, deletePinjam, loading };
}

export default usePinjam;