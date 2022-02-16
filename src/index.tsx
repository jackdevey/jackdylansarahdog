import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dog from './pages/Dog'
import CammyNote from "./components/CammyNote";
import Footer from "./components/Footer";


ReactDOM.render(
  <React.StrictMode>
      <div className="min-h-full">
          <Router>
              <CammyNote />
              <Navigation />
              <Routes>
                  <Route path="/" element={Home()} />
                  <Route path="/jack" element={Dog(0)} />
                  <Route path="/dylan" element={Dog(1)} />
                  <Route path="/sarah" element={Dog(2)} />
                  <Route path="/cammy" element={Dog(3)} />
              </Routes>
              <Footer />
          </Router>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
