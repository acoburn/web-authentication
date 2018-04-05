'use strict'

const jwt = require('jsonwebtoken')

const PASSWD = 'waterfront'
const ALG = 'HS256'
const DATA = {
  username: 'acoburn'
}

const peek = x => console.log(x) || console.log("\n") || x

const sign = data => new Promise(resolve =>
    resolve(jwt.sign(data, PASSWD, {algorithm: ALG})))

const verify = token =>
  jwt.verify(token, PASSWD, {algorithms: [ALG]})

sign(DATA)
  .then(peek)
  .then(verify)
  .then(peek)

