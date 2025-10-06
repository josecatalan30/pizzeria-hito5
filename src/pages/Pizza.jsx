import React, { useEffect, useState } from 'react';

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then(res => {
        if (!res.ok) throw new Error('No se pudo obtener la pizza');
        return res.json();
      })
      .then(data => setPizza(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div className="container py-5 text-center text-danger">Error: {error}</div>;
  }

  if (!pizza) {
    return <div className="container py-5 text-center">Cargando pizza...</div>;
  }

  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-md-5">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h2>{pizza.name}</h2>
          <p className="text-muted">{pizza.desc}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
          <h3 className="mt-3">Precio: ${pizza.price}</h3>
          <button className="btn btn-primary mt-3">Añadir</button>
        </div>
      </div>
    </div>
  );
}