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

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-20 min-height: 300px;">
    <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
    <p className="mt-4 text-gray-600 font-medium">Loading technologies...</p>
  </div>
);



function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <TechGrid dataPromise={dataPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
