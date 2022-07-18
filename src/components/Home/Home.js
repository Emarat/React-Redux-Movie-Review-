import React from 'react';
import { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {

    const movieText = "Harry";
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("Error:", err);
                });
            dispatch(addMovies(response.data))
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