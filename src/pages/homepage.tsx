import React from 'react';
import Subscribe from '../components/subscribe';
import Products from '../components/products';
import Banner from '../components/banner';
import Offer from '../components/offer';
import Services from '../components/services';


const HomePage: React.FC = () => {
  return (
    <div>
      
      <Banner />

      <Services />
      <Offer />
      <Products />
      <Subscribe />
    </div>
  );
};

export default HomePage;
