const database = require("../../lib/database/database");

class ModelUsers {
       constructor() {}

       async findAll() {
              const query = database.collection("users");
              const data = await query.get();
              const response = data.docs.map(function (user, index) {
                     return {
                            index: index,
                            id: user.id,
                            name: user.data().name,
                            email: user.data().email,
                            password: user.data().password,
                     };
              });
              return response;
       }

       async findById(id) {
              const query = database.collection("users").doc(id);
              const user = await query.get();
              const data = user.data();
              return data;
       }

       async insert(name, email, password) {
              const data = {
                     name: name,
                     email: email,
                     password: password,
              };
              const response = await database
                     .collection("users")
                     .doc()
                     .create(data);
              return response;
       }

       async update(id, name, email, password) {
              const data = {
                     name: name,
                     email: email,
                     password: password,
              };
              const query = database.collection("users").doc(id);
              const response = await query.update(data);
              return response;
       }

       async delete(id) {
              const query = database.collection("users").doc(id);
              const response = await query.delete();
              return response;
       }
}

module.exports = new ModelUsers();
