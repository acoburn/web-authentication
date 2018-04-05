# Web Authentication

Burlington, Vermont, JS Meetup. April 4, 2018.

The Node.js scripts assume the presence of EC and RSA keypairs in a `./keys` directory.

These keys can be generated with `openssl` using the following commands:

```sh
# Generate an EC keypair
openssl ecparam -genkey -name prime256v1 -noout -out ./keys/ec_private.pem
openssl ec -in ./keys/ec_private.pem -pubout -out ./keys/ec_public.pem

# Generate an RSA keypair
ssh-keygen -t rsa -b 4096 -f rsa.key
openssl rsa -in rsa.key -pubout -outform PEM -out ./keys/rsa_public.pem
mv rsa.key ./keys/rsa_private.pem
rm rsa.key.pub
```
