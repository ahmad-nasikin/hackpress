# hackpress


## Build Setup
```
### running server-side
npm install
npm run dev

### running client-side
npm install
npm run dev
```
# REST API

## REST API Index

| Method | URL      | Description                    |
|--------|----------|--------------------------------|
| POST   | /login   | log in                         |
| POST   | /signup  | Create user                    |

## REST API User

| Method | URL             | Description                 |
|--------|-----------------|-----------------------------|
| GET    | /users          | Get all users               |
| POST   | /users          | Create user                 |
| PUT    | /users/:id      | Update specified user       |
| DELETE | /users/:id      | Delete specified user       |


## REST API Artikel

| Method | URL             | Description                 |
|--------|-----------------|-----------------------------|
| GET    | /article        | Get all article               |
| POST   | /article        | Create article                 |
| PUT    | /article/:id    | Update specified article       |
| DELETE | /article/:id    | Delete specified article       |
