let state = {
    sliders: {
        loading: false,
        list: []
    }
};

let obj = {
    ...state,
    sliders: {
        loading: false,
        list: [1],
        number:'www'
    }
}
console.log(obj);