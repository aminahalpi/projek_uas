import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const Reservasi = () => {
  const [reservasiList, setReservasiList] = useState([]); // Daftar reservasi
  const [formData, setFormData] = useState({
    nama: '',
    jadwal: '',
    dokter: '',
    perawatan: '',
    keluhan: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Mengambil data reservasi dari Firestore
  useEffect(() => {
    const fetchReservasi = async () => {
      const querySnapshot = await getDocs(collection(db, 'reservasi'));
      const reservasiData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReservasiList(reservasiData);
    };

    fetchReservasi();
  }, []);

  // Menyimpan atau mengupdate reservasi
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);  // Debugging data yang dimasukkan

    try {
      if (isEditing) {
        const reservasiDoc = doc(db, 'reservasi', editId);
        await updateDoc(reservasiDoc, formData);
        console.log('Data berhasil diupdate');
        setIsEditing(false);
      } else {
        await addDoc(collection(db, 'reservasi'), formData);
        console.log('Data berhasil disimpan');
      }
    } catch (error) {
      console.error('Error menyimpan data:', error);
    }

    setFormData({ nama: '', jadwal: '', dokter: '', perawatan: '', keluhan: '' }); // Reset form
  };

  // Mengedit reservasi
  const handleEdit = (id) => {
    const reservasi = reservasiList.find(item => item.id === id);
    setFormData(reservasi);
    setIsEditing(true);
    setEditId(id);
  };

  // Menghapus reservasi
  const handleDelete = async (id) => {
    try {
      const reservasiDoc = doc(db, 'reservasi', id);
      await deleteDoc(reservasiDoc);
      setReservasiList(reservasiList.filter(item => item.id !== id));
      console.log('Data berhasil dihapus');
    } catch (error) {
      console.error('Error menghapus data:', error);
    }
  };

  // Daftar dokter dan perawatan
  const dokterList = ['drg. Audila Khasna Nauroh ', 'drg. Faradis Putra Assegaf ', 'drg. Heri Arista', 'drg. Syalsa Muenwa Jadaita', 'drg. Witri Surya Jannah', 'dr. Nafisa Azzahra '];
  const perawatanList = ['Scaling Gigi', 'Pasang Behel', 'Cabutan Gigi', 'Bleaching Gigi', 'Tambal Gigi', 'Gigi Palsu'];

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Reservasi Dokter</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="nama"
          placeholder="Nama Anda"
          value={formData.nama}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
        <select
          name="jadwal"
          value={formData.jadwal}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="">Pilih Jadwal</option>
          <option value="Senin, 10:00 - 12:00">Senin, 10:00 - 12:00</option>
          <option value="Rabu, 14:00 - 16:00">Rabu, 14:00 - 16:00</option>
          <option value="Jumat, 08:00 - 10:00">Jumat, 08:00 - 10:00</option>
        </select>
        <select
          name="dokter"
          value={formData.dokter}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="">Pilih Dokter</option>
          {dokterList.map((dokter, index) => (
            <option key={index} value={dokter}>
              {dokter}
            </option>
          ))}
        </select>
        <select
          name="perawatan"
          value={formData.perawatan}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="">Pilih Perawatan</option>
          {perawatanList.map((perawatan, index) => (
            <option key={index} value={perawatan}>
              {perawatan}
            </option>
          ))}
        </select>
        <textarea
          name="keluhan"
          placeholder="Keluhan (Opsional)"
          value={formData.keluhan}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition duration-300"
        >
          {isEditing ? 'Update Reservasi' : 'Tambah Reservasi'}
        </button>
      </form>

      <div className="mt-8">
        {reservasiList.length > 0 ? (
          <ul className="space-y-4">
            {reservasiList.map((reservasi) => (
              <li key={reservasi.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{reservasi.nama}</h3>
                <p>Jadwal: {reservasi.jadwal}</p>
                <p>Dokter: {reservasi.dokter}</p>
                <p>Perawatan: {reservasi.perawatan}</p>
                {reservasi.keluhan && <p>Keluhan: {reservasi.keluhan}</p>}
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(reservasi.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(reservasi.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition duration-300"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Belum ada reservasi.</p>
        )}
      </div>
    </div>
  );
};

export default Reservasi;
