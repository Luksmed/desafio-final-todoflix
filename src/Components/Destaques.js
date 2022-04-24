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
import heart from "../images/heart.png"
import Carousel from "nuka-carousel";

const Box1 = styled.div`
    margin-top: 2.4vh;       
    margin-left: 1.7vw;     
`

const Image = styled.img`
   
   width: 18vw;
   height: 23vh;      
   
`

const Box2 = styled.div`
    width: 18vw;
    height: 38.7vh;  
    margin-bottom: 1.4vw;
    margin-right: 15px;    
`

const Box3 = styled.div`
  display: flex;
  justify-content: space-between;
`

const Titulo = styled.h2`
    font-size: 1.1vw;
    color: white;
`

const Par = styled.p`
    font-size: 0.9vw;
    padding-top: 0.4vw; 
    color: white;
`

const Pic = styled.img`
  position: absolute;
  margin-left: 17.8vw;
  margin-top: 0.5vh;
  cursor: pointer;
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
        ]
    }

    render() {
        return (
            <Carousel
            slidesToShow={5}
            autoplay="true"            
            autoplayInterval={2500}
            adaptiveHeight={true}
            wrapAround={true}
            defaultControlsConfig={{
                nextButtonText: ">",
                prevButtonText: "<"               
              }}
            >            
            {this.state.filmes.map((item) => (
              <Box1>   
                <Box2>                 
                  <ul>                 
                    {item.image}
                    <Pic src={heart} />
                    <Box3>                   
                      <Titulo>{item.title}</Titulo>
                      <ReactStars />
                    </Box3>
                    <Par>{item.info}</Par>                   
                  </ul>                         
                </Box2>     
              </Box1>       
              ))}                
            </Carousel>
        )
    }
}