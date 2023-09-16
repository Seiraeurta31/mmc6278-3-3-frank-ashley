require('dotenv').config()
const express = require('express')
const app = express()


// TODO: import the getCityInfo and getJobs functions from util.js
const {getJobs, getCityInfo} = require('./util')

// TODO: Statically serve the public folder
app.use(express.static ('public'))

// TODO: declare the GET route /api/city/:city
app.get('/api/city/:city', (req, res) => {
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON. 
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status


const city = cityData()
const availJobs = jobsData()

const cityInformation = {cityInfo: city, jobs: availJobs}
res.json(cityInformation)

})
 
module.exports = app



async function cityData(req){
    const cityInfo = getCityInfo()
    return cityInfo =JSON.stringify(cityInfo)
}

async function jobsData(req){
    const jobsInfo = getJobs()
    return jobsInfo =JSON.stringify(jobsInfo)
}