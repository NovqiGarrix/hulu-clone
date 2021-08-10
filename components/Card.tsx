
import { useEffect, useState } from 'react';
import axios from 'axios';

import Image from 'next/image';
import { StarIcon } from '@heroicons/react/outline';

const Card = ({ movie }: any) => {

    const [movieDetail, setMovieDetail] = useState({ id: '', fullTitle: '', image: 'https://image.freepik.com/free-photo/vintage-wallpaper-background_53876-25244.jpg', imDbRating: '', imDbRatingVotes: '', awards: '' });

    useEffect(() => {

        const fetchDetailMovie = async () => {
            const { data } = await axios.get(`https://imdb-api.com/en/API/Title/k_pem2x658/${movie.id}`);
            return data;
        }

        fetchDetailMovie().then((res) => setMovieDetail({ ...movieDetail, id: res.id, fullTitle: res.fullTitle, image: res.image, imDbRating: res.imDbRating, imDbRatingVotes: res.imDbRatingVotes, awards: res.awards })).catch((err) => console.log(err));

    }, []);

    return (
        <div key={movieDetail?.id} className="group cursor-pointer sm:hover:scale-105 duration-150 transform hover:z-50">
            <Image src={movieDetail?.image}
                width={1920}
                height={1080}
                layout="responsive"
                className="object-cover"
            />

            <div className="text-gray-300 group-hover:text-white group-hover:font-semibold">
                <h2 className="font-bold">{movieDetail?.fullTitle}</h2>
                <p className="text-sm flex items-center">Rating: {movieDetail?.imDbRating}<StarIcon className="w-3 h-3 ml-1 mr-2" /> from {movieDetail?.imDbRatingVotes.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} users</p>
                <h5 className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-100">Crew: {movieDetail?.awards}</h5>
            </div>
        </div>
    )
};

export default Card;