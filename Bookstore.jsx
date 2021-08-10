import React from 'react'
import "./index.css";

const FirstBook = {
    img1: "https://images4.penguinrandomhouse.com/cover/9781400079988",
    title: "War and Peace",
    author: "by Leo Tolstoy"
};


function Bookstore() {
    return (
        <div>
            <section className="booklist">

                <Book img={FirstBook.img1} title={FirstBook.title} author={FirstBook.author} />
                <Book img={FirstBook.img1} title={FirstBook.title} author={FirstBook.author} />
                <Book img={FirstBook.img1} title={FirstBook.title} author={FirstBook.author} />
                <Book img={FirstBook.img1} title={FirstBook.title} author={FirstBook.author} />
                <Book img={FirstBook.img1} title={FirstBook.title} author={FirstBook.author} />
                <Book img={FirstBook.img1} title={FirstBook.title} author={FirstBook.author} />

            </section>
        </div>
    )
}
const Book = (props) => {
    //    const {img,title,author}=props; this is another way to writing props then we don't need to write props.img etc for all tags or simply we can even use in the function call of the component
    return (
        <article style={{ textAlign: "center" }}>
            <img src={props.img} alt=""></img>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>

        </article>
    )
}

// const Author =()=>{
//     return(
//         <p style={{color:"#617d98", fontSize:"0.75rem", marginTop:"0.25rem"}}>By Ruskin Bond</p>
//     )
// }
// const Title=()=>{
//     return (
//         <h1 style={{fontWeight:"bold", color:"#000"}}>Great Stories For Children</h1>
//     )
// } 
export default Bookstore;