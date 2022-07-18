import React from 'react';
import { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {

    useEffect(() => {
        const movieText = "Harry";
        const fetchMovies = async () => {
            const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("Error:", err);
                });
            console.log("The Response from Api:", response);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;