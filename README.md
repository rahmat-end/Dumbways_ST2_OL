# Micro Feature Pemilu Dumbways Project Build with TypeORM

## Setup
Steps to run this project:
1. Run `npm i` command
2. Setup database settings inside `src/data-source.ts` file
3. Setup cloudinary config inside `src/libs/cloudinary.ts` file
4. Run `npm run migration:generate` command
5. Run `npm run migration:run` command
6. Run `npm start` command

## User Route
1. Get all user
- URL `http://localhost:5000/api/v1/user`
- Method `GET`
- Require Token : `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "fullName": "Rahmat Kurniawan",
                "alamat": "Jakarta",
                "jenisKelamin": "Laki - Laki",
                "username": "rahmat",
                "password": "$2b$10$VDaRosLOQ49qL.PN1aFlMu6.e7QuC7AO7A38e3ooxSXFFBGjVn2fm",
                "createdAt": "2023-11-24T05:26:18.960Z",
                "updatedAt": "2023-11-24T05:26:18.960Z"
            }
        ],
        "message": "Successfully! All record has been fetched"
    }
```
2. Get a single user
- URL `http://localhost:5000/api/v1/user/1`
- Method `GET`
- Require Token : `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": {
            "id": 1,
            "fullName": "Rahmat Kurniawan",
            "alamat": "Jakarta",
            "jenisKelamin": "Laki - Laki",
            "username": "rahmat",
            "password": "$2b$10$VDaRosLOQ49qL.PN1aFlMu6.e7QuC7AO7A38e3ooxSXFFBGjVn2fm",
            "createdAt": "2023-11-24T05:26:18.960Z",
            "updatedAt": "2023-11-24T05:26:18.960Z"
        },
        "message": "Successfully! Record has been fetched"
    }
```
3. Auth register user
- URL `http://localhost:5000/api/v1/auth/register`
- Method `POST`
- Require Token : `NO`
- Request Body
```sh
    {
        "fullName": "Rahmat Kurniawan",
        "alamat": "Jakarta",
        "jenisKelamin": "Laki - Laki",
        "username": "rahmat",
        "password": "rahmat123"
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": {
            "fullName": "Rahmat Kurniawan",
            "alamat": "Jakarta",
            "jenisKelamin": "Laki - Laki",
            "username": "rahmat",
            "password": "$2b$10$VDaRosLOQ49qL.PN1aFlMu6.e7QuC7AO7A38e3ooxSXFFBGjVn2fm",
            "id": 1,
            "createdAt": "2023-11-24T05:26:18.960Z",
            "updatedAt": "2023-11-24T05:26:18.960Z"
        },
        "message": "Successfully! Record has been added"
    }
```
4. Auth login user
- URL `http://localhost:5000/api/v1/auth/login`
- Method `POST`
- Require Token : `NO`
- Request Body
```sh
    {
        "username": "rahmat",
        "password": "rahmat123"
    }
```
- Response Body
```sh
    {
        "status": "success",
        "session": {
            "id": 1,
            "fullName": "Rahmat Kurniawan"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmoiOnsiaWQiOjEsImZ1bGxOYW1lIjoiUmFobWF0IEt1cm5pYXdhbiJ9LCJpYXQiOjE3MDA4MDQxOTEsImV4cCI6MTcwMDgwNzc5MX0.TDN64QDTPvtKSP4XjcgR1iiNzWg9FW3XI6fw76CxI-4",
        "message": "Successfully! Token has been assigned & Login session has been created"
    }
```
5. Update a user record
- URL `http://localhost:5000/api/v1/updateUser/1`
- Method `PUT`
- Require Token : `NO`
- Request Body
```sh
    {
        "fullName": "Bayu Damar",
        "alamat": "Yogyakarta"
        "jenisKelamin": "Laki - Laki",
        "username": "bayu",
        "password": "bayu123"
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "fullName": "Bayu Damar",
                "alamat": "Yogyakarta",
                "jenisKelamin": "Laki - Laki",
                "username": "bayu",
                "password": "$2b$10$VDaRosLOQ49qL.PN1aFlMu6.e7QuC7AO7A38e3ooxSXFFBGjVn2fm",
                "createdAt": "2023-11-23T09:30:51.980Z",
                "updatedAt": "2023-11-23T09:30:51.980Z",
            }
        ],
        "message": "Successfully! Record has been updated"
    }
```
6. Delete a user record
- URL `http://localhost:5000/api/v1/deleteUser/1`
- Method `DELETE`
- Require Token : `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": {
            "raw": [],
            "affected": 1
        },
        "message": "Successfully! Record has been deleted"
    }
```
