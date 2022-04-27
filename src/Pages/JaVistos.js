import React, { Component } from "react"
import styled from "styled-components"

const Box1 = styled.div`
    margin-left: 3.9vw; 
    position: relative ;  
    height: 90vh;
    z-index: 1;    
`

const Title = styled.h1`
    color: white;
    font-size: 2.1vw;
`

const Search = styled.input`
width: 30.2%;
height: 5.1vh; 
background-color: #2C2C2C;
color: white;
border: none;
border-radius: 0.2vw;  
margin-left: 59.3%;
margin-top: -17.2vh;
position: absolute;
`

export default class JaVistos extends React.Component {

    render() {
        return (
            <Box1>
              <Search type="text" placeholder="  🔍  Pesquisar" />
              <Title>Já vistos</Title>             
            </Box1>
         )
       }
    }