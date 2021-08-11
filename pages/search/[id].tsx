import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import Head from "next/head";
import { useRouter } from 'next/router';

// Components
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import Cards from "../../components/Cards";

import { fetchGenres, firstFetch } from "../../actions";


const GenrePage = ({ genreData, movieData }: any) => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(firstFetch(movieData));
        dispatch(fetchGenres(genreData));
    }, []);

    useEffect(() => {
        const API_KEY_IMDB = 'a7153b9a4b4854fc651945426efc1c49';
        const fetchChanges = async () => {
            const GENRE_URI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_IMDB}&language=en-US`;
            const { data: genreData } = await axios.get(GENRE_URI);

            const MOVIE_LIST_URI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_IMDB}&language=en-US&query=${router.query.id}&page=1&include_adult=true`;
            const { data: movieData } = await axios.get(MOVIE_LIST_URI);

            dispatch(firstFetch(movieData));
            dispatch(fetchGenres(genreData));
        }

        fetchChanges();
    }, [router.query.id]);

    return (
        <div className="bg-primary min-h-screen w-full py-12 xs:py-8">
            {/* <Message message={incomeMessage.desc} variant={incomeMessage.type} handleClose={handleClearMessage} /> */}

            <Head>
                <title>{router.query?.id ? `${router.query.id.toString().toUpperCase()} - Hulu Clone` : `Search ... - Hulu Clone`}</title>
                <meta name="description" content="Started project for NextJs, tailwind, and typescript" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="header px-10 sm:px-3 md:px-10 xs:px-2 mb-5">
                <HeaderTitle />
            </div>

            <div className="content w-full px-2 md:px-12">
                <Cards />
            </div>
        </div>
    )
};

export async function getServerSideProps({ params }: any) {

    try {
        const API_KEY_IMDB = 'a7153b9a4b4854fc651945426efc1c49';

        const GENRE_URI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_IMDB}&language=en-US`;
        const { data: genreData } = await axios.get(GENRE_URI);

        const MOVIE_LIST_URI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_IMDB}&language=en-US&query=${params.id}&page=1&include_adult=true`;
        const { data: movieData } = await axios.get(MOVIE_LIST_URI);

        return {
            props: {
                genreData,
                movieData
            }
        }

    } catch (error) {
        console.log('Error:', error.message);
    }
}

export default GenrePage;