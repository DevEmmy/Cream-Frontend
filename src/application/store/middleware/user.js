import { SET_SETLOGGEDINUSER_DETAILS } from "../actions/user";

const setLoggedInUserDetailsFlow =
    ({ api, log }) =>

        ({ dispatch }) =>
            (next) =>
                (action) => {

                    if (action.type === SET_SETLOGGEDINUSER_DETAILS) {
                        localStorage.setItem("user", JSON.stringify(action.payload));
                        next(action);
                    }

                    else {
                        next(action);
                    }
                };

export default [setLoggedInUserDetailsFlow];
