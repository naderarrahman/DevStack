import { Suspense } from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TechGrid from "./components/TechGrid";
import Footer from "./components/Footer";

//creating Promise
const fetchData = async()=>{
  const response = await fetch('/technologies.json');
  const data = await response.json();
  return data;
}

const dataPromise = fetchData();


function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <TechGrid dataPromise={dataPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
