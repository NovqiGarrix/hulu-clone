import axios from 'axios';
import { GLOBAL_DATA_ERROR, GLOBAL_DATA_REQUEST, GLOBAL_DATA_SUCCESS } from '../constants/globalDataConstant';

import type { Dispatch } from 'redux';
import { GENRES_ERROR, GENRES_REQUEST, GENRES_SUCCESS } from '../constants/genresConstant';

export const fetchGenres = (data: any) => async (dispatch: Dispatch) => {
    dispatch({ type: GENRES_REQUEST });

    try {

        if (!data.status && data.status_message) return dispatch({ type: GENRES_ERROR, payload: data.status_message });
        return dispatch({ type: GENRES_SUCCESS, payload: data.genres });
    } catch (error) {
        return dispatch({ type: GENRES_ERROR, payload: error.message });
    }
}

export const firstFetch = (data: any) => async (dispatch: Dispatch) => {
    dispatch({ type: GLOBAL_DATA_REQUEST });

    try {
        if (!data.status && data.status_message) return dispatch({ type: GLOBAL_DATA_ERROR, payload: data.status_message });
        return dispatch({ type: GLOBAL_DATA_SUCCESS, payload: data });

    } catch (error) {
        return dispatch({ type: GLOBAL_DATA_ERROR, payload: error.message });
    }

}