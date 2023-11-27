# Micro Feature Pemilu Dumbways Project Build with TypeORM

## Setup
Steps to run this project:
1. Run `npm i` command
2. Create cloudinary account first if you haven't, to get your own cloudinary credentials `(Cloud Name, API Key, API Secret)`, you can go visit this site `https://cloudinary.com/`
3. Setup all credentials and configurations inside your own `.env` file, this repository did not push any `.env` file
4. Setup database settings inside `src/data-source.ts` file
5. Setup cloudinary config inside `src/libs/cloudinary.ts` file
6. Run `npm run migration:generate` command
7. After migrations are generated, go to `src/data-source.ts` and import your own migrations generated file then add it into your migrations property option
8. Run `npm run migration:run` command
9. Run `npm start` command

## User Route
1. Get all user
- URL `http://localhost:5000/api/v1/users`
- Method `GET`
- Require Token `NO`
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
- URL `http://localhost:5000/api/v1/user`
- Method `GET`
- Require Token `YES`
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
        "role": "admin" role => admin || user
    }
```
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
            "role": "admin",
            "createdAt": "2023-11-24T05:26:18.960Z",
            "updatedAt": "2023-11-24T05:26:18.960Z"
        },
        "message": "Successfully! Record has been added"
    }
```
4. Auth login user
- URL `http://localhost:5000/api/v1/auth/login`
- Method `POST`
- Require Token `NO`
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
- URL `http://localhost:5000/api/v1/updateUser`
- Method `PUT`
- Require Token `YES`
- Request Body
```sh
    {
        "fullName": "Bayu Damar",
        "alamat": "Yogyakarta"
        "jenisKelamin": "Laki - Laki",
        "username": "bayu",
        "password": "bayu123",
        "role": "user" role => admin || user
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
                "role": "user",
                "createdAt": "2023-11-23T09:30:51.980Z",
                "updatedAt": "2023-11-23T09:30:51.980Z",
            }
        ],
        "message": "Successfully! Record has been updated"
    }
```
6. Delete a user record
- URL `http://localhost:5000/api/v1/deleteUser`
- Method `DELETE`
- Require Token `YES`
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

## Voter Route
1. Get all voter
- URL `http://localhost:5000/api/v1/voter`
- Method `GET`
- Require Token `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "createdAt": "2023-11-23T09:30:51.980Z",
                "updatedAt": "2023-11-26T04:16:05.181Z",
                "user": {
                    "id": 1,
                    "fullName": "Rahmat Kurniawan",
                    "alamat": "Jakarta",
                    "jenisKelamin": "Laki - Laki",
                    "username": "rahmat",
                    "password": "$2b$10$o4HXTHSwpE0kJGOsQIQRt.1UeGI7IBW.Nrq7oJeAxXe4b9cjx2Z8O",
                    "role": "user",
                    "createdAt": "2023-11-24T05:26:18.960Z",
                    "updatedAt": "2023-11-24T05:26:18.960Z"
                },
                "paslon": {
                    "id": 3,
                    "nama": "Anies Baswedan",
                    "noUrut": 1,
                    "visiMisi": "Perubahan",
                    "createdAt": "2023-11-16T06:06:29.915Z",
                    "updatedAt": "2023-11-26T08:49:05.230Z"
                }
            }
        ],
        "message": "Successfully! All record has been fetched"
    }
```
2. Get a single voter
- URL `http://localhost:5000/api/v1/voter/1`
- Method `GET`
- Require Token `YES`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "createdAt": "2023-11-23T09:30:51.980Z",
                "updatedAt": "2023-11-26T04:16:05.181Z",
                "user": {
                    "id": 1,
                    "fullName": "Rahmat Kurniawan",
                    "alamat": "Jakarta",
                    "jenisKelamin": "Laki - Laki",
                    "username": "rahmat",
                    "password": "$2b$10$o4HXTHSwpE0kJGOsQIQRt.1UeGI7IBW.Nrq7oJeAxXe4b9cjx2Z8O",
                    "role": "user",
                    "createdAt": "2023-11-24T05:26:18.960Z",
                    "updatedAt": "2023-11-24T05:26:18.960Z"
                },
                "paslon": {
                    "id": 3,
                    "nama": "Anies Baswedan",
                    "noUrut": 1,
                    "visiMisi": "Perubahan",
                    "createdAt": "2023-11-16T06:06:29.915Z",
                    "updatedAt": "2023-11-26T08:49:05.230Z"
                }
            }
        ],
        "message": "Successfully! Record has been fetched"
    }
