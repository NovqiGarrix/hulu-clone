import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// Components
import Head from "next/head";
import { useRouter } from 'next/router';
import Header from "../components/Header";
import HeaderTitle from "../components/HeaderTitle";
import Cards from "../components/Cards";

// Redux Actions
import { fetchGenres, firstFetch } from "../actions";
import request from "../request/request";
import { genresURL, discoverURL } from "../request/endpoints";

const Home = ({ genreData, movieData }: any) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [lastURL] = useState(router.query?.type);

    useEffect(() => {

        dispatch(fetchGenres(genreData));
        dispatch(firstFetch(movieData));

    }, []);

    useEffect(() => {

        const fetchChanges = async () => {
            const { data: genreData } = await axios.get(genresURL);

            const MOVIE_LIST_URI = router.query.type ? `https://api.themoviedb.org/3/movie/${router.query.type}?api_key=${process.env.API_KEY_IMDB}&page=1` : discoverURL;
            const { data: movieData } = await axios.get(MOVIE_LIST_URI);

            dispatch(firstFetch(movieData));
            dispatch(fetchGenres(genreData));
        }

        fetchChanges();

    }, [router.query.type !== lastURL ? router.query.type : null]);

    return (
        <div className="bg-primary min-h-screen w-full py-12 xs:py-8">
            {/* <Message message={incomeMessage.desc} variant={incomeMessage.type} handleClose={handleClearMessage} /> */}

            <Head>
                <title>{router.query?.type ? `${router.query.type.toString().toUpperCase()} - Hulu Clone` : `Home - Hulu Clone`}</title>
                <meta name="description" content="Started project for NextJs, tailwind, and typescript" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            {!router.query?.type && (
                <div className="header px-10 sm:px-3 md:px-10 xs:px-2 mb-5">
                    <HeaderTitle />
                </div>
            )}

            <div className="content w-full px-2 md:px-12">
                <Cards />
            </div>
        </div>
    )
};
export default Home;

export async function getServerSideProps({ query }: any) {
    const type = query?.type;

    const { data: genreData } = await axios.get(genresURL);

    const MOVIE_LIST_URI = type ? Object.entries(request).map(([urlName, { url }]) => urlName === type ? url : '').filter((x) => x !== '')[0] : discoverURL;
    const { data: movieData } = await axios.get(MOVIE_LIST_URI);

    return {
        props: {
            genreData,
            movieData
        }
    }
}
