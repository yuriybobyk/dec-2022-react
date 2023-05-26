import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UserPage from "./pages/userPage/UserPage";
import PostPage from "./pages/postPage/PostPage";
import CommentPage from "./pages/commentPage/CommentPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'comments'} element={<CommentPage/>}/>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
