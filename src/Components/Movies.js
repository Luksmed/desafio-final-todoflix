import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component"
import shrek from "../images/shrek.png"
import spider from "../images/spider.png"
import sonho from "../images/sonho.png"
import horas from "../images/horas.png"
import hoje from "../images/hoje.png"
import fuga from "../images/fuga.jpg"
import amarelo from "../images/amarelo.jpg"
import rocket from "../images/rocket.jpg"


const Box1 = styled.div`
    position: relative ;       
    margin-left: 3.9vw;   
    z-index: ;
`

const Box2 = styled.div`    
    color: white;
    margin-right: 18% ; 
    margin-top: 2.4vh;
    display: flex;
    flex-wrap: wrap;
`

const Box3 = styled.div`
    width: 18vw;
    height: 38.7vh;  
    margin-bottom: 1.4vw;
    margin-right: 15px;    
`

const Title = styled.h1`
    font-size: 2.1vw;
    color: white;    
      
`

const Image = styled.img`
   cursor: pointer;
   width: 18vw;
   height: 23vh;   
   &:hover {
    transform: scale(1.02)
   }
`

const info = {
  
}

const Titulo = styled.h2`
    font-size: 1.1vw;
`

const Par = styled.p`
    font-size: 0.9vw;
    padding-top: 0.4vw; 
`

const Box4 = styled.div`
  display: flex;
  justify-content: space-between;
`

export default class Movies extends React.Component {

    state = {
        filmes: [
            {
              image: <Image src={shrek} />,
              title: "Shrek",
              info: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
            },
            {
              image: <Image src={spider} />,
              title: "Spider-man",
              info: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
             },
            {
              image: <Image src={sonho} />,
              title: "Um Sonho de Liberdade",
              info: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."  
            },
            {
              image: <Image src={horas} />,
              title: "Que Horas Ela Volta?",
              info: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."  
            },
            {
              image: <Image src={hoje} />,
              title: "Hoje Eu Quero Voltar…",
              info: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."  
            },
            {
              image: <Image src={fuga} />,
              title: "A Fuga das Galinhas",
              info: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
            },
            {
              image: <Image src={amarelo} />,
              title: "AmarElo",
              info: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."  
            },
            {
              image: <Image src={rocket} />,
              title: "Rocketman",
              info: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."  
            }                    
        ],        
        filtroFilmes: []
    }

    componentDidMount() {
      this.getFilmes();
    }
  
    getFilmes = async () => {     
  
      const movies = this.state.filmes.map((item) => {
        return {
          ...item         
        };
      });
  
      this.setState({
        filmes: movies,
        filtroFilmes: movies
      });
    };
  
    filtroMov = (e) => {
      const { filmes } = this.state;
  
      const funcaoFilter = filmes.filter((item) => {
        if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
          return true;
        }
      });
  
      this.setState({
        filtroFilmes: funcaoFilter
      });
    };
        
    render() {
       return (         
        <Box1>
          <input type="text"
            placeholder="Pesquisar filme" onChange={this.filtroMov} />
            <Title>Todos</Title>
            <Box2>           
              {this.state.filtroFilmes.map((item) => (
               <Box3>
                 <ul>
                   {item.image}
                   <Box4>
                     <Titulo>{item.title}</Titulo>
                     <ReactStars />
                   </Box4>
                   <Par>{item.info}</Par>
                 </ul>         
               </Box3>                     
              ))}           
            </Box2>
        </Box1>       
       )
    } 
}

/*

import React from "react"
import styled from "styled-components"


const Container = styled.div`
    width: 60vw;
    height: 40vh;
    background-color: bisque;
    border: 2px solid red;
    margin: 5px;
    text-align: center;
`

const Card = ({nome, idade, gosto, children}) => {
    return (
        <Container>
            <p>Oi, me chamo {nome}, tenho {idade} anos e gosto de {gosto}</p>
            {children}
        </Container>
    )
}

export default Card

--------------------------------------------------------------------------------------

import React from 'react'
import Card from "./Components/Cards"

const Props = () => {
  return (
    <div>
      <Card nome="Natalia" idade="33" gosto="chocolate" />
      <Card nome="Mari" idade="24" gosto="uva">
      <button>Clique aqui</button>
      </Card>
    </div>
  )
}

export default Props


{
              image: <Image src={} />,
              title: "",
              info: ""  
            },
            {
                image: <Image src={} />,
                title: "",
                info: ""  
            },
            {
                image: <Image src={} />,
                title: "",
                info: ""  
            }


*/
