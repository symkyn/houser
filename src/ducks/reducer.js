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
            return {name: action.payload.name,
                    address: action.payload.address,
                    city: action.payload.city,
                    usState: action.payload.usState,
                    zip: action.payload.zip,
                    url: state.url,
                    amount: state.amount,
                    rent: state.rent};
        case UPDATE_STEPTWO:
            return {name: state.name,
                    address: state.address,
                    city: state.city,
                    usState: state.usState,
                    zip: state.zip,
                    url: action.payload.url,
                    amount: state.amount,
                    rent: state.rent};
        case UPDATE_STEPTHREE:
            return {name: state.name,
                address: state.address,
                city: state.city,
                usState: state.usState,
                zip: state.zip,
                url: state.url,
                amount: action.payload.amount,
                rent: action.payload.rent};
        default: return state;
    }
}

export function updateStepOne( name, address, city, usState, zip ) {
    
    return {
        type: UPDATE_ADDRESS_INFO,
        payload: {name: name, address: address, city: city, usState: usState, zip: zip}
    };
}

export function updateStepTwo( url ) {
    return{
        type: UPDATE_STEPTWO,
        payload: {url}
    };
}

export function updateStepThree( amount, rent ) {
    debugger
    return{
        type: UPDATE_STEPTHREE,
        payload: {amount: amount, rent: rent}
    };
}

export default reducer;

