import { csrfFetch } from './csrf';

const SET_CLUBS = 'clubs/setClubs';
const ADD_CLUB = 'clubs/addClub';
const UPDATE_CLUB = 'clubs/updateClub';
const DELETE_CLUB = 'clubs/deleteClub';
const SET_MEMBERSHIPS = 'clubs/setMemberships';
const ADD_MEMBERSHIP = 'clubs/addMembership';
const DELETE_MEMBERSHIP = 'clubs/deleteMembership';
const SET_MEMBERSHIPS_BY_CLUB = 'clubs/setMembershipsByClub';

const SET_ERRORS = "characters/setErrors";

const createAction = (type, payload) => ({ type, payload });

const setClubs = (clubs) => createAction(SET_CLUBS, clubs);
const addClub = (club) => createAction(ADD_CLUB, { club });
const updateClub = (club) => createAction(UPDATE_CLUB, { club });
const deleteClub = (clubId) => createAction(DELETE_CLUB, { clubId });

const setMemberships = (memberships) => createAction(SET_MEMBERSHIPS, { memberships });
const addMembership = (membership) => createAction(ADD_MEMBERSHIP, { membership });
const deleteMembership = (membershipId) => createAction(DELETE_MEMBERSHIP, { membershipId });

const setMembershipsByClub = (clubName, memberships) => createAction(SET_MEMBERSHIPS_BY_CLUB, { clubName, memberships });
const setErrors = (errors) => createAction(SET_ERRORS, errors);

// GET CLUBS
export const fetchClubs = () => async (dispatch) => {
    try {
        const response = await csrfFetch("/api/clubs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(setClubs(data.clubs)); 
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to load clubs.'));
        }
    } catch (error) {
        dispatch(setErrors('An error occurred while fetching clubs.'));
    }
};

// CREATE CLUB
export const createClub = (clubData) => async (dispatch) => {
    try {
        const response = await csrfFetch('/api/clubs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clubData),
        });

        if (response.ok) {
            const newClub = await response.json();
            dispatch(addClub(newClub));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to create club.'));
        }
    } catch (error) {
        console.error(error);
    }
};

// GET MEMBERSHIPS BY CLUB
export const fetchClubMembers = (clubName) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/clubs/${clubName}/members`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(setMembershipsByClub(clubName, data.Memberships));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to load memberships.'));
        }
    } catch (error) {
        console.error(error);
        dispatch(setErrors('An error occurred while fetching memberships.'));
    }
};

// UPDATE CLUB
export const updateClubData = (id, updatedClubData) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/clubs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedClubData),
        });

        if (response.ok) {
            const updatedClub = await response.json();
            dispatch(updateClub(updatedClub));
            return updatedClub;
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to update club.'));
        }
    } catch (error) {
        console.error('Error updating club:', error);
        throw error;
    }
};

// DELETE CLUB
export const removeClub = (clubId) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/clubs/${clubId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            dispatch(deleteClub(clubId));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.error || 'Failed to delete club.'));
        }
    } catch (error) {
        console.error(error);
    }
};

// CREATE MEMBERSHIP
export const createMembership = (clubName, characterName) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/clubs/${clubName}/${characterName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const newMembership = await response.json();
            dispatch(addMembership(newMembership));
        } else {
            const errorData = await response.json();
            dispatch(setErrors(errorData.message || 'Failed to add membership.'));
        }
    } catch (error) {
        console.error('Error adding membership:', error);
        dispatch(setErrors('An error occurred while adding membership.'));
    }
};

const initialState = {
    clubs: [],
    membershipsByClub: {},
    errors: null,
};

const clubsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLUBS:
            return { ...state, clubs: action.payload, errors: null };  
        case ADD_CLUB:
            return { ...state, clubs: [...state.clubs, action.payload.club] };
        case UPDATE_CLUB:
            return {
                ...state,
                clubs: state.clubs.map((club) =>
                    club.id === action.payload.club.id ? action.payload.club : club
                ),
            };
        case DELETE_CLUB:
            return {
                ...state,
                clubs: state.clubs.filter((club) => club.id !== action.payload.clubId),
            };
        case SET_MEMBERSHIPS:
            return { ...state, memberships: action.payload.memberships };
        case ADD_MEMBERSHIP:
            return {
                ...state,
                membershipsByClub: {
                    ...state.membershipsByClub,
                    [action.payload.membership.club]: [
                        ...(state.membershipsByClub[action.payload.membership.club] || []),
                        action.payload.membership,
                    ],
                },
            };
        case DELETE_MEMBERSHIP:
            return {
                ...state,
                memberships: state.memberships.filter(
                    (membership) => membership.id !== action.payload.membershipId
                ),
            };
        case SET_MEMBERSHIPS_BY_CLUB:
            return {
                ...state,
                membershipsByClub: {
                    ...state.membershipsByClub,
                    [action.payload.clubName]: action.payload.memberships,
                },
            };
        default:
            return state;
    }
};

export default clubsReducer;
