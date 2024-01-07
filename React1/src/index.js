import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import App from "./App"
import reportWebVitals from './reportWebVitals';

// function App() {
//   return(
//   <div>
//     <Header/>
//     <MainContent/>
//     <Footer/>
//   </div>
// )}

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>)


ReactDOM.render(<App/>, document.getElementById("root"))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
