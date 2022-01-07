import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import NotFound from "./routes/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
