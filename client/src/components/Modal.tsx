import { Buku } from '../types';

export const Modal = ({ handleDelete }: any) => {
    return (
        <>
            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Delete!</h3>
                    <p className="py-4">Apakah anda yakin akan menghapus data ini?</p>
                    <div className="modal-action">
                        <label htmlFor="modal" className="btn">Cancel</label>
                        <button onClick={() => handleDelete()} className="btn btn-error">Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export type Props = {
    buku: Buku | any
}

export const InfoModal = ({ buku }: Props) => (
    <>
        <input type="checkbox" id="modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box max-w-2xl">
                <div className='flex justify-between'>
                    <h3 className="font-bold text-lg">Detail Buku</h3>
                    <label htmlFor="modal"><i className='fa-solid fa-xmark cursor-pointer text-lg'></i>
                    </label>

                </div>

                <div className='flex my-2'>
                    <div className='mr-2'>
                        <img className='w-56' src={buku.img_url} alt={buku.judul} />
                    </div>
                    <div className='px-2 flex-1'>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-md flex-1'>Judul Buku</h1>
                            <p className='text-md flex-1'>: {buku.judul}</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-md flex-1' >Penulis</h1>
                            <p className='text-md flex-1'>: {buku.penulis}</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-md flex-1' >Penerbit</h1>
                            <p className='text-md flex-1'>: {buku.penerbit}</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-md flex-1' >Tahun Terbit</h1>
                            <p className='text-md flex-1'>: {buku.tahun_terbit}</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-md flex-1' >Jumlah Halaman</h1>
                            <p className='text-md flex-1'>: {buku.jumlah_halaman}</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-md flex-1' >Stok</h1>
                            <p className='text-md flex-1'>: {buku.stok}</p>
                        </div>
                    </div>

                </div>
                <div className="modal-action">
                    <label htmlFor="modal" className="btn">Close</label>
                </div>
            </div>
        </div>
    </>
)

