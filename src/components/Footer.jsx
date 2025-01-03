import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons' 
import {faSquareXTwitter} from '@fortawesome/free-brands-svg-icons' 
import {faFacebook} from '@fortawesome/free-brands-svg-icons' 
import '../styles/footer.css';

const Footer = () =>{
    return(
      <>
        <div className='conteiner_footer'>
          <h3 className='titulo'>Nuestra Informacion</h3>
          <p className='parrafo'>Tienda de Computacion ubicada en la Ciudad de Cordoba. Armamos y Vendemos Computadoras Gamer, Diseño, Oficina y Hogar. Trabajamos una amplia variedad Notebooks para todos los usos y todo tipo de Accesorio Gamer y Periferico para tu Computdora.
          Todo lo que necesitas en Computacion lo encontras en Compu Cordoba.. Con 22 Años de Experiencia. Desde 2002 hasta Hoy. Enviamos a todo el pais</p>
          <div className='lista_contenedor'>
              <div>
                <h3>Información</h3>
                <ul className='lista'>
                  <li><a href="http://" target="_blank">Terminos y Condiciones</a></li>
                  <li><a href="http://" target="_blank">Politicas de Privacidad</a></li>
                  <li><a href="http://" target="_blank">Mis Pedidos</a></li>
                </ul>
              </div>
              <div className='lista'>
                <h3>Categorias</h3>
                <ul>
                  <li><a href="http://" target="_blank">Computadoras</a></li>
                  <li><a href="http://" target="_blank">Notebooks</a></li>
                  <li><a href="http://" target="_blank">Componentes de Pc</a></li>
                </ul>
              </div>
              <div className='lista'>
                <h3>Redes Sociales</h3>
                <ul>
                  <li><a href="http://" target="_blank"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                  <li><a href="http://" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</a></li>
                  <li><a href="http://" target="_blank"><FontAwesomeIcon icon={faSquareXTwitter} /> Twitter</a></li>
                </ul>
              </div>
          </div>
          <div><p>&copy; 2024 Tu Sitio de Blogs. Todos los derechos reservados.</p></div>
        </div>
      </>
    )
}

export default Footer;