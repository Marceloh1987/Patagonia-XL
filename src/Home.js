import React, {useState, useEffect} from 'react';
import firebase from '../src/Firebase/firebase';
import { Spinner } from 'react-bootstrap';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Order } from './Order/Order';
import { useCloseCart } from './Hooks/closeCart';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { Footer } from './Footer/Footer';

const Home = (props) => {
  const [fbData, setFbData] = useState(null);
  useEffect(() => {
      firebase.database().ref('/Menu').on('value', (snapshot) => {
          // const key = Object.values(snapshot.val());
          // setFbData(key);
          setFbData(snapshot.val());
      });
  }, []);
  
  const closeCart = useCloseCart();
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});

  if(fbData){
    return (
      <>
      <GlobalStyle/>
      <FoodDialog {...openFood} {...orders} {...closeCart} />
      <Order authenticated={props.isAuthed} {...orders} {...openFood} {...closeCart} />
      <Banner/>
      <Menu {...openFood} fbData={fbData} {...closeCart} />  
       <Footer/>
      </>
    );
  }
  else{
    return (
        <div style={{margin:'20% 0 0 0', textAlign:'center'}}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
        </div>
    )
}
}

export default Home;