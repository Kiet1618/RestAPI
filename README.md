# REST API
## Set up and start
### Set up package
    yarn
### Run Server
    yarn server
## Features
### Create new User API 

#### Request
    Method: POST
    Route: http://localhost:5000/api/users
    {
    "first_name": "test",
    "last_name": "test",
    "email": "test@gamil.com",
    "password": "123456789@"
    }
#### Response
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmIwMzNiYjdkZDVkOTk5MGY4ZjU0OSIsImlhdCI6MTY4MDU0MDQ3NSwiZXhwIjoxNjgwNTQ0MDc1fQ.2xQqcbPnq5DPcDwtS36NmpuN7vqwSfMF9etT6bs-1fY"
    }
### Login User API
#### Request
    Method: POST
    Route: http://localhost:5000/api/auth
    {
    "email": "test@gamil.com",
    "password": "123456789@"
    }
#### Response
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmIwMzNiYjdkZDVkOTk5MGY4ZjU0OSIsImlhdCI6MTY4MDU0MDQ3NSwiZXhwIjoxNjgwNTQ0MDc1fQ.2xQqcbPnq5DPcDwtS36NmpuN7vqwSfMF9etT6bs-1fY"
    }
### Get Infor by id User API
#### Request
    Method: GET
    Route: http://localhost:5000/api/users/{id}
#### Response
    {
    "_id": "6423f0e0b48825a652cbb859",
    "first_name": "test",
    "last_name": "test",
    "email": "test@gamail.com",
    "password": "$2a$10$lze5clrmxRXQ.asGpyGxiu4K/3QZrVnmDhetCNeLwCPtm2AOlLwQi",
    "avatar": "//www.gravatar.com/avatar/90e851316464617e3f2fed24fb4e30aa?size=200&rating=g&default=mm",
    "date": "2023-03-29T08:03:44.482Z",
    "__v": 0
    }
### Update Infor User API
#### Request
    Method: PUT
    Route: http://localhost:5000/api/users/{id}
    {
    "first_name": "test2",
    "last_name": "test2",
    "email": "test2@gmail.com",
    "password": "11111111@"
    }
#### Response
    {
    "_id": "6423f0e0b48825a652cbb859",
    "first_name": "test2",
    "last_name": "test2",
    "email": "test2@gmail.com",
    "password": "$2a$10$UtD67ljaEW1Aq/g/DtAHNOSuOu/aSDI/H3kx3cgIm85zeKHTtMXi6",
    "avatar": "//www.gravatar.com/avatar/90e851316464617e3f2fed24fb4e30aa?size=200&rating=g&default=mm",
    "date": "2023-03-29T08:03:44.482Z",
    "__v": 0
    }
### Get All Users
#### Request
    Method: GET
    Route: http://localhost:5000/api/users
#### Response
    [{
        "_id": "6423f0e0b48825a652cbb859",
        "first_name": "test2",
        "last_name": "test2",
        "email": "test2@gmail.com",
        "password": "$2a$10$UtD67ljaEW1Aq/g/DtAHNOSuOu/aSDI/H3kx3cgIm85zeKHTtMXi6",
        "avatar": "//www.gravatar.com/avatar/90e851316464617e3f2fed24fb4e30aa?size=200&rating=g&default=mm",
        "date": "2023-03-29T08:03:44.482Z",
        "__v": 0
    },
        "_id": "6423f0e0b48825a652cbb859",
        "first_name": "test2",
        "last_name": "test2",
        "email": "test2@gmail.com",
        "password": "$2a$10$UtD67ljaEW1Aq/g/DtAHNOSuOu/aSDI/H3kx3cgIm85zeKHTtMXi6",
        "avatar": "//www.gravatar.com/avatar/90e851316464617e3f2fed24fb4e30aa?size=200&rating=g&default=mm",
        "date": "2023-03-29T08:03:44.482Z",
        "__v": 0
    }
    ]



    