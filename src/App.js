import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Inicio from "./Pages/Inicio"
import Todos from "./Pages/Todos"
import Favoritos from "./Pages/Favoritos"
import JaVistos from "./Pages/JaVistos"
import Adicionados from "./Pages/Adicionados"
import todoflix from "./images/todoflix2.png"
import user from "./images/user.png"
import arrowdown from "./images/arrowdown.png"
import AddFilme from "./Components/AddFilme";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  background-color: #000000;
}
`

const Box1 = styled.div`
  width: 100%;
  height: 20vh;
  color: white;    
  display: flex;  
`

const Todo = styled.img`
  margin-top: 2.4vh;
  margin-left: 3.9%;
  width: 7.5%;
  height: 6.4vh;
`

const List = styled.ul`
  display: flex;  
  list-style: none;
  margin-top: 3.5vh;    
`;

const ListItem = styled.li`
  font-size: 1.2vw;
  margin-left: 2vw;
  cursor: pointer;
`;

const Categ = styled.button`
  font-size: 1.134vw;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: normal;
`

const EstiloLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Add = styled.button`
  width: 8.1%;
  height: 5.1vh;
  margin-left: 28%;
  margin-top: 2.7vh;
  font-size: 0.9vw;
  background-color: #E71B27;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 0.2vw; 
`

const Search = styled.input`
  width: 29.2%;
  height: 5.1vh;
  margin-top: 2.7vh;
  margin-left: 1%;
  background-color: #2C2C2C;
  color: white;
  border: none;
  border-radius: 0.2vw;  
`
const User = styled.img`
  width: 2.3%;
  height: 5.1vh;
  margin-top: 2.7vh;
  margin-left: 2%;
  cursor: pointer;  
`

const Arrow = styled.img`
  width: 1.7%;
  height: 3.8vh;
  margin-top: 3.3vh;  
`

const Menu = styled.ul`
  font-size: 14px;
  background-color: black;
  color: white;
  padding: 1vw;  
  position: absolute;  
  line-height: 2;
`

const MenuItem = styled.p`
  
`


export default class App extends React.Component {

  state = {
    stateList: false,
    stateList2: false
  }

  handleList = () => {
    this.setState({ stateList: !this.state.stateList });
  }

  handleList2 = () => {
    this.setState({ stateList2: !this.state.stateList2 });
  }

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Box1>
          <Todo src={todoflix} />
          <nav>    
            <List>    
              <ListItem>
                <Categ><EstiloLink to="/">Início</EstiloLink></Categ>
              </ListItem>   
              <ListItem>         
              <Categ onClick={this.handleList}>Categorias</Categ>
              {this.state.stateList && (
                <Menu>
                  <MenuItem><EstiloLink to="/todos">Todos</EstiloLink></MenuItem>
                  <MenuItem><EstiloLink to="/favoritos">Favoritos</EstiloLink></MenuItem>
                  <MenuItem><EstiloLink to="/javistos">Já vistos</EstiloLink></MenuItem>
                  <MenuItem><EstiloLink to="/adicionados">Adicionados</EstiloLink></MenuItem>   
                </Menu>
              )}           
              </ListItem>
            </List>
          </nav>
          <Add onClick={this.handleList2}>Adicionar filme</Add>        
          {this.state.stateList2 && <AddFilme />}
          
          
          
          <Search type="text" placeholder="  🔍  Pesquisar" /> 
          <User src={user} />
          <Arrow src={arrowdown} />
        </Box1>
        <Routes>
          <Route path="/" element={<Inicio/>} />  
          <Route path="/todos" element={<Todos/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/javistos" element={<JaVistos/>} />
          <Route path="/adicionados" element={<Adicionados/>} />
        </Routes>  
      </Router>
    )
  }
}

/*

import React from 'react'
import Modal from 'react-modal'

export default class App extends React.Component {

  state ={
    taAberto : false
  }

  openModal = () => {
    this.setState({taAberto:true})
  }

  closeModal = () = {
  this.setState({stateModal: false})
  }

  render(){
    return(
      <div>
      <button onClick={this.openModal}>Open Modal</button>
      
      style={{
    overlay: {      
      backgroundColor: 'aquamarine'
    },
    content: {     
      backgroundcolor: 'yellow',      
    }
  }}  
          
      isOpen={this.state.taAberto}>
        <button>Close Modal</button>
        <h3>Hi Folks<h3>
      </Modal>
      <div>
    )
  }
}


estilo por classe

Modal ClassName=
e/ou
Modal overlayClassName






<details>
                  <summary>Categorias</summary>

                   </details>


*/