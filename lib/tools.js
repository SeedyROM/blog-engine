require('../config/sys')
require('../config/mongoose')
require('../config/passport')
const cli = require('../config/cli')

if(cli.hasArguments()) cli.processArguments();
