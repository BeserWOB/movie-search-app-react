import React from "react";

export default function Test(){

    return(
        <div>
            <h1>Hello World.</h1>
            <form className="form" action="">
                <label className="label" htmlFor="query">
                    <input type="text" name="query" placeholder="Type in movie name." />
                </label>
                <button className="button" type="submit">Search</button>

            </form>
        </div>
 
    )
}