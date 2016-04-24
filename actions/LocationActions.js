import alt from '../alt'
import LocationSource from '../sources/LocationSource'
import 'whatwg-fetch'

class LocationActions {
    updateLocations(locations) {
        return locations
    }

    fetchLocations() {
        return dispatch => {
            dispatch()
            let ls = new LocationSource()
            ls.fetchy()
                .then(locations => {
                    console.log('yes')
                    this.updateLocations(locations)
                })
                .catch(errorMessage => {
                    console.log('nope')
                    this.locationsFailed(errorMessage)
                })
        }
    }

    locationsFailed(errorMessage) {
        return errorMessage
    }
}

export default alt.createActions(LocationActions)