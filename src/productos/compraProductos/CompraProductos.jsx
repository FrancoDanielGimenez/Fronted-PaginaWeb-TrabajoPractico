import '../compraProductos/CompraProductos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressCard, faCity } from '@fortawesome/free-solid-svg-icons';


const CompraProductos = () =>{
    return(
        <>
        <div>
            <h2>Compras Realizadas</h2>
            <div>
              <div className='datos_usuario_compra'>
                <h4>Nombre y Apellido: Juan Jose Alvarez</h4>
                <p><FontAwesomeIcon icon={faUser} /> Usuario: Usuario Logueado</p>
                <p><FontAwesomeIcon icon={faAddressCard} /> Nro de Documento: 25668945</p>
                <p><FontAwesomeIcon icon={faCity} /> Ciudad: Jesus Maria</p>
              </div>
              <div className="tabla_productos">
                <table>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Caracteristica</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <th>Notebook</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div> 
              <div>
                <table className='tabla_precio'>
                  <thead>
                    <tr>
                      <th>Precio Total</th>
                    </tr>
                    <tr>
                      <th>$15555.51511</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
        </div>
        </>
    )
}

export default CompraProductos;