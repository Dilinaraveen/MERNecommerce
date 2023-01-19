import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
         url('https://img.freepik.com/premium-photo/closeup-dogs-head-white-background-funny-face-dog-with-protruding-tongue_405651-577.jpg?w=1060') center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #ffffff84;
    ${mobile({ width:"75%" })}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    font-size: 18px;
    border: 2px solid teal;
    padding: 15px 20px;
    background-color: white;
    color: teal;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover{
        background-color: teal;
        color: white;
    }
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="first name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>          
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, error?
                <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
