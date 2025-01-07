import React from 'react';

const doctors = [
  {
    name: "drg. Audila Khasna Nauroh",
    title: "General Practitioner",
    image: `${process.env.PUBLIC_URL}/adlala.jpg`, // Ganti dengan URL gambar asli
    profileUrl: "/profile/audila-khasna-nauroh", // URL halaman profil dokter
  },
  {
    name: "drg. Faradis Putra Assegaf",
    title: "General Practitioner",
    image: `${process.env.PUBLIC_URL}/ais.jpg`,
    profileUrl: "/profile/faradis-putra-assegaf",
  },
  {
    name: "drg. Witri Surya Jannah",
    title: "General Practitioner",
    image: `${process.env.PUBLIC_URL}/witri.jpg`,
    profileUrl: "/profile/witri-surya-jannah",
  },
  {
    name: "dr. Nafisah Azzahra",
    title: "General Practitioner",
    image: `${process.env.PUBLIC_URL}/nafisa.jpg`,
    profileUrl: "/profile/nafisa-azzahra",
  },
  {
    name: "drg. Heri Arista",
    title: "General Practitioner",
    image: `${process.env.PUBLIC_URL}/heri.jpg`,
    profileUrl: "/profile/heri-arista",
  },
  {
    name: "drg. Syalsa Muenwa Jadaita",
    title: "General Practitioner",
    image: `${process.env.PUBLIC_URL}/caca.jpg`,
    profileUrl: "/profile/syalsa-muenwa-jadaita",
  },
];

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Dokter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {doctors.map((doctor, index) => (
          <a
            key={index}
            href={doctor.profileUrl}
            className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center hover:bg-gray-200 transition duration-300"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 object-cover mb-4"
            />
            <h2 className="text-lg font-medium">{doctor.name}</h2>
            <p className="text-gray-500">{doctor.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
