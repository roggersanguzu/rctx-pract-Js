import React from "react";
import ReactDom from "react-dom";

import "./index.css"

let BookList=()=>{
  return(
    <React.Fragment>
      <Welcome/>
      <div className="booklist">
        <Book Title= 'Mind Your Head' Author= 'Roger Miller'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Power of Now' Author= 'Eckhart Tolle'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'Mans Search for Meaning' Author= 'Viktor E. Frankl'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'Quiet: The Power of Introverts in a World That Canott Stop Talking' Author= 'Susan Cain'/>
        <Book Title= 'The Body Keeps the Score' Author= 'Bessel van der Kolk'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Subtle Art of Not Giving a F*ck' Author= 'Mark Manson'/>
        <Book Title= 'Atomic Habits' Author= 'James Clear'>
          <button>Add to Cart</button>
        </Book>
        <Book Title='The Chimp Paradox' Author='Dr. Steve Peters'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Happiness Advantage' Author= 'Shawn Achor'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The 4-Hour Workweek' Author= 'Timothy Ferriss'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'Deep Work' Author= 'Cal Newport'>
          <button>Add to Cart</button>
        </Book>
        <Book Title='The Miracle Morning' Author= 'Hal Elrod'>
          <button>Add to Cart</button>
        </Book>
        <Book Title='The Tipping Point' Author= 'Malcolm Gladwell'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'Thinking, Fast and Slow' Author= 'Daniel Kahneman'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Power of Habit' Author= 'Charles Duhigg'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Lean Startup' Author= 'Eric Ries'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Hard Thing About Hard Things' Author= 'Ben Horowitz'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Innovators Dilemma' Author= 'Clayton M. Christensen'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Lean In Revolution' Author= 'Sheryl Sandberg'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Art of Learning' Author= 'Josh Waitzkin'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The 5 Love Languages' Author= 'Gary Chapman'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Defining Decade' Author= 'Rachel Nussbaum'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The Power of Broke' Author= 'Daymond John'>
          <button>Add to Cart</button>
        </Book>
        <Book Title= 'The 7 Habits of Highly Effective People' Author= 'Stephen R. Covey'/>
        <Book Title= 'The Compound Effect' Author= 'Darren Hardy'>
          <button>Add to Cart</button>
        </Book>
      </div>
      <Thanks/>
    </React.Fragment>
  );
}

/*let head='I really Love Coding';
let author='Roger Millers';*/
let Image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8CTqrSxpEEvaPBRFxPqLCdzlvWJkOw5gCB3Ha4kDoJXDI9eGvYudkjIt4wmHkszjBW30X-iDoc9hym8YwA5-F-A2Qs-dDUWT5eoE7xNKAEyoJkhK5TNsRwchHOWfl5A&usqp=CAc';

//This Applies when we Need an Update to synshronize on all of them
let Book=(props)=>{
  return(
    <div>
       <img src={Image} alt=""/>
       <h4>{props.Title}</h4>
       <p >{props.Author}</p>
       <p>{props.children}</p>
    </div>
  )
}

//This is when A single description is needed on only one Item

let Thanks=()=> <h3>Thanks For Shopping with us Dear Customer</h3>;
let Welcome=()=> <h1>Welcome Netforge Book Shop</h1>;
ReactDom.render(<BookList/>,document.getElementById("root"));



