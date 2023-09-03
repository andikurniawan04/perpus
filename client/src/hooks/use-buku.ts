import { useState } from "react";
import { api } from "../utils/api";
import { Buku } from "../types";

const useBuku = () => {
    const [buku, setBuku] = useState<Buku[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    const getBuku = async () => {
        setLoading(true);
        try {
            const res = await api.get('/buku');
            const { data } = res.data;
            setBuku(data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    }

    return { buku, getBuku, loading };
}

export default useBuku;