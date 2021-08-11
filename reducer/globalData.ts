import { GLOBAL_DATA_ERROR, GLOBAL_DATA_REQUEST, GLOBAL_DATA_SUCCESS } from '../constants/globalDataConstant';

interface GlobalDataState {
    loading: boolean;
    error: null | '';
    movies: [];
}

const globalData = (state: GlobalDataState = { loading: false, error: null, movies: [] }, action: any) => {
    switch (action.type) {
        case GLOBAL_DATA_REQUEST:
            return { ...state, loading: true, error: null, movies: [] };

        case GLOBAL_DATA_ERROR:
            return { ...state, loading: false, error: action.payload, movies: [] };

        case GLOBAL_DATA_SUCCESS:
            const existMovie = state.movies.find((x: any) => x.id === action.payload.id);
            if (existMovie) return { ...state, loading: false, error: null, movies: state.movies.map((x: any) => x.id === action.payload.id ? action.payload : x) };

            if (action.payload?.id) return { ...state, loading: false, error: null, movies: [action.payload] };
            return { ...state, loading: false, error: null, movies: action.payload.results };

        default:
            return state;
    }
};

export default globalData;