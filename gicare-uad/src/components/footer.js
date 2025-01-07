import React from 'react';

const Footer = () => {
    return (
        <footer className="flex items-center justify-between bg-gray-800 text-white p-5 mt-auto">
            <div className="flex gap-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/youtube.png`} alt="YouTube" className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/tiktok.png`} alt="TikTok" className="w-6 h-6" />
                </a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/whatsapp.png`} alt="WhatsApp" className="w-6 h-6" />
                </a>
            </div>
            <div>
                <p>Copyright: 2025 © Gicare UAD</p>
            </div>
        </footer>
    );
};

export default Footer;
