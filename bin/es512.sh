# private key
openssl ecparam -genkey -name secp521r1 -noout -out es512-private.pem
# public key
openssl ec -in es512-private.pem -pubout -out es512-public.pem
