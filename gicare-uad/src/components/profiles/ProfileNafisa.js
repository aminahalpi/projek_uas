import React from 'react';

const ProfileNafisa = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">dr. Nafisa Azzahra</h1>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={`${process.env.PUBLIC_URL}/nafisa.jpg`}
          alt="dr. Nafisa Azzahra"
          className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Jam Praktek</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <ul className="list-disc list-inside text-gray-700">
              <li>Senin: 13:00 - 17:00 WIB</li>
              <li>Jumat: 08:00 - 12:00 WIB</li>
              <li>Sabtu: 15:00 - 19:00 WIB</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2 mt-6">Pengalaman</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Dokter Spesialis Kulit di Klinik Dermacare, 2018 - sekarang</li>
        <li>Relawan Kesehatan Kulit di Yayasan Kulit Sehat, 2020 - sekarang</li>
        <li>Pembicara di Seminar Kesehatan Kulit Nasional, 2023</li>
      </ul>
    </div>
  );
};

export default ProfileNafisa;
