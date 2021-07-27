import React from 'react';
import Form from './Form';
import Login from './Login';
import Header from './MemeGen/Header';
import MemeGenerator from './MemeGen/MemeGenerator';
// import './MemeGen/Meme.css';
import Home from './BabyNames/Home';
import { NamesProvider } from './BabyNames/Context';
import Main from './PhotoWall/Main';
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import  store  from './CakeContainer/redux/store';

import CakeContent from './CakeContainer/CakeContent';
import IceCreamContent from './CakeContainer/IceCreamContent';
import HooksCakeContainer from './CakeContainer/HooksCakeContainer';
import HooksIceCreamContainer from './CakeContainer/HooksIceCreamContainer';
import UserContainer from './CakeContainer/UserContainer';

import LoaderComponent from './LoaderComponent';


import FormikExample from './FormikExample';
import PropTypesExample from './PropTypesExample';
// import './App.css';
import IconsExample from './IconsExample';
import FormikForm from './FormikForm/FormikForm';
import Tiktactoe from './TiktactoeProject/Tiktactoe';
import 'bootstrap/dist/css/bootstrap.css';
import ReactStrap from './ReactStrap';
import CounterExample from './CounterExample';
import FormikValidation from './FormikValidation';



// const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="App">
            
            {/* <FormikValidation /> */}



         <FormikForm />

         {/* <CounterExample /> */}

         {/* <Tiktactoe /> */}

         {/* <ReactStrap /> */}
      
       {/* <LoaderComponent /> */}

 
           
           {/* <FormikExample /> */}

           {/* <PropTypesExample name={"kumar"} />

           <IconsExample /> */}

      {/* <Form /> */}
        {/* <Login /> */}
 
        {/* <Header />
        <MemeGenerator /> */}

       {/* <NamesProvider>
          <Home />
      </NamesProvider> */}

     {/* <BrowserRouter><Main /></BrowserRouter> */}

     {/* <Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider> */}

           {/* <Provider store={store}>
             <HooksIceCreamContainer />
             <IceCreamContent />
             <HooksCakeContainer />
             <CakeContent />
             <UserContainer />
    </Provider> */}

    </div>
  );
}

export default App;
