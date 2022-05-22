import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';
import { Header } from './components/layout/Header';
import {Map} from './components/map/Map';
import { SearchContext } from './contexts/searchcontext';


export const App = () => {
const [search,setSearch] = useState('');

  return (
   <>
       <SearchContext.Provider value={{search,setSearch}}>
        <Header/>
        <Routes>
        <Map/>
            <Route path="/" element={<Map/>}/>
            <Route path="/add" element={<AddForm/>}/>
        </Routes>
       </SearchContext.Provider>
   </>
  );
}


