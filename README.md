# simple-api-rest-with-firebase

Simple api rest with functions firebase and requests http crud get, post, put and delete.

**Data Base Config**

Setting up your database service credentials

```javascript
admin.initializeApp({
       credential: admin.credential.cert(path.resolve(__dirname, "path")),
});
```

**Users Routers:**

```javascript
router.get("/", controllerUsers.findAll);

router.get("/:id", controllerUsers.findById);

router.post("/", controllerUsers.insert);

router.put("/:id", controllerUsers.update);

router.delete("/:id", controllerUsers.delete);
```

**Install:**

```console
$ npm install
```

**Run:**

```console
$ npm start
```

```console
$ firebase serve
```

_Check `lib` folder for more additional functionalities!_
