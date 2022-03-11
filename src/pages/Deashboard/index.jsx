import {Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import CreateDo from "../../components/CreateDo";
import api from "../../api";
import "./styles.scss";


export default function Deashboard(){
  const [listTarefas, setListTarefas] = useState([]);
  useEffect(()=>{
    setInterval(() => {
      api.get("listdo").then(async (response) =>{
        const list = await response.data;
        setListTarefas(list);
      })
    }, 2000);
  },[])
  const [ openCreateDo, setOpenCreateDo] = useState(false);
  //Invertendo arr de objetos.
  const listInvert = listTarefas.slice(0).reverse();
  const [openMenu, setOpenMenu] = useState(false);
  return(
    <div className="container">
      <header className={openMenu? "openMenu": ""}>
        <div className="cabecalho">
          <img src="assets/programer.jfif" alt="user-photo" />
          <h1>Nome do usuário</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/deashboard"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link>
                <a>configurações</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="list">
        <div className="cabecalho">
          <h1>Sua lista de tarefas</h1>
          <div className={`menuIcon ${openMenu ? "menuOpen": ""}`} onClick={()=>setOpenMenu(!openMenu)}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <button onClick={()=>setOpenCreateDo(!openCreateDo)}>
            <p>+</p>
            <span>add tarefa</span>
          </button>
        </div>
        {listTarefas.length === 0? 
        <div className="loading">
          <div>
            <span className="fo1">🚀</span>
            <span className="fo2">🚀</span>
            <span className="fo3">🚀</span>
          </div>
          <h1>Loading....</h1>
        </div>
        :
        <div className="wrapper">
          {listInvert.map((item) => (
            <ItemList
              key={item.id}
              id={item.id}
              title={item.title}
              created_at={item.created_at}
              deadline={item.deadline}
            />
          ))}
        </div>
        }
      </div>
      {openCreateDo ? <CreateDo closeCreate={()=>setOpenCreateDo(false)}/> : ""}
    </div>
  )
}