import '../styles/nav.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faCartShopping , faUser , faTruckFast} from '@fortawesome/free-solid-svg-icons';

const Nav = () =>{
    return(
        <>
          <div className="conteiner_nav">
            <div className='navLink1'>
              <NavLink to={'/'}><FontAwesomeIcon icon={faHouse}/> Inicio</NavLink>
            </div>
            <div className='navLink1'>
              <NavLink to={'/MisProductos'}><FontAwesomeIcon icon={faCartShopping} /> Mis Productos</NavLink>
            </div>
            <div className='navLink1'>
              <NavLink to={'/CargaProductos'}><FontAwesomeIcon icon={faTruckFast} /> Nuevo Producto</NavLink>
            </div>
            <div className='navLink2'>
              <NavLink to={'/Login'}><FontAwesomeIcon icon={faUser} /> Iniciar Sesión</NavLink>
            </div>
            <div className='navLink3'>
              <NavLink to={'/RegistroNewUsuario'}><FontAwesomeIcon icon={faFilePen} /> Registrarse</NavLink>
            </div>  
          </div>
        </>
    )
}

export default Nav;