import './cargaProductos.css';

const CargaProductos = () =>{

    return(
        <>
        <div>
          <h2>Carga de Productos</h2>
          <div className='form_carga_productos'>
            <form action="" method="get">
              <label htmlFor="producto" className='label_cargaProd'><b>Producto </b></label>
              <input type="text" name="" id="producto" className='input_cargaProd'/>
              <label htmlFor="descripcion" className='label_cargaProd'><b>Descripcion</b> </label>
              <textarea name="" id="descripcion" className='input_cargaProd'></textarea>
              <label htmlFor="contenido" className='label_cargaProd'><b>Contenido</b> </label>
              <textarea name="" id="contenido" className='input_cargaProd'></textarea>
              <label htmlFor="precio" className='label_cargaProd'><b>Precio</b></label>
              <input type="number" name="" id="precio" className='input_cargaProd' />
              <label htmlFor="imagen" className='label_cargaProd'><b>Imagen</b></label>
              <input type="file" name="" id="imagen" className='input_cargaProd' /> 
            </form>
            <br />
            <div className='btn_carga_producto'>
                <button type="submit">Crear</button>
                <button type="submit">Volver</button>
            </div> 
          </div>
        </div>
        </>
    )
}

export default CargaProductos;