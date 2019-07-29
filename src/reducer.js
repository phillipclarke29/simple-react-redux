//reducer.  Reducers receive actions and decide how to change the state.
// Inside a reducer you should NEVER 1. Mutate its arguments. 2. Perform side effects like calling APIs.  3. Call non pure functions such as Date.now or Math.random()

function counter(state, action){
    //if state is empty set count to 0
    if (state === undefined) {
        return { count: 0}
    }

    var count = state.count;

    switch (action.type) {
        case "increase":
            return {count: count + 1};
        case "decrease":
            return { count: count - 1};
        default:
            return state;
    }
}

export default counter