```
3. Get list voter
- URL `http://localhost:5000/api/v1/listVoter`
- Method `GET`
- Require Token : `YES`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "user": {
                    "fullName": "Rahmat Kurniawan",
                    "alamat": "Jakarta",
                    "jenisKelamin": "Laki - Laki"
                },
                "paslon": {
                    "nama": "Anies Baswedan"
                }
            }
        ],
        "message": "Successfully! Record has been fetched"
    }
```
4. Get dashboard
- URL `http://localhost:5000/api/v1/dashboard`
- Method `GET`
- Require Token `YES`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "paslon": "Anies Baswedan",
                "akumulasi": "50 %",
                "jumlahVote": "4 Voters"
            },
            {
                "paslon": "Prabowo Subianto",
                "akumulasi": "25 %",
                "jumlahVote": "4 Voters"
            },
            {
                "paslon": "Ganjar Pranowo",
                "akumulasi": "25 %",
                "jumlahVote": "4 Voters"
            }
        ],
        "message": "Successfully! Record has been fetched"
    }
```
5. Add voter record
- URL `http://localhost:5000/api/v1/addVoter`
- Method `POST`
- Require Token `YES`
- Request Body
```sh
    {
        "paslonId": 11
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": {
            "id": 5,
            "user": 3,
            "paslon": 11,
            "createdAt": "2023-11-26T16:43:40.445Z",
            "updatedAt": "2023-11-26T16:43:40.445Z"
        },
        "message": "Successfully! Record has been added"
    }
```
6. Update a voter record
- URL `http://localhost:5000/api/v1/updateVoter/1`
- Method `PUT`
- Require Token `YES`
- Request Body
```sh
    {
        "paslonId": 9
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 3,
                "createdAt": "2023-11-26T16:26:25.584Z",
                "updatedAt": "2023-11-26T16:30:24.325Z",
                "user": {
                    "id": 4,
                    "fullName": "Putri Septiani",
                    "alamat": "Magelang",
                    "jenisKelamin": "Perempuan",
                    "username": "putri",
                    "password": "$2b$10$eNyxYn4Z//1jj/aycXppJuI.J0ImgJzVgkdJzn4GZ212JLfLEMU5W",
                    "role": "user",
                    "createdAt": "2023-11-26T15:49:23.796Z",
                    "updatedAt": "2023-11-26T15:49:23.796Z"
                },
                "paslon": {
                    "id": 9,
                    "nama": "Prabowo Subianto",
                    "noUrut": 2,
                    "visiMisi": "Indonesia Maju",
                    "createdAt": "2023-11-26T08:53:25.055Z",
                    "updatedAt": "2023-11-26T08:53:25.055Z"
                }
            }
        ],
        "message": "Successfully! Record has been updated"
    }
```
7. Delete a voter record
- URL `http://localhost:5000/api/v1/deleteVoter`
- Method `DELETE`
- Require Token `YES`
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

## Paslon Route
1. Get all paslon
- URL `http://localhost:5000/api/v1/paslon`
- Method `GET`
- Require Token `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "nama": "Anies Baswedan",
                "noUrut": 1,
                "visiMisi": "Perubahan",
                "createdAt": "2023-11-16T06:06:29.915Z",
                "updatedAt": "2023-11-26T08:49:05.230Z",
                "partai": {
                    "id": 1,
                    "nama": "NasDem",
                    "ketuaUmum": "Surya Paloh",
                    "visiMisi": "Membangun Negeri Ditengah Samudera",
                    "alamat": "Atlantik",
                    "createdAt": "2023-11-16T08:56:44.189Z",
                    "updatedAt": "2023-11-26T06:02:35.593Z"
                }
            }
        ],
        "message": "Successfully! All record has been fetched"
    }
```
2. Get a single paslon
- URL `http://localhost:5000/api/v1/paslon/1`
- Method `GET`
- Require Token `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "nama": "Anies Baswedan",
                "noUrut": 1,
                "visiMisi": "Perubahan",
                "createdAt": "2023-11-16T06:06:29.915Z",
                "updatedAt": "2023-11-26T08:49:05.230Z",
                "partai": {
                    "id": 1,
                    "nama": "NasDem",
                    "ketuaUmum": "Surya Paloh",
                    "visiMisi": "Membangun Negeri Ditengah Samudera",
                    "alamat": "Atlantik",
                    "createdAt": "2023-11-16T08:56:44.189Z",
                    "updatedAt": "2023-11-26T06:02:35.593Z"
                }
            }
        ],
        "message": "Successfully! Record has been fetched"
    }
```
3. Get list paslon
- URL `http://localhost:5000/api/v1/listPaslon`
- Method `GET`
- Require Token : `YES`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "nama": "Anies Baswedan",
                "noUrut": 1,
                "visiMisi": "Perubahan",
                "partai": {
                    "nama": "NasDem"
                }
            },
        ],
        "message": "Successfully! Record has been fetched"
    }
