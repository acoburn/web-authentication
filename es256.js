'use strict'

const fs = require('mz/fs')
const jwt = require('jsonwebtoken')

const ALG = 'ES256'
const DATA = {
  username: 'acoburn'
}

const peek = x => console.log(x) || console.log("\n") || x

const sign = data =>
  fs.readFile('./keys/ec_private.pem')
    .then(priv => jwt.sign(data, priv, {algorithm: ALG}))

const verify = token =>
  fs.readFile('./keys/ec_public.pem')
    .then(pub => jwt.verify(token, pub, {algorithms: [ALG]}))

sign(DATA)
  .then(peek)
  .then(verify)
  .then(peek)

