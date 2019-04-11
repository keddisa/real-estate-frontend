import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/nav-bar';
import Header from './components/header';
import About from './components/about';
import PropertiesList from './components/properties-list';
import PropertyDetail from './components/property-detail';
import TestimonialList from './components/testimonial-list';
import Contact from './components/contact';
import Footer from './components/footer';
import AdminMain from './components/admin/admin-main';

const HomePage = () => {
  return (
    <div className="App">
    <NavBar />
    <Header />
    <About />
    <PropertiesList />
    <PropertyDetail />
    <TestimonialList />
    <Contact />
    <Footer />
  </div>
  );
};

const AdminPage = () => {
  return (
    <div>
    <AdminMain />
  </div>
  );
};

class App extends Component {

  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component ={HomePage} />
          <Route path="/admin" exact component ={AdminPage} />
        </div>

      </BrowserRouter>
      </div>
    );
  }
}

export default App;
