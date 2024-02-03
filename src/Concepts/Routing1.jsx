//we are creating different routes
// on button click we are going to different routes


import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../../Components/Dashboard";
import LandingPage from "../../Components/Landing";

// we are basically not doing client side routing ,on clicking the button basically everything is getting reloaded.
// you will see website getting reloaded everytime you click on any button 
// we are refetching html , similar to searching again on site ,but this is not our goal ,our goal is tonot refetch again
// NOt a good way to do client side routing 




export default function App16(){
    return <div>
  
<button  onClick={()=>{window.location.href="/"}}> Landing Page</button>

<button onClick={()=>{window.location.href="/dashboard"}}>Dashboard Page</button>


<BrowserRouter>
    
<Routes>
    
    <Route path="/"  element={<LandingPage/>}/>
    <Route path={"/dashboard"} element={<DashboardPage/>}/>

</Routes>

</BrowserRouter>

    </div>



}