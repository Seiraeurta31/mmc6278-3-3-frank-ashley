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
    .get(async (req, res) => {
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON. 
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status

    var location = req.params.city
    const cityInfo = await getCityInfo(location)
    const jobs =await getJobs(location)
    
    if(!(cityInfo || jobs)) 
        return res.status(404).send("information not found")
    const info = {cityInfo, jobs}
    res.json(info)

})
 
module.exports = app

