import React, { Component, useContext, useEffect, useMemo, useState,memo, useCallback } from "react";

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


const calculateExchangeReturns = useCallback( ()=>{
  console.log("function calculate exchange called")
  return exchangeData1.return+exchangeData2.return;
},[exchangeData1,exchangeData2])

  return (
    <div>
      <ExchangeReturns calculateExchangeReturns={calculateExchangeReturns} />
      <DummyComponent/>
    </div>
  );
}

const DummyComponent = memo(()=>{
  console.log("dummy component called")
  return(
    <div>Dummy component</div>
  )
})


const ExchangeReturns =memo(({calculateExchangeReturns}) =>{
  return(
    <div>
      your exchange returns are: {calculateExchangeReturns()}
    </div>
  )
}) 


export default App;
