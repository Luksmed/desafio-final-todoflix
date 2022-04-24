import React, { Component } from "react"
import styled from "styled-components"
import Movies from "../Components/Movies"

const Box1 = styled.div`
    
`

export default class Todos extends React.Component {

    render() {
        return (
            <Box1>
              <Movies /> 
            </Box1>
         )
       }
    }