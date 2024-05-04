import React from "react";
import ReactDom from "react-dom";

import "./index.css"

let BookList=()=>{
  return(
    <React.Fragment>
      <Welcome/>
      <div className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </div>
      <Thanks/>
    </React.Fragment>
  );
}

let Book=()=>{
  return(
    <div>
       <h4>I really Love Coding</h4>
       <p >Roger Muillers</p>
       <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8CTqrSxpEEvaPBRFxPqLCdzlvWJkOw5gCB3Ha4kDoJXDI9eGvYudkjIt4wmHkszjBW30X-iDoc9hym8YwA5-F-A2Qs-dDUWT5eoE7xNKAEyoJkhK5TNsRwchHOWfl5A&usqp=CAc" alt=""/>
    </div>
  )
}

let Thanks=()=> <h3>Thanks For Shoping with us Dear Customer</h3>;
let Welcome=()=> <h1>Welcome Netforge Book Shop</h1>;
ReactDom.render(<BookList/>,document.getElementById("root"));



