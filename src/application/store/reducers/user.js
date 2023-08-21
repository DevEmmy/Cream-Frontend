import * as userActions from '../actions/user'

const initialState = {
    userId: JSON.parse(localStorage.getItem('user'))?._id ?? '',
    email: JSON.parse(localStorage.getItem('user'))?.email ?? '',
    firstName: JSON.parse(localStorage.getItem('user'))?.firstName ?? '',
    lastName: JSON.parse(localStorage.getItem('user'))?.lastName ?? '',
    isAdmin: JSON.parse(localStorage.getItem('user'))?.isAdmin ?? false,
    profilePicture: JSON.parse(localStorage.getItem('user'))?.profilePicture ?? null,
    createdAt: JSON.parse(localStorage.getItem('user'))?.createdAt ?? ' ',
    status: 'silver',
    listWithUs: false,
    luxuryServiceType: '',
    exclusiveEvent: {},
    daycation: {},
    chauffeurRide: {},
    boatCruise: {},
    helicopterRide: {},
    conciergeVacation: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (userActions.SET_USER_ROLE):
            return { ...state, userRole: action.payload };
        case (userActions.SET_SETLOGGEDINUSER_DETAILS):
            return {
                ...state,
                userRoles: action.payload.isAdmin,
                userId: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                profilePicture: action.payload.profilePicture,
                createdAt: action.payload.createdAt,

            };
        case (userActions.SET_PACKAGE_PLAN):
            return { ...state, status: action.payload }
        case (userActions.SET_LIST_WITH_US):
            return { ...state, listWithUs: action.payload }
        case (userActions.SET_EXCLUSIVE_EVENT):
            return { ...state, exclusiveEvent: action.payload }
        case (userActions.SET_LUXURY_SERVICE_TYPE):
            return { ...state, luxuryServiceType: action.payload }
        case (userActions.SET_DAYCATION):
            return { ...state, daycation: action.payload }
        case (userActions.SET_CHAUFFEURRIDE):
            return { ...state, chauffeurRide: action.payload }
        case (userActions.SET_BOAT_CRUISE):
            return { ...state, boatCruise: action.payload }
        case (userActions.SET_HELICOPTER_RIDE):
            return { ...state, helicopterRide: action.payload }
        case (userActions.SET_CONCEIGE_VACATION):
            return { ...state, conciergeVacation: action.payload }
        default:
            return state;
    }
}