
import {useReducer} from 'react';
import axios from 'axios';
import Moviecontext from './movieContext';
import MoviesReducer from './movieReducer';

import{
    SEARCH_MOVIES,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW
} from 'react';

import React from 'react';

const Moviestate = (props) => {

    const initialState={
        movies: [],
        singleShow: {},
        loading: false,
    };
    const [state, dispatch] = useReducer( MoviesReducer, initialState);

    const searchShows = async () =>{
        dispatch({type: SET_LOADING});

        const { data }= await axios.get('https://api.tvmaze.com/search/shows?q=all');

        console.log(data);
        
        dispatch({
            type: SEARCH_MOVIES,
            payload: data
        })
    }


  return (
    <Moviecontext.Provider 
        value={{
        movies: state.movies,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
    }}>
         {props.children}
     
    </Moviecontext.Provider>
  );
};

export default Moviestate;