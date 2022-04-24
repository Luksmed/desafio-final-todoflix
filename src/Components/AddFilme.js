import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component"
import mask from "../images/mask.png"

const Box1 = styled.div`
    border: 1px solid grey;
    border-radius: 1%;
    width: 59.7%;
    height: 105vh;
    position: absolute;
    margin-left: 20.15%;
    margin-top: 10.4vh;
    background-color: black;
    z-index: 10;
`;

const ButClose = styled.button`
  height: 3.8vh;
  width: 1.75vw;
  font-size: 1.5vw;
  color: #FFFFFF;
  background-color: black;
  border: none;
  cursor: pointer;
  margin-left: 95%;
  margin-top: 1.4vh;
`

const Title = styled.h1`
    font-size: 2.1vw;
    margin-top: 6.9vh;
    margin-left: 4vw;
    font-weight: normal;
`

const Box2 = styled.div`
    margin-top: 7.1vh;
    width: 51vw;
    height: 80vh;
    margin-left: 4vw;
    border: 1px solid transparent;
    position: relative;
`

const Box3 = styled.div`
  position: absolute;
  height: 50vh;
  width: 29.2vw;
`

const Box4 = styled.div`
position: absolute;
width: 19vw;
margin-left: 32.5vw;
height: 50vh;
`

const Tag = styled.label`
  font-size: 1.1vw;
  font-weight: bold;
`


const Tag2 = styled.label`
  font-size: 1.1vw;
  
  `

const Field = styled.input`
  display: block;
  margin-top: 1.2vh;
  margin-bottom: 3.8vh;
  width: 29.2vw;
  height: 6.4vh;
  background-color: #2C2C2C;
  border: none;
  border-radius: 2%;
  color: white;
`

const Field2 = styled.input`
  display: block;
  margin-top: 1.2vh;
  margin-bottom: 3.8vh;
  width: 29.2vw;
  height: 12.8vh;
  background-color: #2C2C2C;
  border: none;
  border-radius: 2%;
  color: white;
`

const Field3 = styled.input`
height: 1.75vw;
width: 1.75vw;
margin-right: 0.5vw;
`

const Field4 = styled.input`
  margin-left: 2vw;
  height: 1.75vw;
  width: 1.75vw;
  margin-right: 0.5vw;
`

const Par = styled.p`
  font-size: 1.1vw;
  margin-bottom: 1.2vh;
  font-weight: bold;
`

const Par2 = styled.p`
  font-size: 1.1vw;
  margin-top: 4.3vh;
  font-weight: bold;
  
`

const Pic = styled.img`
  border: 1px solid grey;
  border-radius: 2%;
  width: 19vw;
  height: 23.6vh
`

const But = styled.button`
  height: 5.1vh;
  width: 10.1;
  font-size: 0.9vw;
  margin-top: 1.9vh;
  padding: 4px;
  border-radius: 5%;
  background-color: #FFFFFF;
  cursor: pointer;
  color: black;
  border: none;
`

const But2 = styled.button`
  height: 5.9vh;
  width: 7.6vw;
  font-size: 0.9vw;
  color: #FFFFFF;
  background-color: black;
  border: none;
  cursor: pointer;
`

const But3 = styled.button`
  height: 5.9vh;
  width: 7.6vw;
  font-size: 0.9vw;
  background-color: #E71B27;
  border: none;
  border-radius: 5%;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: bold;
`

const Box5 = styled.div`
positon: absolute;
margin-top: 65vh;
margin-left: 16.5vw;
height: 15vh;
width: 18vw;
display: flex;
justify-content: space-evenly;
align-items: center;
font-weight: bold;
`

export default class AddFilme extends React.Component {
  render() {
    return (
      <Box1>
        <ButClose>X</ButClose>
        <Title>Adicionar Filme</Title>
        <Box2>
          <Box3>
          <Tag for="name">Nome</Tag>
          <Field type="text" id="name"  />
          <Tag for="desc">Descrição</Tag>     
          <Field2 type="textarea" id="desc"  />
          <Par>Status</Par>
          <Field3 type="radio" id="html" name="fav_language" value="Já assisti" />
          <Tag2 for="html">Já assisti</Tag2>
          <Field4 type="radio" id="css" name="fav_language" value="Ainda não assisti" />
          <Tag2 for="css">Ainda não assisti</Tag2>
          <Par2>Nota</Par2>
          <ReactStars 
          size={37}
          />
          </Box3>
          <Box4>
            <Par>Imagem de Capa</Par>
            <Pic src={mask} />
            <But>Selecionar imagem</But>
          </Box4>       
          <Box5>
            <But2>Cancelar</But2>
            <But3>Confirmar</But3>
          </Box5>     
        </Box2>        
      </Box1>
    );
  }
}
