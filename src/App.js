import React from 'react';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import FirebaseFeatures from './components/FirebaseFeatures';

function App() {
  return (
    <div className="App">
      <ProductList />
      <ContactForm />
       <FirebaseFeatures />
    </div>
  );
}

export default App;