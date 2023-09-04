import { useState } from "react";
import { api } from "../utils/api";
import { Anggota } from "../types";

const useAnggota = () => {
    const [anggota, setAnggota] = useState<Anggota[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getAnggota = async () => {
        setLoading(true);
        try {
            const res = await api.get('/anggota');
            const { data } = res.data;
            setAnggota(data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    }
    return { anggota, getAnggota, loading };
}

export default useAnggota;