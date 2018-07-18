const initialState = {
    name: '',
    address: '',
    city: '',
    usState: '',
    zip: 0,
    url: '',
    amount: 0,
    rent: 0
}

const UPDATE_ADDRESS_INFO = "UPDATE_ADDRESS_INFO";
const UPDATE_STEPTWO = "UPDATE_STEPTWO";
const UPDATE_STEPTHREE = "UPDATE_STEPTHREE";


function reducer(state=initialState, action) {
    switch(action.type){
        case UPDATE_ADDRESS_INFO:
            return action.payload;
        case UPDATE_STEPTWO:
            return action.payload;
        case UPDATE_STEPTHREE:
            return action.payload;
        default: return state;
    }
}

export function updateStepOne( name, address, city, usState, zip ) {
    
    return {
        type: UPDATE_ADDRESS_INFO,
        payload: {name, address, city, usState, zip}
    };
}

export function updateStepTwo( url ) {
    return{
        type: UPDATE_STEPTWO,
        payload: {url}
    };
}

export function updateStepThree( amount, rent ) {
    return{
        type: UPDATE_STEPTHREE,
        payload: {amount, rent}
    };
}

export default reducer;

