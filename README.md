# Node.js Sample Codes

```
$ node --version
v12.16.1

$ npm --version
6.14.4

$ mongo --version
MongoDB shell version v4.2.5
```

---

### sample_server_ejs/

```
$ npm install ejs
```

#### usage

`$ node app.js`

---

### sample_mongo/

- use MongoClient

```
$ npm install mongodb
```

#### usage

`$ node app.js`

---

### expressjs/

- `sample/` **(express-generator)**

  ```
  $ npm install
  $ npm install express
  $ npm install express-generator -g
  ```

  - Express version : "4.17.1"

  #### usage

  ```
  $ express sample
  $ cd sample
  $ npm install
  $ DEBUG=sample:\* npm start
  ```

  - [http://localhost:3000](http://localhost:3000)

- `myapp/` **(express-generator)**

```
$ npm install morgan nodemon ejs body-parser
```

npm audit fix

npx nodemon app

---

### blog/

```
$ npm install express ejs nodemon morgan body-parser method-override

// CSRF
$ npm install cookie-parser express-session csurf
```

#### usage

```
$ npx nodemon app
```
