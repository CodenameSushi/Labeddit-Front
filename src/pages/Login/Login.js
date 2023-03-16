import React from 'react'
import { InputDiv, LoginButtonDiv, LoginLogo, MainScreenLogin, } from './Login.styled'
import Logo from '../../assets/Logo.svg'
import Line from '../../assets/Line.svg'
import { ButtonLogin, ButtonSignup, InputStyled } from '../../GlobalStyle'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignup } from '../../routes/coordinator'

const Login = () => {
  const navigate = useNavigate()


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
      <ButtonLogin onClick={() => goToFeed(navigate)}>
        Continuar
      </ButtonLogin>

      <img src={Line}/>

      <ButtonSignup onClick={() => goToSignup(navigate)}> 
        Crie uma conta!
      </ButtonSignup>

      </LoginButtonDiv>
     

      
      




    </MainScreenLogin>
  )
}

export default Login