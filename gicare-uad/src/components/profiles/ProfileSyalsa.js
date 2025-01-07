import React from 'react';

const ProfileSyalsa = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">drg. Syalsa Muenwa Jadaita</h1>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={`${process.env.PUBLIC_URL}/caca.jpg`}
          alt="dr. Syalsa Muenwa Jadaita"
          className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Jam Praktek</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <ul className="list-disc list-inside text-gray-700">
              <li>Selasa: 09:00 - 13:00 WIB</li>
              <li>Kamis: 15:00 - 19:00 WIB</li>
              <li>Minggu: 08:00 - 12:00 WIB</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2 mt-6">Pengalaman</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Dokter Spesialis Anak di Rumah Sakit Sejahtera, 2016 - sekarang</li>
        <li>Relawan Kesehatan Anak di Yayasan Anak Sehat, 2019 - sekarang</li>
        <li>Pembicara di Seminar Kesehatan Anak Internasional, 2022</li>
      </ul>
    </div>
  );
};

export default ProfileSyalsa;
