

const initalState = {
    character: {},
    error: '',
    isFetching: false
};

export const randomCharacterReducer = (state = initalState, action) => {

    switch(action.type){
        case 'FETCH_RANDOM_CHARACTER_START':
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case 'FETCH_RANDOM_CHARACTER_SUCCESS':
            return {
                ...state,
                character: action.payload,
                isFetching: false,
                error: ''
            };
        case 'FETCH_RANDOM_CHARACTER_FAIL':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}