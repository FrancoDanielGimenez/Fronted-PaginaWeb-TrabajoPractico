import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return(
        <>
          <div className="conteiner_login">
              <h2>Iniciar Sesión</h2>
              <div className="form_login">
                <form action="">
                    <label htmlFor=""><FontAwesomeIcon icon={faUser} /> <b>Usuario</b></label>
                    <input type="text" name="" id="" />
                    <label htmlFor=""><FontAwesomeIcon icon={faLock} /> <b>Contraseña</b></label>
                    <input type="password" name="" id="" />
                </form>
                <br />
                <button type="button" className="btn_login">Entrar</button>
              </div>
          </div>
        
        </>
    )
}

export default Login;