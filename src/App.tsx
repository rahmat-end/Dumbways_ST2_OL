import { Routes, Route } from "react-router-dom"
import Games from "./pages/games"
import Salary from "./pages/salary"
import WordScramb from "./pages/word_scramb"
import CountDuration from "./pages/count_duration"
import CurrencyConvert from "./pages/currency_convert"
import MobileLegend from "./pages/mobile_legend"

import LandingPage from "./pages/landing_page"
import DetailProduct from "./pages/detail_product"
import Emsifa from "./pages/emsifa"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Games />} />
      <Route path="/salary" element={<Salary />} />
      <Route path="/word-scramb" element={<WordScramb />} />
      <Route path="/count-duration" element={<CountDuration />} />
      <Route path="/currency-convert" element={<CurrencyConvert />} />
      <Route path="/mobile-legend" element={<MobileLegend />} />

      <Route path="/home" element={<LandingPage />} />
      <Route path="/detailproduct/:id" element={<DetailProduct />} />
      <Route path="/emsifa" element={<Emsifa />} />
    </Routes>
  )
}



// ===============================================================================
// ===============================================================================
// ===============================================================================


// import LandingPage from "./pages/landing_page"

// export default function App() {
//   return (
//     <LandingPage />
//   )
// }





// ===============================================================================
// ===============================================================================
// ===============================================================================



// import React from "react";
// // import SayHello from "./components/hello_world";
// import Navbar from "./components/navbar";
// // import { Mydata, Props } from "./components/props";

// export default function App() {
//   const message: string = "Good Afternoon"
//   // const name: string = "yudha"

//   return (
//     <>
//       {/* <SayHello />
//       <Props message="Hahahahahahahah"/>
//     <Mydata name={name} age={24}/> */}

//       <Navbar />
//       <p style={style}>{message}</p>
//       <p style={{backgroundColor: "yellow", fontSize: 24}}>{message}</p>
//     </>
//   )
// }

// const style:React.CSSProperties = {
//   padding:13,
//   backgroundColor: "red"
// };




// ===============================================================================
// ===============================================================================
// ===============================================================================




// // import SayHello from "./components/hello_world"
// // import Navbar from "./components/navbar"
// // import { MethodOne as NavbarHehe, MethodTwo } from "./components/without_default"


// // import { CounterWithState, CounterWithVariable } from "./components/state";

// export default function App() {
//   //  logic 1000 line
//   return (
//     <>
//       {/* <SayHello />
//       <Navbar />
//       <NavbarHehe />
//       <MethodTwo />
//       <p>Pinjem dulu seratus bang</p>
//       <p>Pinjem dulu seratus bang</p> */}

//       {/* <p>Menggunakan Variable</p>
//       <CounterWithVariable />

//       <p>Menggunakan State</p>
//       <CounterWithState /> */}
//     </>
//   )
// }

// // default => export defaulting
// // => export named



// component
// state 
// props
// useEffect
// list and key
// routing and useparams


// react router dom -> routing
// bootstrap -> styling
// axios -> fetch api