import { GENRES_ERROR, GENRES_REQUEST, GENRES_SUCCESS } from '../constants/genresConstant';

const genres = (state = { loading: false, error: null, genreData: [] }, action: any) => {

    switch (action.type) {
        case GENRES_REQUEST:
            return { ...state, loading: true };

        case GENRES_ERROR:
            return { ...state, loading: false, error: action.payload };

        case GENRES_SUCCESS:
            const existGenre = state.genreData.find((x: any) => x.id === action.payload.id);
            if (existGenre) return { ...state, loading: false, error: null, genreData: state.genreData.map((x: any) => x.id === action.payload.id ? action.payload : x) };

            return { ...state, loading: false, error: null, genreData: action.payload };

        default:
            return state;
    }

};

export default genres;