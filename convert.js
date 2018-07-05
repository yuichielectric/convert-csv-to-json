const request = require('request')
const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

const url = 'https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2018+type@asset+block/customer-data.csv'
let data = []

csv()
.fromStream(request.get(url))
.subscribe((json) => {
  data.push(json)
}, (error) => {
  console.error(error)
}, () => {
  const filename = 'customer-data.json'
  let filepath = path.join(__dirname, filename)
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2))
  console.log('Saved converted JSON file: ', filepath)
})
