import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import UserPage from "./pages/userPage/UserPage";
import CommentPage from "./pages/commentPage/CommentPage";
import CarPage from "./pages/CarPage/CarPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'comments'} element={<CommentPage/>}/>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