```
4. Get info paslon
- URL `http://localhost:5000/api/v1/infoPaslon/Pranowo`
- Method `GET`
- Require Token `YES`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "nama": "Ganjar Pranowo",
                "noUrut": 3,
                "visiMisi": "Indonesia Unggul",
                "partai": {
                    "nama": "PDIP"
                }
            },
            {
                "nama": "Ganjar Pranowo",
                "noUrut": 3,
                "visiMisi": "Indonesia Unggul",
                "partai": {
                    "nama": "PPP"
                }
            }
        ],
        "message": "Successfully! Record has been fetched"
    }
```
5. Add paslon record
- URL `http://localhost:5000/api/v1/addPaslon`
- Method `POST`
- Require Token `YES`
- Require Role `ADMIN`
- Request Body
```sh
    {
        "nama": "Ganjar Pranowo",
        "noUrut": 3,
        "visiMisi": "Indonesia Unggul",
        "partaiId": 10
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": {
            "id": 12,
            "nama": "Ganjar Pranowo",
            "noUrut": 3,
            "visiMisi": "Indonesia Unggul",
            "partai": 10,
            "createdAt": "2023-11-26T08:53:58.108Z",
            "updatedAt": "2023-11-26T08:53:58.108Z"
        },
        "message": "Successfully! Record has been added"
    }
```
6. Update a paslon record
- URL `http://localhost:5000/api/v1/updatePaslon/1`
- Method `PUT`
- Require Token `YES`
- Require Role `ADMIN`
- Request Body
```sh
    {
        "nama": "Anies Baswedan",
        "noUrut": 1,
        "visiMisi": "Perubahan",
        "partaiId": 3
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "nama": "Anies Baswedan",
                "noUrut": 1,
                "visiMisi": "Perubahan",
                "createdAt": "2023-11-16T06:06:29.915Z",
                "updatedAt": "2023-11-26T08:49:05.230Z",
                "partai": {
                    "id": 3,
                    "nama": "PKB",
                    "ketuaUmum": "Surya Paloh",
                    "visiMisi": "Membangun Negeri Ditengah Samudera",
                    "alamat": "Atlantik",
                    "createdAt": "2023-11-16T08:56:44.189Z",
                    "updatedAt": "2023-11-26T06:02:35.593Z"
                }
            }
        ],
        "message": "Successfully! Record has been updated"
    }
```
7. Delete a paslon record
- URL `http://localhost:5000/api/v1/deletePaslon/1`
- Method `DELETE`
- Require Token `YES`
- Require Role `ADMIN`
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

