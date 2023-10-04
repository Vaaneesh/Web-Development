import React from 'react';
import ReactDOM from 'react-dom';
// let heading = React.createElement("h1",{
//     id:"Heading",
//     name:"Hello"
// },"Hello World");
// let heading1 = React.createElement("h1",{
//     id:"Heading2",
//     name:"Hello"
// },"Hello World 2");
// let container = React.createElement("div", null, [heading, heading1]);

const heading= (
    <h1 className='container'>Hello Woooooorld</h1>
)

let F1=function(){
    return <h2>hello world using functional component</h2>
}
let htmlcode=()=>{
    return(
        <div className="container">
            <h1>Hello World</h1>
            <h2>Hello React</h2>
            <div>
                <p>hdhfu</p>
            </div>
        </div>
    )
}
let Header=()=>{
    return(
        <div>
            <Logo/>
            <Navbar></Navbar>
        </div>
    )
}
let Logo=()=>{
    return <h1>logo</h1>
}
let Navbar=()=>{
    return (
        <h1>Navbar</h1>  
    )
}
let Main=()=>{
    return(
        <p>main body</p>
    )
}
let Footer=()=>{
    return(
        <h1>Footer</h1>
    )
}
let Pagelayout=()=>{
    return(
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

let root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Pagelayout/>);