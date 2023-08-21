export const SET_USER_ROLE = 'SET_USER_ROLE';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_SETLOGGEDINUSER_DETAILS = 'SET_SETLOGGEDINUSER_DETAILS';
export const SET_PACKAGE_PLAN = 'SET_PACKAGE_PLAN';
export const SET_LIST_WITH_US = 'SET_LIST_WITH_US';
export const SET_EXCLUSIVE_EVENT = 'SET_EXCLUSIVE_EVENT';
export const SET_LUXURY_SERVICE_TYPE = 'SET_LUXURY_SERVICE_TYPE';
export const SET_DAYCATION = 'SET_DAYCATION';
export const SET_CHAUFFEURRIDE = 'SET_CHAUFFEURRIDE';
export const SET_BOAT_CRUISE = 'SET_BOAT_CRUISE';
export const SET_HELICOPTER_RIDE = 'SET_HELICOPTER_RIDE'
export const SET_CONCEIGE_VACATION = 'SET_CONCEIGE_VACATION'

export const setUserRole = userRole => ({
    type: SET_USER_ROLE,
    payload: userRole,
});


export const setLoggedInUserDetails = userDetails => ({
    type: SET_SETLOGGEDINUSER_DETAILS,
    payload: userDetails,
});

export const setPackagePlan = status => ({
    type: SET_PACKAGE_PLAN,
    payload: status
})

export const setListWithUs = listWithUs => ({
    type: SET_LIST_WITH_US,
    payload: listWithUs
})

export const setExclusiveEvent = exclusiveEventDetails => ({
    type: SET_EXCLUSIVE_EVENT,
    payload: exclusiveEventDetails
})

export const setLuxuryServiceType = luxuryServiceType => ({
    type: SET_LUXURY_SERVICE_TYPE,
    payload: luxuryServiceType
})

export const setDaycation = daycationDetails => ({
    type: SET_DAYCATION,
    payload: daycationDetails
})

export const setChauffeurRide = chauffeurDetails => ({
    type: SET_CHAUFFEURRIDE,
    payload: chauffeurDetails
})

export const setBoatCruise = boatCruiseDetails => ({
    type: SET_BOAT_CRUISE,
    payload: boatCruiseDetails
})

export const setHelicopterRide = helicopterRideDetails => ({
    type: SET_HELICOPTER_RIDE,
    payload: helicopterRideDetails
})

export const setConceigeVacation = conceigeVacationDetails => ({
    type: SET_CONCEIGE_VACATION,
    payload: conceigeVacationDetails
})