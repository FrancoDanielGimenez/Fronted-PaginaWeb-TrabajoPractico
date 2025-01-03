import { useNavigate } from 'react-router-dom';
import '../detalleProductos/detalleProducto.css';

const DetalleProducto = ({prod}) =>{

    const navigate = useNavigate()

    const handleClick = () =>{
      navigate('/')
    }

    return(
        <>
        <div>
          <div className='contenier_detalle'>
            <img src={prod.img} alt="imagen de pc" height={250} width={250}  />
            <div className='descripcion'>
              <h3>{prod.title}</h3>
              <p>{prod.descripcion}</p>
              <p>${prod.precio}</p>
              <p>{prod.contenido}</p>
            </div>
            <button className='btn_volver' onClick={handleClick}>Volver</button>
          </div>
        </div>
        </>
    )
}

export default DetalleProducto;