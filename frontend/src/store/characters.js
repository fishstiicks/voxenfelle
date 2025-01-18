import { csrfFetch } from './csrf';

const SET_CHARACTERS = "characters/setCharacters";
const ADD_CHARACTER = "characters/addCharacter";
const UPDATE_CHARACTER = "characters/updateCharacter";
const DELETE_CHARACTER = "characters/deleteCharacter";
const SET_CHARACTERS_BY_MUN = 'characters/setCharactersByMun';
const SET_ERRORS = "characters/setErrors";

const createAction = (type, payload) => ({ type, payload });
const setCharacters = (characters) => createAction(SET_CHARACTERS, characters);
const addCharacter = (newCharacter) => createAction(ADD_CHARACTER, newCharacter);
const updateCharacter = (updatedCharacter) => createAction(UPDATE_CHARACTER, updatedCharacter);
const deleteCharacter = (characterName) => createAction(DELETE_CHARACTER, characterName);
const setErrors = (errors) => createAction(SET_ERRORS, errors);

// GET CHARACTERS
export const fetchCharacters = () => async (dispatch) => {
    try {
      const response = await csrfFetch("/api/characters");
      if (response.ok) {
        const data = await response.json();
        dispatch(setCharacters(data.characters));
      } else {
        const errorData = await response.json();
        dispatch(setErrors(errorData.error || 'Failed to load characters.'));
      }
    } catch (error) {
      dispatch(setErrors('An error occurred while fetching characters.'));
    }
  };
  
// CREATE CHARACTER
  export const createCharacter = (characterData) => async (dispatch) => {
    try {
      const response = await csrfFetch("/api/characters", {
        method: "POST",
        body: JSON.stringify(characterData),
      });
  
      if (response.ok) {
        const newCharacter = await response.json();
        dispatch(addCharacter(newCharacter));
      } else {
        const errorData = await response.json();
        dispatch(setErrors(errorData.error || 'Failed to create character.'));
      }
    } catch (error) {
      dispatch(setErrors('An error occurred while creating character.'));
    }
  };
  
// UPDATE CHARACTER
  export const updateCharacterData = (characterName, updatedData) => async (dispatch) => {
    try {
      const response = await csrfFetch(`/api/characters/${characterName}`, {
        method: "PUT",
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const updatedCharacter = await response.json();
        dispatch(updateCharacter(updatedCharacter));
      } else {
        const errorData = await response.json();
        dispatch(setErrors(errorData.error || 'Failed to edit character.'));
      }
    } catch (error) {
      dispatch(setErrors('An error occurred while editing character.'));
    }
  };
  
  // DELETE CHARACTER
  export const removeCharacter = (characterName) => async (dispatch) => {
    try {
      const response = await csrfFetch(`/api/characters/${characterName}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        dispatch(deleteCharacter(characterName));
      } else {
        const errorData = await response.json();
        dispatch(setErrors(errorData.error || 'Failed to delete character.'));
      }
    } catch (error) {
      dispatch(setErrors('An error occurred while deleting character.'));
    }
  };
  

const initialState = { characters: [], errors: null };

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload, errors: null };
    case SET_ERRORS:
      return { ...state, errors: action.payload };
    case ADD_CHARACTER:
      return { ...state, characters: [...state.characters, action.payload], errors: null };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characters: state.characters.map((character) =>
          character.name === action.payload.name ? action.payload : character
        ),
        errors: null,
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((character) => character.name !== action.payload),
        errors: null,
      };
    default:
      return state;
  }
};

export default charactersReducer;
