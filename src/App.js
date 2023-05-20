
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import PostPage from "./pages/PostPage/PostPage";
import CommentPage from "./pages/CommentPage/CommentPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route path={'posts'} element={<PostPage/>}/>
          <Route path={'comments'} element={<CommentPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
