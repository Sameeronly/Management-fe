import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ZForm from './components/ZForm';
import Sucess from './components/Sucess';
import Status from './components/Status';
import React from 'react';
import './App.css';
export const CommonContext = React.createContext();

const apiurl = 'http://localhost:8000/'

function App() {
  return (
    <>
    <BrowserRouter>
    <CommonContext.Provider value = {{apiurl}}>
    <Routes>
    <Route path='/new-issue' element={<ZForm/>}/>
    <Route path='/sucess/' element={<Sucess/>}/>
    <Route path='/ticket/:id' element={<Status/>}/>
    <Route path='*' element={<Navigate to = '/new-issue'/>}/>
    </Routes>
    </CommonContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
