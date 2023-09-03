import { useState } from "react";
import { api } from "../utils/api";
import { Kategori } from "../types";

const useKategori = () => {
    const [kategori, setKategori] = useState<Kategori[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getKategori = async () => {
        setLoading(true);
        try {
            const res = await api.get('/kategori');
            const { data } = res.data;
            setKategori(data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    }

    return { kategori, getKategori, loading };
}

export default useKategori;