import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage } from '../config/firebase';

function FirebaseFeatures() {
  // Estado para Registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgAuth, setMsgAuth] = useState('');

  // Estado para Storage (Imágenes)
  const [file, setFile] = useState(null);
  const [msgStorage, setMsgStorage] = useState('');

  // Función Registro
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsgAuth('✅ Usuario registrado con éxito');
    } catch (error) {
      setMsgAuth('❌ Error: ' + error.message);
    }
  };

  // Función Subir Imagen
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      const storageRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setMsgStorage('✅ Imagen subida. URL: ' + url);
    } catch (error) {
      setMsgStorage('❌ Error al subir: ' + error.message);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h3>Auth & Storage</h3>
      <div className="row">
        
        {/* Sección Auth */}
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h4>🔐 Registro (Auth)</h4>
            <form onSubmit={handleRegister}>
              <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <input className="form-control mb-2" type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)} />
              <button className="btn btn-primary w-100">Registrarse</button>
            </form>
            <p className="mt-2 text-success">{msgAuth}</p>
          </div>
        </div>

        {/* Sección Storage */}
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h4>☁️ Subir Archivo (Storage)</h4>
            <form onSubmit={handleUpload}>
              <input className="form-control mb-2" type="file" onChange={(e)=>setFile(e.target.files[0])} />
              <button className="btn btn-info w-100 text-white">Subir Imagen</button>
            </form>
            <p className="mt-2 text-success">{msgStorage}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FirebaseFeatures;