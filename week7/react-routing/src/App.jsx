import React, { Component, useContext, useEffect, useMemo, useState } from "react";

import "./App.css";

function App() {

const [exchangeData1,setExchangeData1] = useState({})
const [exchangeData2,setExchangeData2] = useState({})
const [bankData,setBankData] = useState({})

useEffect(()=>{
  setTimeout(()=>{  
    setExchangeData1({return:100})
  },1000)
  setTimeout(()=>{  
    setExchangeData2({return:100})
  },2000)
  setTimeout(()=>{  
    setBankData({income:100})
  },3000)
},[])


const exchangeReturns = useMemo(()=>{
  console.log("exchange return");
  return exchangeData1.return+exchangeData2.return;
},[exchangeData1,exchangeData2])


const incomeTax = (bankData.income+exchangeReturns)*0.3

  return (
    <div>
      Income tax to be paid {incomeTax}
    </div>
  );
}


export default App;
