#!/bin/bash

# docker run -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=admin -p 5984:5984 couchdb

curl -X PUT http://admin:admin@localhost:5984/_users
curl -X PUT http://admin:admin@localhost:5984/_replicator
curl -X PUT http://admin:admin@localhost:5984/_global_changes
curl -X PUT http://admin:admin@localhost:5984/checkup

npx add-cors-to-couchdb http://localhost:5984 -u admin -p admin
