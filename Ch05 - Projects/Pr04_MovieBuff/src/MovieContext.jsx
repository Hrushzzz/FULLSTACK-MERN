import React from "react";
import { createContext, useState, useEffect } from 'react';
export const MovieContext = createContext();

//It is a prop that is inbuilt into react. it will refer to any component you will wrap. 
export default function MovieContextWrapper({children}){

    const [watchList,setWatchList] =  useState([]);

    const addtoWatchList = (movieObj) => {
        let updatedWatchlist=[...watchList, movieObj];
        setWatchList(updatedWatchlist);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        console.log(updatedWatchlist);
    }

    const removeFromWatchList = (movieObj) => {
    const updatedWatchList = watchList.filter((movie) => movie.id!=movieObj.id);
    setWatchList([...updatedWatchList]);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
    }

    useEffect(() => {
        if(localStorage.getItem("watchlist")){
        let watchlistFromLS = JSON.parse(localStorage.getItem("watchlist"));
        setWatchList(watchlistFromLS);
        }
    },[])


    return <MovieContext.Provider value={{
        watchList,setWatchList,addtoWatchList,removeFromWatchList
    }}>{children}</MovieContext.Provider>
}