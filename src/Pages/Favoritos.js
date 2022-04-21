import React, { Component } from "react"
import styled from "styled-components"

const Title = styled.h1`
    color: white;
`

export default class Favoritos extends React.Component {

    render() {
        return (
            <div>
               <Title>FAVORITOS</Title>
            </div>
         )
       }
    }