import { useEffect, useState } from "react"

function App10(){

const [exhange1Data,setE1Data]=useState({})
const [exhange2Data,setE2Data]=useState({})
const [bankData,setBankData]=useState({})
useEffect(()=>{
    setE1Data({
        returns:100
    })
},[])
useEffect(()=>{
    setE2Data({
        returns:100
    })
},[])
useEffect(()=>{
    setTimeout(()=>{
        setBankData({
            income:100
        })
    },5000)
  
},[exhange1Data,exhange2Data])

console.log("Hi")
const incomeTax= useMemo(()=>{
   return (exhange1Data.returns +exhange2Data.returns )*0.3
  
},[])

console.log("Hi")

return<div>
   Hi  {incomeTax}
</div>
}
export default App10