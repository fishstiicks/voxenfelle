import { csrfFetch } from './csrf';

const SET_ART = 'arts/setArts';
const ADD_ART = 'arts/addArt';
const UPDATE_ART = 'arts/updateArt';
const DELETE_ART = 'arts/deleteArt';
const SET_ERRORS = 'arts/setErrors';
const GET_ART_BY_ID = 'arts/getArtById';
const GET_ART_BY_CHARACTER = 'arts/getArtByCharacter';
const GET_ART_BY_MUN = 'arts/getArtByMun';

const createAction = (type, payload) => ({ type, payload });
const setArts = (arts) => createAction(SET_ART, arts);
const addArt = (art) => createAction(ADD_ART, { art });
const updateArt = (art) => createAction(UPDATE_ART, { art });
const deleteArt = (artId) => createAction(DELETE_ART, { artId });
const setErrors = (errors) => createAction(SET_ERRORS, errors);
const getArtById = (art) => createAction(GET_ART_BY_ID, art);
const getArtByCharacter = (art) => createAction(GET_ART_BY_CHARACTER, art);
const getArtByMun = (art) => createAction(GET_ART_BY_MUN, art);


// GET ART
export const fetchArts = () => async (dispatch) => {
    try {
      const response = await csrfFetch("/api/arts");
  
      if (response.ok) {
        const data = await response.json();
        dispatch(setArts(data.arts));
      } else {
        const errorData = await response.json();
        dispatch(setErrors(errorData.error || 'Failed to load arts.'));
      }
    } catch (error) {
      dispatch(setErrors('An error occurred while fetching arts.'));
    }
  };
  

// CREATE ART
export const createArt = (artData) => async (dispatch) => {
    try {
        const response = await csrfFetch('/api/arts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artData),
        });

        if (response.ok) {
            const newArt = await response.json();
            dispatch(addArt(newArt));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to create art.'));
        }
    } catch (error) {
        console.error(error);
    }
};

// UPDATE ART
export const updateArtData = (id, updatedArtData) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/arts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedArtData),
        });

        if (response.ok) {
            const updatedArt = await response.json();
            dispatch(updateArt(updatedArt));
            return updatedArt;
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to update art.'));
        }
    } catch (error) {
        console.error('Error updating art:', error);
        throw error;
    }
};

// DELETE ART
export const removeArt = (artId) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/arts/${artId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            dispatch(deleteArt(artId));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to delete art.'));
        }
    } catch (error) {
        console.error(error);
    }
};

// GET ART BY ID
export const fetchArtById = (id) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/arts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(getArtById(data));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to fetch art by ID.'));
        }
    } catch (error) {
        dispatch(setErrors('An error occurred while fetching art by ID.'));
    }
};

// GET ART BY CHARACTER
export const fetchArtByCharacter = (character) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/arts/character/${character}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(getArtByCharacter(data.Art));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to fetch art by character.'));
        }
    } catch (error) {
        dispatch(setErrors('An error occurred while fetching art by character.'));
    }
};

// GET ART BY MUN
export const fetchArtByMun = (mun) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/arts/mun/${mun}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(getArtByMun(data.Art));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to fetch art by Mun.'));
        }
    } catch (error) {
        dispatch(setErrors('An error occurred while fetching art by Mun.'));
    }
};


const initialState = {
    arts: [],
    errors: null
};

const artReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ART:
        return { ...state, arts: action.payload, errors: null };
      case ADD_ART:
        return { ...state, arts: [...state.arts, action.payload.art] };
      case UPDATE_ART:
        return {
          ...state,
          arts: state.arts.map((art) =>
            art.id === action.payload.art.id ? action.payload.art : art
          ),
        };
      case DELETE_ART:
        return {
          ...state,
          arts: state.arts.filter((art) => art.id !== action.payload.artId),
        };
      case GET_ART_BY_ID:
        return { ...state, arts: [action.payload.art] };
      case GET_ART_BY_CHARACTER:
        return { ...state, arts: action.payload };
      case GET_ART_BY_MUN:
        return { ...state, arts: action.payload };
      case SET_ERRORS:
        return { ...state, errors: action.payload };
      default:
        return state;
    }
  };


export default artReducer;
