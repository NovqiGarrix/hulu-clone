const imdbData = {
    top250Movies: {
        "title": "Top 250 Movies",
        "url": `https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_APIKEY}`
    },
    top250TVs: {
        "title": "Top 250 TVs",
        "url": `https://imdb-api.com/en/API/Top250TVs/${process.env.IMDB_APIKEY}`
    },
    mostPopularMovies: {
        "title": "Most Popular Movies",
        "url": `https://imdb-api.com/en/API/MostPopularMovies/${process.env.IMDB_APIKEY}`
    },
    mostPopularTVs: {
        "title": "Most Popular TVs",
        "url": `https://imdb-api.com/en/API/MostPopularTVs/${process.env.IMDB_APIKEY}`
    },
    inTheaters: {
        "title": "In Theaters",
        "url": `https://imdb-api.com/en/API/InTheaters/${process.env.IMDB_APIKEY}`
    },
    comingSoon: {
        "title": "Coming Soon",
        "url": `https://imdb-api.com/en/API/ComingSoon/${process.env.IMDB_APIKEY}`
    },
    boxOffice: {
        "title": "Box Office",
        "url": `https://imdb-api.com/en/API/BoxOffice/${process.env.IMDB_APIKEY}`
    },
    boxOfficeAllTime: {
        "title": "Box Office All Time",
        "url": `https://imdb-api.com/en/API/BoxOfficeAllTime/${process.env.IMDB_APIKEY}`
    }
};

export default imdbData;