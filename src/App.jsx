import React from "react";
import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Rand from "./components/Rand";
function App() {
  const [userName,setUserName]=useState(null);
  const [questionNumber,setQuestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid= useMemo(()=>
    [
      {id:1, amount:"₹ 1,000"},
      {id:2, amount:"₹ 2,000"},
      {id:3, amount:"₹ 3,000"},
      {id:4, amount:"₹ 5,000"},
      {id:5, amount:"₹ 10,000"},
      {id:6, amount:"₹ 20,000"},
      {id:7, amount:"₹ 40,000"},
      {id:8, amount:"₹ 80,000"},
      {id:9, amount:"₹ 1,60,000"},
      {id:10, amount:"₹ 3,20,000"},
      {id:11, amount:"₹ 6,40,000"},
      {id:12, amount:"₹ 12,50,000"},
      {id:13, amount:"₹ 25,00,000"},
      {id:14, amount:"₹ 50,00,000"},
      {id:15, amount:"₹ 1,00,00,000"},
      {id:16, amount:"₹ 7,00,00,000"},
    
    
    ].reverse(),
  []);

useEffect(()=>{
   questionNumber>1 && setEarned(moneyPyramid.find(m=>m.id===questionNumber-1).amount);
},[moneyPyramid,questionNumber]);
  return (
    <div className="App">
     {userName?(
      <>
      <div className="main">
        {stop?<h1 className="endText">You earned:{earned}</h1>:(
          <>
            <div className="top">
              <div className="timer">
               <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom">
             <Trivia  
              data={data}
             setStop={setStop}
              questionNumber={questionNumber} 
              setQuestionNumber={setQuestionNumber}/>
            </div>
            </>
          )}
      </div>
      <div className="parmid">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
          <li className= {questionNumber===m.id?"moneyListItem active":"moneyListItem"}> 

          <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
            </li>
            ))}
            {/* <li className="moneyListItem"> 
            <span className="moneyListItemNumber">15 </span>
            <span className="moneyListItemAmount"> ₹ 1,00,00,000</span>
            </li>  
            <li className="moneyListItem"> 
            <span className="moneyListItemNumber">14 </span>
            <span className="moneyListItemAmount"> ₹ 50,00,000</span>
            </li>  
            <li className="moneyListItem"> 
            <span className="moneyListItemNumber">13 </span>
            <span className="moneyListItemAmount"> ₹ 25,00,000</span>
            </li>   */}
        </ul>
      </div>
      </>
     ):<Rand setUsername={setUserName}/>}
      
    </div>
  );
}

export default App;
