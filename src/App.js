import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { EmployeeProvider } from './services/EmployeeContext';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import AddEmployee from './components/AddEmployee';

const App = () => {

  return (
    <div>
      <EmployeeProvider>
        <Header/>
        <div>
          <Routes>
            <Route path = "/add-emp" element = {<AddEmployee/>}/>
            <Route exact path = "/" element = {<ListEmployee/>}/>
            <Route path = "/edit-emp/:id" element = {<AddEmployee/>}/>
          </Routes>
        </div>
        <Footer/> 
      </EmployeeProvider>         
    </div>
  );
}

export default App;
