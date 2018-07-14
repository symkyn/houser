const initialState = {
    name: 'proto-name',
    address: 'proto-address',
    city: 'proto-city',
    usState: 'XX',
    zip: 12345,
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
            return state;
        case UPDATE_STEPTHREE:
            return state;
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
        payload: url
    };
}

export function updateStepThree( rentInfo ) {
    return{
        type: UPDATE_STEPTHREE,
        payload: rentInfo
    };
}

export default reducer;

