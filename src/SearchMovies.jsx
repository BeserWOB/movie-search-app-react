import React, { useState } from "react";
import MovieCard from "./MovieCard";


export default function SearchMovies(){
    const[query, setQuery] = useState('');
    const[movies, setMovies] = useState([]) 

    console.log(movies);
    const searchMovies = async (e) => {
        e.preventDefault();      
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a9d8f64be5af3410fd1eedc5b81b6fb8&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results)
        }catch(err){
            console.log(err);
        }
    }


    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input 
                className="input" 
                type="text" 
                name="query"
                value={query}    
                placeholder="i.e. Jurassic Park"
                onChange={(e)=>setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map((movie, index)=> (
                    <MovieCard 
                    key={index}
                    data={movie} />
                ))}
        </div>
        </>
    )
}