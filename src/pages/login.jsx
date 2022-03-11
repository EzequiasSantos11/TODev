import { useState } from "react";
import "../styles/Login.scss";
import {Link} from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function Login(){
  const [ viewPassword, setViewPassword ] = useState(false);
  return(
    <div className="container">
      <div className="left">
        <img src="/assets/programer.jfif" alt="jj" />
      </div>
      <form>
        <h1>Faça o seu login</h1>
        <div className="email">
          <label htmlFor="email">Digite seu email</label>
          <input type="email" name="" id="" />
        </div>
        <div className="senha">
          <label htmlFor="senha">Digite sua senha</label>
          <input type={viewPassword ? "text" : "password"} name="senha" id="senha" />
          
          <div className="iconsPass" >
            <VisibilityIcon 
              onClick={()=>setViewPassword(false)}
              style={{display: viewPassword ? "flex" : "none"}}/>
            <VisibilityOffIcon 
              onClick={()=>setViewPassword(true)}
            style={{display: viewPassword ? "none" : "flex"}}/>
          </div>
        </div>
        <Link className="enter" to={"/deashboard"}>
          <button>
            <a>Entrar</a>
          </button>
        </Link>
        <span>ou</span>
        <button className="create">criar conta</button>
      </form>
    </div>
  )
}