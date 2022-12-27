import { Routes, Route } from 'react-router-dom'
import Test from './component/test'
import ReduxToolkit from './component/ReduxToolkit'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './store/userSlice';
import Todolist from './component/Todolist';

//store

const store = configureStore({
  reducer : {
    //key: value
    user: userSlice
  }
})

function App () {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/redux" element={<Test/>}/>
        <Route path="/reduxToolkit" element={<ReduxToolkit/>}/>
        <Route path="/todolist" element={<Todolist/>}/>
      </Routes>
    </Provider>
  );
} 

export default App;
