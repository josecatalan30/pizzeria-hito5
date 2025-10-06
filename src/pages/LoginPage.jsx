import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !contraseña.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }
    if (contraseña.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    alert('¡Login exitoso!');
    setEmail('');
    setContraseña('');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
        <h2>Ingresa a tu cuenta</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Ingresa tu email'
        />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          name="contraseña"
          className="form-control"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)}
          placeholder='Contraseña de minimo 6 caracteres'
        />
      </div>
      <button type="submit" className="btn btn-primary">Ingresar</button>
    </form>
  );
}