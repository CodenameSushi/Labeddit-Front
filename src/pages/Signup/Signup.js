import { useNavigate } from 'react-router-dom'
import Logo from  '../../assets/Logo-small.svg'
import { ButtonLogin, Header, InputStyled, MainScreen } from '../../GlobalStyle'
import { goToFeed, goToLogin } from '../../routes/coordinator'
import { H1Welcome, InputDiv, PrivacyCheck } from './Signup.styled'

const Signup = () => {
    const navigate = useNavigate()
    return (
        <MainScreen>
            <Header>
                <div></div>
                <img src={Logo} alt="logo"/>
                <a onClick={() => goToLogin(navigate)}>Entrar</a>
            </Header>
            <H1Welcome>
            <h1>Olá, boas vindas ao LabEddit ;)</h1>
            </H1Welcome>


            <InputDiv>
            <InputStyled value="Apelido"/>
            <InputStyled value="E-mail"/>
            <InputStyled value="Senha"/>
            </InputDiv>

            <PrivacyCheck>

            <p>Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e nossa <a>Política de Privacidade</a></p>

            <div>
            <input type="checkbox" id="privacy" name="privacy" />
            <label for="privacy">Eu concordo em receber emails sobre coisas legais no Labeddit</label>
            </div>
            </PrivacyCheck>

            <ButtonLogin onClick={() => goToFeed(navigate)}>Cadastrar</ButtonLogin>


        </MainScreen>

    )
}

export default Signup 