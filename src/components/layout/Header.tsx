import React, {FormEvent, useContext, useState} from 'react';
import { Btn } from '../common/Btn';
import './Header.css';
import {SearchContext} from "../../contexts/searchcontext";
export const Header = () => {
    const {search,setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }

    return (
    <header>
        <h1>
            <strong>Mega</strong> Ogłoszenia
        </h1>
        <Btn to='/add' text='Dodaj ogłoszenie'/>
        <form className="seatch" onSubmit={setSearchFromLocalState}>
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/> <Btn text='Szukaj'/>
        </form>
    </header>
    );
}
