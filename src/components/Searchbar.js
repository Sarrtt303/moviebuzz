import React from 'react'
import { useState, useContext } from 'react';
import Moviecontext from '../Contexts/movies/movieContext';

import Alert from './Alert';

const Searchbar = () => {
    const [searchTerm, setSearchTerm]= useState("");
    const movieContext= useContext(Moviecontext);
    const {searchShows}= movieContext;

    const onSearchHandler= (e) =>{
        e.preventDefault();

        searchShows(searchTerm);
    };
  return (
    <div className="searchbar">
        <Alert message="please enter something" type="danger" />
        <form className="searchbar__form">
             <input type="text" 
                    placeholder="Browse Movies"  
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)
                    }
             />
        <button className="btn btn-block" onClick={onSearchHandler}> Search for Booking</button>
        </form>
    </div>
  );
};

export default Searchbar;