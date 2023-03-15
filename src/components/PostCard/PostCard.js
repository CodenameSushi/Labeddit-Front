import { CommentButtonDiv, PostButtonsContainer, PostContainer, VoteButtonDiv } from "./PostCard.styled"
import Upvote from '../../assets/Upvote.svg'
import Downvote from '../../assets/Downvote.svg'
import Comment from '../../assets/Comment.svg'


const PostCard = () => {
    return (
        <>
        <PostContainer>
            <span>Enviado por: labaluno38</span>
            <p>Porque a maioria 
                dos desenvolvedores usam Linux? ou as empresas de tecnologia 
                usam Linux ?
            </p>

            <PostButtonsContainer>
                <VoteButtonDiv>
                    <button><img src={Upvote}/></button>
                    <span>1.2k</span>
                    <button><img src={Downvote}/></button>
                </VoteButtonDiv>
                <CommentButtonDiv>
                    <button><img src={Comment}/></button>
                    <span>123</span>
                </CommentButtonDiv>

            </PostButtonsContainer>


        </PostContainer>

        <PostContainer>
            <span>Enviado por: labaluno38</span>
            <p>Porque a maioria 
                dos desenvolvedores usam Linux? ou as empresas de tecnologia 
                usam Linux ?Porque a maioria 
                dos desenvolvedores usam Linux? ou as empresas de tecnologia 
                usam Linux ?Porque a maioria 
                dos desenvolvedores usam Linux? ou as empresas de tecnologia 
                usam Linux ?Porque a maioria 
                dos desenvolvedores usam Linux? ou as empresas de tecnologia 
                usam Linux ?
            </p>

            <PostButtonsContainer>
                <VoteButtonDiv>
                    <button><img src={Upvote}/></button>
                    <span>1.2k</span>
                    <button><img src={Downvote}/></button>
                </VoteButtonDiv>
                <CommentButtonDiv>
                    <button><img src={Comment}/></button>
                    <span>123</span>
                </CommentButtonDiv>

            </PostButtonsContainer>


        </PostContainer>
        </>
    )
}

export default PostCard