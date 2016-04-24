import 'whatwg-fetch'
//console.log(fetch('mockdata.json'))

export default class LocationSource {
    fetchy() {
        //return new Promise((resolve, reject) => {
            /* simulate an asynchronous action where data is fetched
               from a remote server */
        //     setTimout(() => {
        //         resolve(mockData)
        //     }, 250)
        // })
        fetch('mockdata.json')
            .then(response => {
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
}