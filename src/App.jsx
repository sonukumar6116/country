import { useEffect, useState } from "react";
import Country from "./Component/Country"
import CountryDetail from "./Component/CountryDetail"
import Header from "./Component/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [dark, setDark] = useState(true)

  useEffect(() => {
    let localDark = localStorage.getItem("dark");
    if (localDark) {
      setDark(JSON.parse(localDark))
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header dark={dark} setDark={setDark} />
        <Routes>
          <Route path='/' element={<Country dark={dark} />} />
          <Route path='/country' element={<CountryDetail dark={dark} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
