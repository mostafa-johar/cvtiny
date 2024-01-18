import { BrowserRouter, Routes, Route } from 'react-router-dom'
// component
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// pages
import About from "./pages/About";
import Resume from './pages/Resume';
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';
// App component 
const App = () => {

  // render App
  return (

    <BrowserRouter>

      <section className="container mx-auto p-4 xl:max-w-6xl flex flex-col justify-center items-center  h-screen ">
        <Navbar />
        <section className="home-page shadow-md shadow-blue-300 rounded-md w-full overflow-auto md:flex bg-slate-50 ">

          <SideBar />

          <section className="Content lg:w-[60%] p-3 overflow-y-auto ">

            <Routes>
              <Route exact path='/' element={<About />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/portofolio' element={<Portofolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>

          </section>

        </section>

      </section>

    </BrowserRouter>
  );
}

export default App;