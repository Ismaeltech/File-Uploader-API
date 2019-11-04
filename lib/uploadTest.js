// lib/uploadTest.js
const mime = require(‘mime-types’)

require('dotenv').config()
// Require File System
const fs = require('fs')
// Require AWS SDK
const AWS = require('aws-sdk')
// Set AWS region
AWS.config.update({ region: 'us-east-1' })
// Create S3 Object instance
const s3 = new AWS.S3()

console.log(s3)

// Access command line arguments to get file path
const filePath = process.argv[2]

const bucketName = process.env.BUCKET_NAME

module.exports = function () {
  const params = {
    Bucket: bucketName,
    Key: 'something',
    Body: fileData,
    ACL: 'public-read',
    ContentType: mime.lookup(filePath)
  }
}
// Read the file first
fs.readFile(filePath, (err, fileData) => {
  if (err) throw err

  s3.upload(params, (err, s3Data) => {
    if (err) throw err

    console.log(s3Data)
  })
})
