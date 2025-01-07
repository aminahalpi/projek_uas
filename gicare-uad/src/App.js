import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Header from './components/Header';
import Home from './components/Home';
import Layanan from './components/Layanan'; // Pastikan file ini sudah ada
import Reservasi from './components/Reservasi'; // Tambahkan halaman lain jika diperlukan
import Dokter from './components/Dokter';
import ProfileAudila from './components/profiles/ProfileAudila'; // Impor halaman profil dokter
import ProfileFaradis from './components/profiles/ProfileFaradis';
import ProfileWitri from './components/profiles/ProfileWitri';
import ProfileNafisa from './components/profiles/ProfileNafisa';
import ProfileHeri from './components/profiles/ProfileHeri';
import ProfileSyalsa from './components/profiles/ProfileSyalsa';
import Footer from './components/footer'; // Impor Footer
import './App.css';
import './index.css';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen"> 
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* Rute ke Home */}
                        <Route path="/layanan" element={<Layanan />} /> {/* Rute ke Layanan */}
                        <Route path="/dokter" element={<Dokter />} /> {/* Rute ke Dokter */}
                        <Route path="/reservasi" element={<Reservasi />} /> {/* Rute ke Reservasi */}
                        <Route path="/profile/audila-khasna-nauroh" element={<ProfileAudila />} /> {/* Rute ke Profil Audila */}
                        <Route path="/profile/faradis-putra-assegaf" element={<ProfileFaradis />} /> {/* Rute ke Profil Faradis */}
                        <Route path="/profile/witri-surya-jannah" element={<ProfileWitri />} /> {/* Rute ke Profil Witri */}
                        <Route path="/profile/nafisa-azzahra" element={<ProfileNafisa />} /> {/* Rute ke Profil Nafisa */}
                        <Route path="/profile/heri-arista" element={<ProfileHeri />} /> {/* Rute ke Profil Heri */}
                        <Route path="/profile/syalsa-muenwa-jadaita" element={<ProfileSyalsa />} /> {/* Rute ke Profil Syalsa */}
                    </Routes>
                </main>
                <Footer /> {/* Tambahkan Footer di sini */}
            </div>
        </Router>
    );
};

export default App;
