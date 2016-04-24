import React from 'react'
import LocationStore from '../stores/LocationStore'
import LocationActions from '../actions/LocationActions'

export default class Locations extends React.Component {
    constructor(props) {
        super(props)
        this.state = LocationStore.getState()
    }

    componentDidMount() {
        LocationStore.listen(this.onChange.bind(this))

        LocationActions.fetchLocations()
    }

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange.bind(this))
    }

    onChange(state) {
        this.setState(state)
    }

    render() {
        if (this.state.errorMessage) {
            return <div>Something is wrong</div>
        }

        if (!this.state.locations.length) {
            return (
                <div>
                    <img src="/spinner.gif" />
                </div>
            )
        }
    }
}