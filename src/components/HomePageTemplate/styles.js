import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 50px;
`

const Button = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60%;
  padding: 20px 10px 20px 10px;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
  outline: none;
  background: #8C43FF;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #8C43FF;
  }
`

const Contact = styled.div`
    height: 166px;
    width: 75%;
    background: #293347;
    margin: 0 auto 50px auto;
    border-radius: 10px;
    margin-top: 100px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 0 0 1px #293347;
    @media(max-width: 1010px) {
      width: 90%;
    }
    .consult {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      width: 90%;
      grid-gap: 15px;
      margin: 0 auto;
      
      h1 {
        font-weight: 800;
        color: #fff;
        text-transform: none !important;
        font-size: 32px;
      }
      p {
        
        font-size: 18px;
        font-weight: 400;
        color: #fff;
      }
      button {
        background-color: transparent;
        border: 2px solid #8C43FF;
        width: 240px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 400;
        text-decoration: none;
        color: white;
        outline: none;
        &:hover {
          background-color: #8C43FF;
        }
      }
      .contact-element {
        text-align: center;
        margin-top: 60px;
        font-family: Jura;
        @media(max-width: 1010px) {
          margin-top: 40px;
        }
      }
    }
`

export {
  Container,
  Button,
  Contact
}