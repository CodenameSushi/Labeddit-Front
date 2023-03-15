import React from 'react'
import { InputDiv, LoginButtonDiv, LoginLogo, MainScreenLogin, } from './Login.styled'
import Logo from '../../assets/Logo.svg'
import Line from '../../assets/Line.svg'
import { ButtonLogin, ButtonSignup, InputStyled } from '../../GlobalStyle'

const Login = () => {
  return (
    <MainScreenLogin>

      <LoginLogo>
        <img src={Logo}/>
        <p>O projeto de rede social da Labenu</p>
      </LoginLogo>

      <InputDiv>
      <InputStyled value="E-mail" />
      <InputStyled value="Senha" />
      </InputDiv>


      <LoginButtonDiv>
      <ButtonLogin>
        Continuar
      </ButtonLogin>

      <img src={Line}/>

      <ButtonSignup>
        Crie uma conta!
      </ButtonSignup>

      </LoginButtonDiv>
     

      
      




    </MainScreenLogin>
  )
}

export default Login