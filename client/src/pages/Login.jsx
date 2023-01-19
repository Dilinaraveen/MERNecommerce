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
         url('https://img.freepik.com/premium-photo/closeup-dogs-head-white-background-funny-face-dog-with-protruding-tongue_405651-577.jpg?w=1060');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;;
    ${mobile({ width:"75%" })}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font: 24px;
    font-weight: 300;
    ${mobile({ marginBottom:"10px" })}
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    font-size: 18px;
    border: 2px solid teal;
    padding: 15px 20px;
    margin: 10px 0px;
    background-color: white;
    color: teal;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover{
        background-color: teal;
        color: white;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>          
            <Input placeholder="password"/> 
            <Button>LOGIN</Button>
            <Link>DO NOT REMEMBER THE PASSWORD?</Link>
            <Link>CREATE AN NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
