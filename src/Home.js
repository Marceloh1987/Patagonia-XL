import React, {useState, useEffect} from 'react';
import firebase from '../src/Firebase/firebase';
import { NavBar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { Footer } from './Footer/Footer';

const Home = () => {
  const [fbData, setFbData] = useState(null);
  useEffect(() => {
      firebase.database().ref('/Menu').on('value', (snapshot) => {
          // const key = Object.values(snapshot.val());
          // setFbData(key);
          setFbData(snapshot.val());
      });
  }, []);

  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});
  if(fbData){
    return (
      <>
      <GlobalStyle/>
      <FoodDialog {...openFood} {...orders}/>
      <Order {...orders} {...openFood}/>
      <Banner/>
      <Menu {...openFood}/>  
       <Footer/>
      </>
    );
  }
  else{
    return(
      <h1>Loading...</h1>
    )
  }
}

export default Home;