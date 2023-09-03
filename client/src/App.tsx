import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Buku from './pages/Buku'
import Pinjam from './pages/Pinjam'
import PinjamCreate from './pages/Pinjam/create'
import Laporan from './pages/Laporan'
import Anggota from './pages/Anggota'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buku' element={<Buku />} />
        <Route path='/pinjam' element={<Pinjam />} />
        <Route path='/pinjam/create' element={<PinjamCreate />} />
        <Route path='/laporan' element={<Laporan />} />
        <Route path='/anggota' element={<Anggota />} />
      </Routes>
    </>
  )
}

export default App
