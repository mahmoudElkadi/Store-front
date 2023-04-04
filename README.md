DATABASE PORT IS 5432
BACKEND PORT IS 3000

INSTRUCTIONS :-
1- don't forget edit user and password for database in database.json and .env file
2- create database and put name of it in .env and database.json files
3- run migrations to create tables


Structure :-
build --> include on compiled ts files to js after building
DB --> include on database connection and models
middleware --> include on authentication and validation functions separeted
migrations --> include on migrations of creating DB schemas
handeler -->include on API Endpoint
spec --> file have jasmine configration
tests --> have helpers of jasmine and specs of testing



Scripts involved :-
preitter --> to apply format and modify code style
lint --> to check syntax errors if exist
build --> to build typeScript files to javaScript
test --> i used jasmine for testing
start --> starts the app

Middlewares :-
Authorization --> this authorize user 

Endpoints involved :-
GET http://localhost:3000/api/users --> gets all users


GET http://localhost:3000/api/users/:id --> gets speceific user
needed parameter(id) 

POST http://localhost:3000/api/users/ --> add user

POST http://localhost:3000/api/user/authenticate --> authenticate user


GET http://localhost:3000/api/product/ --> gets all products
needed token


GET http://localhost:3000/api/product/:id --> gets speceific product
needed parameter(id) needed token

POST http://localhost:3000/api/product/ --> add product
needed token

GET http://localhost:3000/api/order/ --> gets all orders


POST http://localhost:7000/api/order/:id/product --> add product to speceific order require parameter(id of product) 

POST http://localhost:7000/api/product-in-orders --> add product to speceific order




environment variables:-

SALT --> hasing salt
JWT_TOKEN --> token secret key
ENV --> which database is working
DB_HOST --> host of database (localhost)
DATABASE --> name of development database
DATABASE_TEST --> name of test database
DB_USER --> username of postgres
DB_PASSWORD --> password of postgres


Database schema :-
users table --> include on primary key (id) type serial and first_name type varchar and last_name type varchar and password type varchar

product table -->include on primary key (id) type serial and name type varchar and price type integer 

order table --> include  primary key (id) type serial and userid reference table users and order_status type varchar

order_product table -->include  primary key (id) type serial and orderid reference table order and productid reference table product and quantity type integer


