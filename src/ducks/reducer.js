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

const UPDATE_STEPONE = "UPDATE_STEPONE";
const UPDATE_STEPTWO = "UPDATE_STEPTWO";
const UPDATE_STEPTHREE = "UPDATE_STEPTHREE";


export default function reducer(state=initialState, action) {
    switch(action){
        case UPDATE_STEPONE:
            return state;
        case UPDATE_STEPTWO:
            return state;
        case UPDATE_STEPTHREE:
            return state;
        default: return state;
}}

export function updateStepOne( addressInfo ) {
    return{
        type: UPDATE_STEPONE,
        payload: addressInfo
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

