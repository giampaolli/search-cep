import { FETCHING, SUCCESS } from './actions'
import axios from "axios";

export const fetchAddress = (code) => async (dispatch, getState) => {
    dispatch({type: FETCHING});
    const resp = await axios.get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${code}`);
    dispatch({ type: SUCCESS, payload: resp.data });
};
