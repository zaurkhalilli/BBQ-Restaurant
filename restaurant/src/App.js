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
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}
export default App;
