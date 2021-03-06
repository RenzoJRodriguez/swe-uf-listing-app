//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://admin:admin@ds051883.mlab.com:51883/assignment-4', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyC-Ob73nfPtpyROy3bo_5glsx6U2ZC_NSE'
  },
  port: process.env.PORT || 8080
};
