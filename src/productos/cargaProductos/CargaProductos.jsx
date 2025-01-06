import './cargaProductos.css';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState } from 'react';

const CargaProductos = () =>{

  const backurl = import.meta.env.VITE_BACK_URL
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [precio, setPrecio] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
      console.log(title,descripcion,contenido,precio,imagen)
  },[title,descripcion,contenido,precio,img])

  
  const handleCrear = async (e) =>{
    e.preventDefault();
    //creamos un objeto blog
    const elementos ={
      title:title,
      descripcion:descripcion,
      contenido:contenido,
      precio:precio,
      img:img,
    }

    //llamada api creacion (fetch)
    await fetchback(elementos)
    console.log(elementos)

    //Ruta a donde se redirige despues de crear un producto
    navigate ("/MisProductos")
  }
  
  //Boton para regresar al Home
  const handleVolver = () =>{
    navigate("/");
  }

  const fetchback = async (producto) => {
    const response = await fetch(`${backurl}productos/`,{
      method:"post",
      headers:{"Content-Type": "application/json"
      },
    body: JSON.stringify(producto),
  });
    const data = await response.json();
    // setProducto(...data.data) 
    console.log(data)   
    }

    return(
        <>
        <div>
          <h2>Carga de Productos</h2>
          <div className='form_carga_productos'>
            <form onSubmit={(e) => handleCrear(e)}>
              <label htmlFor="producto" className='label_cargaProd'><b>Producto </b></label>
              <input type="text" name="" id="producto" className='input_cargaProd'onChange={(e)=> setTitle(e.target.value)}/>
              <label htmlFor="descripcion" className='label_cargaProd'><b>Descripcion</b> </label>
              <textarea name="" id="descripcion" className='input_cargaProd' onChange={(e)=> setDescripcion(e.target.value)}></textarea>
              <label htmlFor="contenido" className='label_cargaProd'><b>Contenido</b> </label>
              <textarea name="" id="contenido" className='input_cargaProd' onChange={(e)=> setContenido(e.target.value)}></textarea>
              <label htmlFor="precio" className='label_cargaProd'><b>Precio</b></label>
              <input type="number" name="" id="precio" className='input_cargaProd' onChange={(e)=> setPrecio(e.target.value)} />
              <label htmlFor="imagen" className='label_cargaProd'><b>Imagen</b></label>
              <input type="file" name="" id="imagen" className='input_cargaProd' onChange={(e)=> setImg(e.target.value)}/> 
              <br />
              <div className='btn_carga_producto'>
                  <button type="submit">Crear</button>
                  <button onClick={handleVolver}>Volver</button>
              </div>
            </form>
          </div>
        </div>
        </>
    )
}

export default CargaProductos;