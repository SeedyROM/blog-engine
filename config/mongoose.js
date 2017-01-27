const sys = require('./sys')
const mongoose = require('mongoose')
mongoose.Promise = require('promise')
mongoose.connect(`mongodb://${sys.hostname}/${sys.databaseName}`)

const db = mongoose.connection
db.on('error', (error) => {
  console.log(colors.error(error))
  console.log('Error connecting to MongoDB!'.error)
  process.exit(1);
})
db.once('open', () => {
  console.log('Connected to MongoDB...'.input)
})

module.exports = {
  db: db
}
