require('dotenv').config()
const express = require('express')
const app = express()


// TODO: import the getCityInfo and getJobs functions from util.js
const {getJobs, getCityInfo} = require('./util')


// TODO: Statically serve the public folder
app.use(express.static ('public'))

// TODO: declare the GET route /api/city/:city
app
    .route('/api/city/:city')
    .get((req, res) => {
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON. 
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status

    var location = req.params.city
    const city = getCityInfo(location)
    const availJobs = getJobs(location)

    if(!(city || availJobs)) 
        return res.status(404).send("information not found")

    const cityInformation = {jobs: availJobs, cityInfo: city}
    res.status(200).json(cityInformation)
    return res.status(200).end()

})
 
module.exports = app



// function cityData(){
//     var cityInfo = getCityInfo()
//     return cityInfo 
// }

// function jobsData(){
//     var jobsInfo = getJobs()
//     return jobsInfo 
// }