## Partai Route
1. Get all partai
- URL `http://localhost:5000/api/v1/partai`
- Method `GET`
- Require Token `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "nama": "NasDem",
                "ketuaUmum": "Surya Paloh",
                "visiMisi": "Membangun Negeri Ditengah Samudera",
                "alamat": "Atlantik",
                "createdAt": "2023-11-16T08:56:44.189Z",
                "updatedAt": "2023-11-26T06:02:35.593Z"
            },
        ],
        "message": "Successfully! All record has been fetched"
    }
```
2. Get a single partai
- URL `http://localhost:5000/api/v1/partai/1`
- Method `GET`
- Require Token `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "nama": "NasDem",
                "ketuaUmum": "Surya Paloh",
                "visiMisi": "Membangun Negeri Ditengah Samudera",
                "alamat": "Atlantik",
                "createdAt": "2023-11-16T08:56:44.189Z",
                "updatedAt": "2023-11-26T06:02:35.593Z"
            },
        ],
        "message": "Successfully! Record has been fetched"
    }
```
3. Add partai record
- URL `http://localhost:5000/api/v1/addPartai`
- Method `POST`
- Require Token `YES`
- Require Role `ADMIN`
- Request Body
```sh
    {
        "nama": "PPP",
        "ketuaUmum": "Surya Paloh",
        "visiMisi": "Membangun Negeri Ditengah Samudera",
        "alamat": "Jakarta"
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": {
            "nama": "PPP",
            "ketuaUmum": "Surya Paloh",
            "visiMisi": "Membangun Negeri Ditengah Samudera",
            "alamat": "Jakarta",
            "id": 10,
            "createdAt": "2023-11-26T06:06:50.717Z",
            "updatedAt": "2023-11-26T06:06:50.717Z"
        },
        "message": "Successfully! Record has been added"
    }
```
4. Update a partai record
- URL `http://localhost:5000/api/v1/updatePartai/1`
- Method `PUT`
- Require Token `YES`
- Require Role `ADMIN`
- Request Body
```sh
    {
        "nama": "PKS",
        "ketuaUmum": "Surya Paloh",
        "visiMisi": "Membangun Negeri Ditengah Samudera",
        "alamat": "Atlantik"
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 4,
                "nama": "PKS",
                "ketuaUmum": "Surya Paloh",
                "visiMisi": "Membangun Negeri Ditengah Samudera",
                "alamat": "Atlantik",
                "createdAt": "2023-11-23T06:54:41.212Z",
                "updatedAt": "2023-11-26T06:03:23.869Z"
            }
        ],
        "message": "Successfully! Record has been updated"
    }
```
5. Delete a partai record
- URL `http://localhost:5000/api/v1/deletePartai/1`
- Method `DELETE`
- Require Token `YES`
- Require Role `ADMIN`
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

## Article Route
1. Get all article
- URL `http://localhost:5000/api/v1/article`
- Method `GET`
- Require Token `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "title": "loremmm",
                "image": "https://res.cloudinary.com/deheo4nfk/image/upload/v1701000433/mvpml0oiewk7n9tic5qr.png",
                "description": "tessssssss",
                "createdAt": "2023-11-26T12:07:14.684Z",
                "updatedAt": "2023-11-26T12:16:02.098Z"
            }
        ],
        "message": "Successfully! All record has been fetched"
    }
```
2. Get a single article
- URL `http://localhost:5000/api/v1/article/1`
- Method `GET`
- Require Token `NO`
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "title": "loremmm",
                "image": "https://res.cloudinary.com/deheo4nfk/image/upload/v1701000433/mvpml0oiewk7n9tic5qr.png",
                "description": "tessssssss",
                "createdAt": "2023-11-26T12:07:14.684Z",
                "updatedAt": "2023-11-26T12:16:02.098Z"
            }
        ],
        "message": "Successfully! Record has been fetched"
    }
```
3. Add article record
- URL `http://localhost:5000/api/v1/addArticle`
- Method `POST`
- Require Token `YES`
- Require Role `ADMIN`
- Require File `req.files`
- Require Path `tempPathFile`
- Request Body
```sh
    {
        "title": "loremmm",
        "image": "image_file_name",
        "description": "tessssssss"
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "title": "loremmm",
                "image": "https://res.cloudinary.com/deheo4nfk/image/upload/v1701000433/mvpml0oiewk7n9tic5qr.png",
                "description": "tessssssss",
                "createdAt": "2023-11-26T12:07:14.684Z",
                "updatedAt": "2023-11-26T12:16:02.098Z"
            }
        ],
        "message": "Successfully! Record has been added"
    }
```
4. Update an article record
- URL `http://localhost:5000/api/v1/updateArticle/1`
- Method `PUT`
- Require Token `YES`
- Require Role `ADMIN`
- Request Body
```sh
    {
        "title": "loremmm",
        "description": "tessssssss"
    }
```
- Response Body
```sh
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "title": "loremmm",
                "image": "https://res.cloudinary.com/deheo4nfk/image/upload/v1701000433/mvpml0oiewk7n9tic5qr.png",
                "description": "tessssssss",
                "createdAt": "2023-11-26T12:07:14.684Z",
                "updatedAt": "2023-11-26T12:16:02.098Z"
            }
        ],
        "message": "Successfully! Record has been updated"
    }
```
5. Delete an article record
- URL `http://localhost:5000/api/v1/deleteArticle/1`
- Method `DELETE`
- Require Token `YES`
- Require Role `ADMIN`
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