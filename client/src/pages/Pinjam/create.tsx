import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import useBuku from "../../hooks/use-buku";
import useAnggota from "../../hooks/use-anggota";
import usePinjam from "../../hooks/use-pinjam";

const PinjamCreate = () => {
    const { buku, getBuku } = useBuku();
    const { anggota, getAnggota } = useAnggota();
    const { postPinjam } = usePinjam();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const filteredBuku = buku.filter((item) => item.stok > 0);

    const onSubmit = (data: any) => {
        postPinjam(data);
    }

    useEffect(() => {
        getBuku();
        getAnggota();
    }, [])
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="card w-96 bg-base-100">
                <h1 className="text-center font-bold text-2xl mb-2">Tambah Data</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body border-2 rounded-xl shadow-xl flex flex-col gap-5">
                    <div className="form-control w-full max-w-xs">
                        <select
                            required
                            {...register('anggota_id', { required: "required" })}
                            name="anggota_id"
                            className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pilih Anggota</option>
                            {anggota.map((item) => (
                                <option key={item.id} value={item.id}>{item.nama_lengkap}</option>
                            ))}
                        </select>
                        {errors.anggota_id && <span className='text-red-500 font-bold'>Field ini harus diisi</span>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <select
                            required
                            {...register('buku_id', { required: "required" })}
                            name="buku_id"
                            className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pilih Buku</option>
                            {filteredBuku.map((item) => (
                                <option key={item.id} value={item.id}>{item.judul}</option>
                            ))}
                        </select>
                        {errors.buku_id && <span className='text-red-500 font-bold'>Field ini harus diisi</span>}

                    </div>
                    <button type="submit" className="btn btn-info w-full text-white mt-5 rounded-full">Simpan</button>
                </form>
            </div>
        </div>
    )
}

export default PinjamCreate