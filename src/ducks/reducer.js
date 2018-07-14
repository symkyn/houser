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

export default function reducer(state=initialState, action) {
    switch(action){
        default: return state;
}}