import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "../../Components/Landing";
import DashboardPage from "../../Components/Dashboard";

export default function App17() {
    return <div>
        <BrowserRouter>
            <CallIt />
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
}

function CallIt() {
    const navigate = useNavigate();
    return <div>

        <button onClick={() => {navigate("/")}}>Landing page</button>
        <button onClick={() => {navigate("/dashboard")}}>DashboardPage</button>
    </div>


}