import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import request from '../request/request';

import Head from 'next/head';

// Components
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import Cards from '../components/Cards';
import Search from '../components/Search';
import Message from '../components/Message';

interface HomeProps {
    movies: [];
    message: {
        desc: string,
        type: string
    };
    query: any
}

const Home = ({ movies, message, query }: HomeProps) => {
    const router = useRouter();

    const [incomeMessage, setIncomeMessage] = useState(message);
    const [searchValue, setSearchValue] = useState(query?.search);

    const handleChangeSearchValue = (e: any) => {
        setSearchValue(e.target.value);
        return setTimeout(() => router.push({ pathname: '/', query: { search: searchValue } }), 1500);
    }

    const handleClearMessage = () => {
        return setIncomeMessage({ ...incomeMessage, desc: '', type: '' });
    }

    return (
        <div className="bg-primary min-h-screen w-full py-12 xs:py-8">
            <Message message={incomeMessage.desc} variant={incomeMessage.type} handleClose={handleClearMessage} />

            <Head>
                <title>Hulu Clone</title>
                <meta name="description" content="Started project for NextJs, tailwind, and typescript" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="header px-10 sm:px-3 md:px-10 xs:px-2 mb-5">
                <Search handleOnChange={handleChangeSearchValue} value={searchValue} />
                <HeaderTitle />
            </div>

            <div className="content w-full px-2 md:px-12">
                <Cards movies={movies} />
            </div>
        </div>
    )
};

export async function getServerSideProps({ query }: any) {

    const type = query?.type;
    const querySearch = query?.search;
    let response;
    const fetchURL: string = Object.entries(request).map(([genre, { url }]) => genre === type ? url : '').filter((x) => x !== '')[0];
    const homeURL = `https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_APIKEY}`;

    if (!(type || querySearch)) {
        const { data } = await axios.get(homeURL);
        response = data;

        if (response.errorMessage) return {
            props: {
                movies: response.items,
                message: {
                    desc: response.errorMessage,
                    type: 'error',
                },
                query
            }
        }

        return {
            props: {
                movies: response.items,
                error: null,
                query
            }
        }
    }

    if (querySearch) {


        const { data } = await axios.get(`https://imdb-api.com/en/API/Search/${process.env.IMDB_APIKEY}/${encodeURI(querySearch)}`);
        response = data;

        if (response.errorMessage) return {
            props: {
                movies: null,
                message: {
                    desc: response.errorMessage,
                    type: 'error',
                },
                query
            }
        }

        return {
            props: {
                movies: response.results,
                message: {
                    desc: response.errorMessage,
                    type: 'error',
                },
                query
            }
        }
    }

    const { data } = await axios.get(fetchURL);
    response = data;

    if (response.errorMessage) return {
        props: {
            movies: response.items,
            message: {
                desc: response.errorMessage,
                type: 'error',
            },
            query
        }
    }

    return {
        props: {
            movies: response.items,
            message: {
                desc: response.errorMessage,
                type: 'error',
            },
            query
        }
    }
}

export default Home;