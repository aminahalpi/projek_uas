import React from 'react';

function Card({ image, title, description }) { 
    const handleMouseEnter = (e) => { 
    e.currentTarget.style.transform = 'scale(1.05)'; 
    e.currentTarget.style.transition = 'transform 0.3s ease'; 
}; 
    const handleMouseLeave = (e) => { 
    e.currentTarget.style.transform = 'scale(1)'; 
}; 
    return ( <div className="bg-white rounded-lg shadow-lg p-4" 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
    > 
     <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" /> 
     <h2 className="text-xl font-bold mt-4">{title}</h2> 
     <p className="text-gray-600 mt-2">{description}</p> 
     </div> 
     ); 
    }

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Layanan Perawatan klinik GI-Cae UAD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          image={`${process.env.PUBLIC_URL}/scaling gigi.png`}
          title="Scaling Gigi"
          description="Prosedur untuk membersihkan karang gigi dan plak yang menumpuk di sekitar gigi dan gusi guna mencegah penyakit gusi dan bau mulut."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/pasang behel.png`}
          title="Pasang Behel"
          description="Pemasangan kawat gigi untuk memperbaiki posisi gigi yang tidak rata atau berantakan, sehingga memberikan fungsi dan estetika yang lebih baik."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/cabut gigi.png`}
          title="Cabut Gigi"
          description="Pengangkatan gigi yang rusak parah, infeksi, atau tumbuh tidak normal, seperti gigi bungsu, guna menjaga kesehatan gigi dan gusi lainnya."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/bleaching gigi.png`}
          title="Bleaching Gigi"
          description="Perawatan pemutihan gigi untuk menghilangkan noda dan mencerahkan warna gigi, dilakukan dengan bahan kimia khusus yang aman."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/tambal gigi.png`}
          title="Tambal Gigi"
          description="Prosedur untuk memperbaiki gigi yang berlubang atau rusak akibat karies dengan bahan tambal seperti resin komposit atau amalgam."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/gigi palsu.png`}
          title="Gigi Palsu"
          description="Penggantian gigi yang hilang menggunakan prostesis buatan, baik sebagian maupun seluruh gigi, untuk mengembalikan fungsi mengunyah dan estetika."
        />
      </div>
    </div>
  );
}

export default App;
