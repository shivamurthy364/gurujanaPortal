import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
// import NonIndividualForm from './components/NonIndividualForm';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header />  */}
   <App />
    <Footer />
    
      </React.StrictMode>
);


reportWebVitals();
