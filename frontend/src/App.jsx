import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoginScreen from "./screen/LoginScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
