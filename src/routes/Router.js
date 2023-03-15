import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "../components/Feed/Feed"
import Login from "../components/Login/Login"
import Signup from "../components/Signup/Signup"


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/feed" element={<Feed />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router