//usage of card 
function App3(){
    return <div>
        <Card>HI there </Card>
        <Card>Hello </Card>

    </div>
}
function Card({children}){
    return<div style={{backgroundColor:"red"}}>
        {children+"Hello"}
    </div>
}

export default App3