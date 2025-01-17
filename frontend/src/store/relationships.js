import { csrfFetch } from './csrf';

const SET_RELATIONSHIPS = "relationships/setRelationships";
const SET_RELATIONSHIP = "relationships/setRelationship";
const ADD_RELATIONSHIP = "relationships/addRelationship";
const UPDATE_RELATIONSHIP = "relationships/updateRelationship";
const DELETE_RELATIONSHIP = "relationships/deleteRelationship";
const SET_ERRORS = "relationships/setErrors";

const createAction = (type, payload) => ({ type, payload });

const setRelationships = (relationships) => createAction(SET_RELATIONSHIPS, relationships);
const setRelationship = (relationship, characterName) => createAction(SET_RELATIONSHIP, { relationship, characterName });
const addRelationship = (newRelationship) => createAction(ADD_RELATIONSHIP, newRelationship);
const updateRelationship = (updatedRelationship) => createAction(UPDATE_RELATIONSHIP, updatedRelationship);
const deleteRelationship = (relationshipId) => createAction(DELETE_RELATIONSHIP, relationshipId);
const setErrors = (errors) => createAction(SET_ERRORS, errors);

// GET RELATIONSHIPS BY CHARACTER
export const fetchRelationships = (characterName) => async (dispatch) => {
    try {
      const response = await fetch(`/api/characters/${characterName}/relationships`);
      const data = await response.json();

      if (data.Relationships && Array.isArray(data.Relationships)) {
        dispatch(setRelationships(data.Relationships));
      } else {
        dispatch(setRelationships([]));
      }
    } catch (error) {
      console.error('Error fetching relationships:', error);
      dispatch(setRelationships([]));
    }
  };
  

// GET REALTIONSHIP BETWEEN TWO CHARACTERS
export const fetchRelationship = (characterName, otherCharacterName) => async (dispatch) => {
    try {
      const response = await csrfFetch(`/api/characters/${characterName}/relationships/${otherCharacterName}`);
  
      if (response.ok) {
        const data = await response.json();
        dispatch(setRelationship(data.Relationships[0], otherCharacterName));
      } else {
        const errorData = await response.json();
        dispatch(setErrors(errorData.error || 'Failed to load relationship.'));
      }
    } catch (error) {
      dispatch(setErrors('An error occurred while fetching relationship.'));
    }
  };

// CREATE RELATIONSHIP
export const createRelationship = (characterName, otherCharacterName, relationshipData) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/characters/${characterName}/relationships/${otherCharacterName}`, {
      method: "POST",
      body: JSON.stringify(relationshipData),
    });

    if (response.ok) {
      const newRelationship = await response.json();
      dispatch(addRelationship(newRelationship));
    } else {
      const errorData = await response.json();
      dispatch(setErrors(errorData.error || 'Failed to create relationship.'));
    }
  } catch (error) {
    dispatch(setErrors('An error occurred while creating relationship.'));
  }
};

// UPDATE RELATIONSHIP
export const updateRelationshipData = (characterName, otherCharacterName, relationshipData) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/characters/${characterName}/relationships/${otherCharacterName}`, {
      method: "PUT",
      body: JSON.stringify(relationshipData),
    });

    if (response.ok) {
      const updatedRelationship = await response.json();
      dispatch(updateRelationship(updatedRelationship));
    } else {
      const errorData = await response.json();
      dispatch(setErrors(errorData.error || 'Failed to update relationship.'));
    }
  } catch (error) {
    dispatch(setErrors('An error occurred while updating relationship.'));
  }
};

// DELETE RELATIONSHIP
export const deleteRelationshipThunk = (characterName, relationshipId) => async (dispatch) => {
    try {
      const response = await csrfFetch(`/api/characters/${characterName}/relationships/${relationshipId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        dispatch(deleteRelationship(relationshipId));
      } else {
        const errorData = await response.json();
        dispatch(setErrors(errorData.error || 'Failed to delete relationship.'));
      }
    } catch (error) {
      dispatch(setErrors('An error occurred while deleting relationship.'));
    }
  };



const initialState = { relationships: [], errors: null };

const relationshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RELATIONSHIPS:
      return action.payload;
    case SET_RELATIONSHIP:
      return {
        ...state,
        relationships: {
        ...state.relationships,
        [action.payload.characterName]: action.payload.relationship
        },
        errors: null,
      };
    case SET_ERRORS:
      return { ...state, errors: action.payload };
    case ADD_RELATIONSHIP:
      return { ...state, relationships: [...state.relationships, action.payload], errors: null };
    case UPDATE_RELATIONSHIP:
      return {
        ...state,
        relationships: state.relationships.map((relationship) =>
          relationship.id === action.payload.id ? action.payload : relationship
        ),
        errors: null,
      };
    case DELETE_RELATIONSHIP:
      return {
        ...state,
        relationships: state.relationships.filter(
            (relationship) => relationship.id !== action.payload.relationshipId),
        errors: null,
      };
    default:
      return state;
  }
};

export default relationshipsReducer;
