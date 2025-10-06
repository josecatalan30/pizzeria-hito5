import { clp } from '../utils/format'
import { useNavigate } from 'react-router-dom'

export default function CardPizza({name, price, ingredients = [], img}) {
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate('/cart')
  }

  return (
    <>
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <div className="mb-2">
          <p>Ingredientes:</p>
          <ul className="mb-0">
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-5">${clp(price)}</span>
          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={handleAdd}>Añadir</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}