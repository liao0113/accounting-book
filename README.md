# Accounting Book

A project built with [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/) for you to built your personal expenses.
Please register an account via email address first, or you may quick login with facebook, cause all the expenses would be keep in your account.

🌟 This project is deployed on **[Render](https://accounting-book.onrender.com)** .
🌟 Please use the **Dummy Data** to login, or register your own account.

## Dummy user data

#### After inserting the seeder, you may use the following dummy data to experience this web application.

| Email             | Password |
| ----------------- | -------- |
| user1@example.com | 12345678 |
| user2@example.com | 12345678 |

## Features

- **REGISTER:** sign up an account with name,email,password
- **LOGIN:** sing in to review your own expenses
- **LOGIN WITH 3rd-party account:** quick sign in with Facebook account
- **LOGOUT:** sign out the account by clicking the logout button
- **CREATE:** record your expense(with otem name,date,category,amount) at the create page
- **READ:** review all expenses at home page
- **UPDATE:** click the edit button to modify expense's data
- **DELETE:** click the delete button to delete the data
- **FILTER:** filter the expense by category

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) - development environment
- [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - web application framework
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - template engine
- [MongoDB](https://www.mongodb.com/) - document-oriented database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool(OBM)
- [body-parser](https://www.npmjs.com/package/body-parser) - middleware
- [method-override](https://www.npmjs.com/package/method-override) - middleware
- [express-session](https://www.npmjs.com/package/express-session) - middleware
- [passport](http://www.passportjs.org/) - authentication middleware for Node.js
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) - middleware
- [Facebook for Developer](https://developers.facebook.com/) - get APP_ID & APP_SECRET for passport-facebook
