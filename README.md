# blog-engine
A pet project to simplify development/deployment of static website and CMS style blogs.


## Nifty things about it!
* SASS/SCSS with Bourbon and Neat for easy and responsive web designs.
* Nunchucks for templating.
* Passport for local administration and management of permissions.
* Small code-base, libs and source included.
* Easy to get started!

## Get started!
####Run this command:

`curl https://raw.githubusercontent.com/SeedyROM/blog-engine/master/setup.sh | bash -s {NEW_PROJECT_NAME}`

_*Where {NEW_PROJECT_NAME} is whatever you like!*_

######Make sure MongoDB is running or setup!

####Then run:
`npm install && grunt`


## Adding an admin

####While in the root of the project directory run:

`node app.js -g administrator -u admin`

######or the more verbose...

`node app.js --generate administrator --username admin`

This will then prompt you to set and confirm a password, which if successful will create a new

## Removing an admin

####While in the root of the project directory run:

`node app.js -r administrator -u admin`

######or the more verbose...

`node app.js --remove administrator --username admin`

This will then prompt you to type the word REMOVE in all caps to confirm deletion, otherwise nothing is changed and an error is thrown.
