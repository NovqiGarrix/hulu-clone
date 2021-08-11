
import { useEffect, useState } from 'react';
import axios from 'axios';

import Image from 'next/image';
import { StarIcon } from '@heroicons/react/outline';
import { Chip } from '@material-ui/core';

var API_KEY_IMDB = 'a7153b9a4b4854fc651945426efc1c49';

const Card = ({ movie }: any) => {

    const [movieDetail, setMovieDetail] = useState({
        id: '',
        poster_path: '',
        original_title: '',
        homepage: '',
        release_date: '',
        tagline: '',
        vote_average: '',
        vote_count: '',
        genres: []
    });
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

    useEffect(() => {

        const fetchDetailMovie = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${API_KEY_IMDB}&language=en-US`);
            return data;
        }

        const handleSetData = (movie: any) => {
            return setMovieDetail({
                ...movieDetail,
                id: movie.id,
                poster_path: movie.poster_path,
                original_title: movie.original_title,
                homepage: movie.homepage,
                release_date: movie.release_date,
                tagline: movie.tagline,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
                genres: movie.genres
            });
        }

        fetchDetailMovie().then((res) => handleSetData(res)).catch((err) => console.log(err));

    }, []);

    return (
        <a href={movieDetail.homepage} target="_blank" key={movieDetail?.id} className="group cursor-pointer sm:hover:scale-105 duration-150 transform hover:z-10 mb-2 w-full h-full">
            <Image src={`${IMAGE_BASE_URL}/${movieDetail?.poster_path}` || `https://image.freepik.com/free-photo/vintage-wallpaper-background_53876-25244.jpg`}
                width={1080}
                height={1920}
                layout="responsive"
                loading="lazy"
                objectFit="cover"
            />

            <div className="text-gray-300 group-hover:text-white group-hover:font-semibold">
                <p className="mt-3 text-sm font-thin">{movieDetail.tagline}</p>
                <h2 className="font-bold mb-0">{movieDetail.original_title}</h2>
                <p className="font-bold">Release date: {movieDetail.release_date}</p>
                <p className="text-sm flex items-center mb-3">Rating: {movieDetail?.vote_average}<StarIcon className="w-3 h-3 ml-1 mr-2" /> from {movieDetail?.vote_count} users</p>

                <div className="grid-cols-3 grid opacity-0 group-hover:opacity-100">
                    {movieDetail?.genres?.map((x: any, key: number) => (
                        <Chip key={key} label={x.name} variant="outlined" className="mr-2 mb-2" color="secondary" />
                    ))}
                </div>
            </div>
        </a>
    )
};

export default Card;