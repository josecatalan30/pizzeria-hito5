import {useState} from 'react'

export default function Register() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [error, setError] = useState(false);
    const validarDatos = (e) => {
        e.preventDefault();
        if (!email.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
            setError(true);
            alert('Todos los campos son obligatorios');
            return;
        } if (contraseña.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }

        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
        alert('Registro exitoso');
    }

  return (
    <>
      <form className='formulario' onSubmit={validarDatos}>
        <h2>Crear una cuenta</h2>
        <div className='form-group'>
            <label>Email</label>
            <input type="text"
            name='email'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Ingresa tu email'
            />
        </div>
        <div className='form-group'>
            <label>Contraseña</label>
            <input type="password"
            name='contraseña'
            className='form-control'
            onChange={(e) => setContraseña(e.target.value)}
            value ={contraseña}
            placeholder='Contraseña de minimo 6 caracteres'
            />
        </div>
        <div className='form-group'>
            <label>Confirmar Contraseña</label>
            <input type="password"
            name='confirmarContraseña'
            className='form-control'
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value ={confirmarContraseña}
            placeholder='Repite la contraseña'
            />
        </div>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
    </>
  )
}
