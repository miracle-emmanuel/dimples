import  React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Advantage from './components/Advantage';
import Ready from './components/Ready';
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import Review  from './components/Review';
import Recommendation from './components/Recommendation';

const App  = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Recommendation/>
      <Advantage/>
      <Ready/> 
      <Review/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default App;