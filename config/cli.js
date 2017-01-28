// Has arguments?
var hasArguments = () => {
  return (process.argv.length > 2)
}
// Make sure arguments are being passed besides standard program and filename.
var processArguments = () => {
  return new Promise(() => {
    // Handle commandline arugments
    const grab = require('ps-grab')
    const readline = require('readline-sync')

    // Models to import
    const User = require(rootDir + '/lib/models/user')

    var generateOption = (grab('--generate') || grab('-g'))
    var removeOption = (grab('--remove') || grab('-r'))
    if(generateOption) {
      switch(generateOption) {
        case 'administrator' || 'admin':
          var username = (grab('--username') || grab('-u'))
          if(!username) {
            console.log('The generate administrator command requires the -u or --username arguments to work!'.error)
            process.exit(1)
          }

          User.count({username: username}, (error, count) => {
            if(count > 0) {
              console.log(`Administrator with username ${username} is already taken!`.underline.error)
              process.exit(1)
            }
          }).then(() => {
            console.log(`Type in password for username ${username}`)
            var password = readline.question('Password: ', {
              hideEchoBack: true
            })
            var confirmPassword = readline.question('Confirm Password: ', {
              hideEchoBack: true
            })
            if(password !== confirmPassword) {
              console.log('Passwords entered do not match!'.error)
              process.exit(1)
            }

            User.register(new User({username: username}), confirmPassword, (error) => {
              if(error){
                console.log(`Error generating administrator ${username}:\n${error}`)
                process.exit(1)
              }
              console.log(`Administrator ${username} successfully created!`.info)
              process.exit(0)
            });
          })
        break;
      }
    } else if(removeOption) {
      switch(removeOption) {
        case 'administrator' || 'admin':
          var username = (grab('--username') || grab('-u'))
          if(!username) {
            console.log('The generate administrator command requires the -u or --username arguments to work!'.error)
            process.exit(1)
          }

          User.count({username: username}, (error, count) => {
            if(count <= 0) {
              console.log(`Cannot delete administrator ${username} because it does not exist in the database`.underline.error)
              process.exit(1)
            }
          }).then(() => {
            console.log('Are you sure you want to delete this administrator from the database?'.underline.inverse)
            console.log('This cannot be undone!'.inverse)
            var confirmation = readline.question('Answer "REMOVE" to continue: ').trim();
            if(confirmation != 'REMOVE') {
              console.log('You must type "REMOVE"!'.error)
              process.exit(1)
            }
            User.find({username: username}).remove((error) => {
              if(error){
                console.log(`Error removing administrator ${username}:\n${error}`)
                process.exit(1)
              }
              console.log(`Administrator ${username} successfully deleted!`.warn)
              process.exit(0)
            })
          })
        break;
      }
    }
  })
}

module.exports = {
  hasArguments: hasArguments,
  processArguments: processArguments
}
