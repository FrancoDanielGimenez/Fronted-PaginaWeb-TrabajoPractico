import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import '../styles/cards.css';

const CardsModificar = ({prod,handleDelate}) =>{
    
  const navigate = useNavigate()

  const handleUpdate = async (id) =>{
        navigate(`/ModificarProductos/${id}`)
  }

    return(
        <>
        <div className='contenier_cards'>
          <img src={prod.img} alt="imagen del producto" height={150} width={150}  />
          <div className='descripcion'>
            <h3>{prod.title}</h3>
            <p>{prod.descripcion}</p>
            <h2>${prod.precio.toFixed(0)}</h2> {/* h2 y quitar decimales */}
          </div>
          <button type="button" className='btn_card' onClick={()=>handleDelate (prod.id)}><FontAwesomeIcon icon={faMagnifyingGlass} /> Eliminar</button>
          <button type='button' className='btn_card' onClick={()=>handleUpdate (prod.id)} ><FontAwesomeIcon icon={faCartShopping} /> Modificar</button>
        </div>
        </>
    )
}

export default CardsModificar;