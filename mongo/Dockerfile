FROM mongo:latest

COPY ./property.json /docker-entrypoint-initdb.d/

CMD mongoimport --host mongodb --db Mission-Ready-M5 --collection properties --type json --file /docker-entrypoint-initdb.d/property.json --jsonArray
