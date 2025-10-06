import React from 'react'

export default function Profile() {
    const email = 'usuario@gmail.com'
  return (
    <>
      <h2>Mi perfil</h2>
      <p><strong>Email:</strong> {email}</p>
      <button className="btn btn-outline-danger">Cerrar sesión</button>
    </>
  )
}
