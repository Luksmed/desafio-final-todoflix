import React, { Component } from "react"
import styled from "styled-components";
import family from "../images/family.png"
import heart from "../images/heart.png"
import thumbs from "../images/thumbs.png"
import ReactStars from "react-rating-stars-component"
import Destaques from "../Components/Destaques"

const info = {
  value: 4,
  size: 24,
    
}

const Box1 = styled.div`
    height: 39vh; 
    display: flex;
`

const Fam = styled.img`
    width: 31.1%;
    height: 38.7vh;
    margin-left: 3.9%;    
    z-index: -1;   
 `

const Box2 = styled.div`
    height: 50vh;
    width: 28vw;
    margin-left: 3%;
`

const Prepar = styled.p`
    color: white;
    font-weight: 500;
    margin-top: 1vh;
`

const Pic = styled.img`
  cursor: pointer;
`

const Title = styled.h1`
    font-size: 2.9vw;
    color: white;
`

const Sub = styled.h2`
font-size: 1vw;
color: white;
padding-top: 0.6vh;
font-weight: normal;
`

const Par = styled.p`
padding-top: 0.9vh;
`



const Box3 = styled.div`
    height: 55vh;
    display: ;  
`

const Dest = styled.h3`
    margin-top: 5vh;
    color: white;
    margin-left: 3.9%;   
    font-size: 1.3vw; 
    
`

class Inicio extends Component {
    render() {
      return (
          <section>
            <Box1>
              <Fam src={family} />
              <Box2>
                <Pic src={heart} />
                <Prepar>Visto recentemente</Prepar>
                <Title>Capitao Fantástico</Title>
                <Sub>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</Sub>
                <Par><ReactStars {...info}/></Par>
              </Box2>            
            </Box1>
            <Box3>
              <Dest>Destaques</Dest>
              <Destaques />
            </Box3>
        </section>
          
      )
   }
}

export default Inicio