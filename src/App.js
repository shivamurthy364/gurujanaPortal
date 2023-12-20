import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import NotAvailable from "./Pages/NotAvailable";
import CompanyTypeSelector from "./components/CompanyType";
import CreateCompany from "./Pages/CreateCompany";
import IndividualForm from "./Pages/IndividualForm";
import NonIndividualForm from "./components/NonIndividualForm";
import Founders from "./Pages/Founders";
import Modal from "./Add-Ons/Modal";

function App() {
  return (
    <Router>
     <Navbar />
    <div className='max-w-screen-md mx-auto pt-20 '> 
    <Routes>   
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/notavailable" element={<NotAvailable/>} />
    <Route path="/company-type" element={<CompanyTypeSelector/>} />
    <Route path="/create-company" element={<CreateCompany />} />
    <Route path="/individual-form" element={<IndividualForm />} />
    <Route path="/non-individual-form" element={<NonIndividualForm/>} />
    <Route path="/founders" element={<Founders/>} />
    <Route path="/modal" element={<Modal/>} />
  {/* <Route path="/articles-list" element={<ArticlesList />} />
    <Route path="/article/:name" element={<Article />} />
    <Route path="*" element={<NotFound />} />  */}
    </Routes>
 
    </div>
    </Router>
    
   );
}

export default App;
