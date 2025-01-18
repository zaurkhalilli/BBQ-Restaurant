  import React from 'react';
  import Home from './Pages/Home/Home';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import About from './Pages/About/About';
  import Contact from './Pages/Contact/Contact';
  import Layout from './Layout/Layout';
  import Menu from './Pages/Menu/Menu';
  const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route index path='/menu' element={<Menu/>} />
          <Route index path='/about' element={<About/>} />
        </Routes>
      </Layout> 
      </BrowserRouter>
     
    </div>
  );
}
export default App;
