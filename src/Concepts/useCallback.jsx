
// it won't rerender again and again as CalculateIt is a callBack function and HI will also be not logged again and again

// if it wouldn't have been a callBack function // as CalculateIt is a function ,even though it is not changing ,it will 
// rerender it again and again and HI will be logged again and again
import { useEffect, useState ,memo, useCallback} from "react"

function App11(){

const [exchange1Data,setE1Data]=useState({})
const [exchange2Data,setE2Data]=useState({})
const [bankData,setBankData]=useState({})
useEffect(()=>{
    setE1Data({
        returns:100
    })
},[])
useEffect(()=>{
    setE2Data({
        returns:200
    })
},[])
useEffect(()=>{
    setTimeout(()=>{
        setBankData({
            income:100
        })
    },5000)
  
},[exchange1Data,exchange2Data])


const CalculateIt=useCallback(function(){
    return exchange1Data.returns+ exchange2Data.returns
},[exchange1Data,exchange2Data]) 

return<div>
    <CalculateCryptoReturn earnings={CalculateIt}/>
</div>
}
//if this is not in memo then also it will work
const CalculateCryptoReturn=memo(function({earnings}){
    console.log("HI")
    return<div>
        Your crypto returns are {earnings()}
    </div>
})
export default App11