import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari React Router


const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between bg-white shadow-md p-5">
                <div className="flex items-center gap-4">
                    <div className="text-2xl">🦷</div>
                    <div>
                        <h1 className="text-xl font-bold">GI-Care UAD</h1>
                        <p className="text-sm">Klinik Gigi Profesional</p>
                    </div>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li className="nav-item hover:bg-purple-800 hover:text-white p-2 rounded"><Link to="/">Home</Link></li>
                        <li className="nav-item hover:bg-purple-800 hover:text-white p-2 rounded"><Link to="/layanan">Layanan</Link></li>
                        <li className="nav-item hover:bg-purple-800 hover:text-white p-2 rounded"><Link to="/reservasi">Reservasi</Link></li>
                        <li className="nav-item hover:bg-purple-800 hover:text-white p-2 rounded"><Link to="/dokter">Dokter</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
