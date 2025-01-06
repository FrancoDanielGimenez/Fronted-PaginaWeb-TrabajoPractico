import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import CargaProductos from './productos/cargaProductos/CargaProductos';
import ModificarProductos from './productos/modificarProductos/ModificarProductos.jsx'
import ListaProductos from './productos/listaProductos/ListaProductos.jsx';
import VerProductos from './productos/verProductos/VerProductos.jsx'
import RegistroNewUsuario from './users/register/RegistroNewUsuario.jsx';
import CompraProductos from './productos/compraProductos/CompraProductos.jsx';
import Login from './users/login/Login.jsx'
import './App.css'
import Home from './pages/home/Home.jsx';
import MisProductos from './productos/misProductos/MisProductos.jsx';

function App() {

  return (
    <>
      {/**Rutas */}
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} /> {/**Ver Todos los blogs*/}
          <Route path='/Login' element={<Login/>} /> {/**Login de la pagina*/}
          <Route path='/MisProductos' element={<MisProductos/>} /> {/**Ver Productos creado propios*/}
          <Route path='/CargaProductos' element={<CargaProductos/>} /> {/**Cargar los productos cargados*/}
          <Route path='/ModificarProductos' element={<ModificarProductos/>} /> {/**Modificar los productos cargados*/}
          <Route path='/ListaProductos' element={<ListaProductos/>} /> {/**Lista los productos cargados*/}
          <Route path='/productos/:id' element={<VerProductos/>} /> {/**Ver Productos*/}
          <Route path='/RegistroNewUsuario' element={<RegistroNewUsuario/>} /> {/**Registrar nuevo Usuario Cliente o Proveedor*/}
          <Route path='/CompraProductos' element={<CompraProductos/>} /> {/**Registrar nuevo Usuario Cliente o Proveedor*/}
        </Routes>
        <Footer/>
      </BrowserRouter>   
    </>
  )
}

export default App;
