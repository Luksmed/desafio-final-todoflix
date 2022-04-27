import React, { Component } from "react"
import styled from "styled-components"
import Movies from "../Components/Movies"
import { Link } from "react-router-dom"

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