import React from "react";
import './projectgreetings.css';

const Hello = () => {
    
    let curDate = new Date();

     const curHours = curDate.getHours()
     console.log("kkhk", curHours)
     let greeting;

     if (4 < curHours && curHours < 12) {
       greeting = "Good morning “Some people dream of success, while other people get up every morning and make it happen.”";
    } else if ( 12 < curHours && curHours < 15){
       greeting = "It's afternoon, and I can't stop thinking about how lucky I am to have you in my life.";
    }else if(15 < curHours && curHours < 20){
        greeting = "Good evening “As the sun sets on this beautiful evening today, may you find peace and contentment in the simple joys of life.”";
    }
    else{
        greeting = "Good night “Without the dark, we'd never see the stars.”";
    }
      console.log(curHours);
    return (
        <div>
            <div className="image">
            <img src="https://wallpapers.com/images/high/horizon-full-screen-hd-desktop-nsw7v8luhapdp6gs.webp"alt="an sunset"></img>
           </div>
           <h1> Hello Mr <div className="style">{greeting}</div>  </h1>
         
        </div>
    )

}
export default Hello;