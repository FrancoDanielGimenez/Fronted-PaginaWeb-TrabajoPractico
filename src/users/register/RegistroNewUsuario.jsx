import './RegistroNewUsuario.css';

const RegistroNewUsuario = () =>{
    return(
        <>
        <div>
          <h1>Nuevo Usuario</h1>
          <div className='form_new_usuario'>
            <form action="">
              <label htmlFor=""><b>Nombre</b></label>
              <input type="text" name="" id="" className='input_new_user'/>
              <label htmlFor=""><b>Apellido</b></label>
              <input type="text" name="" id="" className='input_new_user'/>
              <label htmlFor=""><b>Nro. de Documento</b></label>
              <input type="number" name="" id="" className='input_new_user'/>
              <label htmlFor=""><b>Ciudad</b></label>
              <input type="text" name="" id="" className='input_new_user'/>
              <label htmlFor=""><b>Nombre de Usuario</b></label>
              <input type="text" name="" id="" className='input_new_user'/>
              <label htmlFor=""><b>Contraseña</b></label>
              <input type="password" name="" id="" className='input_new_user'/>
              <h3>Tipo de Usuario</h3>
              <div className='form_tipo_usuario'>
                <label htmlFor=""><b>Cliente</b></label>
                <input type="checkbox" name="" id="" className='input_checkbox'/>
                <label htmlFor=""><b>Proveedor</b></label>
                <input type="checkbox" name="" id="" className='input_checkbox' />
              </div>
              <button type="button" className='btn_registrar'>Registrar</button>
            </form>
          </div>
        </div>
        </>
    );
};

export default RegistroNewUsuario;