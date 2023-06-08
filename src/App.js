import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import CarPage from "./pages/CarPage/CarPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
