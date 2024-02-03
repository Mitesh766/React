import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Dashboard=lazy(()=>import("../../Components/Dashboard"))
const Landing=lazy(()=>import("../../Components/Landing"))


export default function App18(){
return <div>
    <BrowserRouter>
<CallIt/>
    <Suspense fallback={<div>Loading...jacnjnckjbcjbejbchjbjhbjhb</div>}>
    <Routes>
<Route path="/" element={<Landing/>}/>
<Route path="/dashboard" element={<Dashboard/>}  />

    </Routes>
    </Suspense>
    
    </BrowserRouter>
</div>
}

function CallIt(){
const navigate=useNavigate();
    return<div>

    <button onClick={()=>{
navigate("/")
    }}>Landing Page</button>
    <button onClick={()=>{
        navigate("/dashboard")
    }} >Dashboard Page</button>
    </div>


}