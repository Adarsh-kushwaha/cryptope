import React from 'react';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import Welcome from './components/Welcome';


const App = () => {

  return (
    <>
    <div className='max-w-xl m-auto'>
      <Navbar />
      <Welcome/>
        <Transaction />
    </div>
    </>
  );
};

export default App;

