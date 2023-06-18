# Banking API 🏦

In this task, you will connect your Banking API with a database and perform the basic `CRUD` operations.

## Instructions

- If you need a starting point, fork and clone [this repository](https://github.com/JoinCODED/Task-Express-M2-noSql-Banks) to your `Development` folder.

## Steps

let's start with setting up our database and ORM following those [steps](https://github.com/JoinCODED/WS-Express-M2-Intro-DBs-and-ORMs-noSQL/blob/master/02_ODMs/03_setup_mongoose.md).

### Setup

1. Follow the instruction in the link above to setup a connection to you `mongodb`.
2. Install [dotenv](https://www.npmjs.com/package/dotenv) package/library.
3. Create a .env file and add both `PORT` and `MONGO_DB_URL` variables and assign them with the appropriate values.
4. Include the `dotenv` in `app.js`, create a variable called `PORT` and assign it to the value in the `.env` file. Now use the `PORT` when creating the server.
5. Include the `dotenv` in `database.js`, access the value in the `.env` file in the `mongoose.connect` callback function.
6. Include the `.env` file in the `.gitignore`.

### Create your Model

1. In your models folder, create a file called `Account.js`, make sure it starts with a capital letter.
2. Start with importing `model` and `Schema` from `mongoose`.
3. Check your fields in your dummy database, and create your fields in the init method to mirror your dummy database's fields. Don't forget to give every field a type.
4. Don't forget to export your model.

### Accounts List

1. Make your `Account` List route `asynchronous` and add a `try-catch` block.
2. Call the mongoose method `.find()` and save the returned value in a variable called `accounts`.
3. Customize the attributes so that `createdAt` and `updatedAt` are excluded.
4. Pass `accounts` as a `JSON` response.
5. In `catch`, set the response status code to `500` and return the error message as a `JSON` response.
6. Test your route in `Postman`.

### Account Create

1. Make your `Account` Create route function `asynchronous` and add a `try-catch block`.
2. Pass the request's body to the mongoose method `.create()` . Keep in mind that this method is asynchronous. Hint hint: `await`.
3. Save the returned value from `.create()` in a variable called `newAccount`.
4. Pass `newAccount` as a `JSON` response. Don't forget to set the status code to `201`.
5. In `catch`, set the response status code to `500` and return the error message as a `JSON` response.
6. To test your new method, create a new account in `Postman`. Then check if it was added in your `compass`.

### Update Account Route

1. Make your `Account` Update route function `asynchronous` and add a `try-catch block`.
2. Pass the `accountId` from your route parameter to `.findById()` method and save it in a variable called `foundAccount`.
3. If `foundAccount` exists, call the `.findByIdAndUpdate()` method on `foundAccount` and pass it the body of the request.
4. Don't forget to set the status code to `204` and end the response.
5. If it doesn't exist set the response status code to `404` and return an error message stating that this account doesn't exist as a `JSON` response.
6. In the `catch` block, set the response status code to `500` and return the error message as a `JSON` response.

### Account Delete

1. Make your `Account` Delete route function `asynchronous` and add a `try-catch` block.
2. Pass the `accountId` from your route parameter to `.findById()` method and save it in a variable called `foundAccount`.
3. If `foundAccount` exists, call the `.deleteOne()` method on `foundAccount`.
4. Don't forget to set the status code to `204` and end the response.
5. If it doesn't exist set the response status code to `404` and return an error message stating that this account doesn't exist as a `JSON` response.
6. In the `catch` block, set the response status code to `500` and return the error message as a `JSON` response.
7. Test your route in Postman.
8. Send a request to an account that doesn't exist to make sure the error is handled correctly.

### 🍋 Model Validation

Apply some validation rules on your account model.

The `username` should be `required` and can't be `null`.

Give `funds` a default value of `0`.

## BONUS

### 🌶 Vip Accounts

Create a route that accepts an integer as a query and responds with the accounts that has more balance than this amount.
