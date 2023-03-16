import { Header, MainScreen } from "../../GlobalStyle"
import Logo from  '../../assets/Logo-small.svg'
import Close from '../../assets/Close.svg'
import Line from '../../assets/Line.svg'
import { ButtonPost, PostInput } from "./Feed.styled"
import PostCard from "../../components/PostCard/PostCard"
import { goToLogin } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"



export const Feed = () => {
    const navigate = useNavigate()
    return (
        <MainScreen>
       <Header>
       <div>
        <button>
            <img src={Close}/>
            </button>
            </div>
        <img src={Logo} alt="logo"/>
        <a onClick={() => goToLogin(navigate)}>Logout</a>
       </Header>


        <PostInput placeholder="Escreva seu post..."/>

        <ButtonPost>Postar</ButtonPost>

        <img src={Line} />

        <PostCard/>
  
    


        </MainScreen>
        

    )
}

export default Feed