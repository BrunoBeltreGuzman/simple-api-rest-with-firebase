const modelUsers = require("../post/modelPost");
const validator = require("validator");

class ControllerUsers {
       constructor() {}

       async findAll(request, response) {
              try {
                     const data = await modelUsers.findAll();
                     return response.status(200).json(data);
              } catch (error) {
                     return response.status(500).json({
                            message: "Error Internal in the server",
                            error,
                     });
              }
       }

       async findById(request, response) {
              try {
                     const id = request.params.id;
                     if (validator.contains(id)) {
                            try {
                                   const data = await modelUsers.findById(id);
                                   return response.status(200).json(data);
                            } catch (error) {
                                   return response.status(500).json({
                                          message:
                                                 "Error Internal in the server",
                                          error,
                                   });
                            }
                     } else {
                            return response.status(400).json({
                                   message:
                                          "Inputs incomplete, All input required",
                                   inputs: "id",
                                   type: "number",
                                   status: 400,
                            });
                     }
              } catch (error) {
                     return response.status(500).json({
                            message: "Error Internal in the server",
                            error,
                     });
              }
       }

       async insert(request, response) {
              try {
                     const name = request.body.name;
                     const email = request.body.email;
                     const password = request.body.password;
                     if (
                            validator.contains(name) &&
                            validator.isEmail(email) &&
                            validator.contains(password)
                     ) {
                            try {
                                   const data = await modelUsers.insert(
                                          name,
                                          email,
                                          password
                                   );
                                   return response.status(200).json(data);
                            } catch (error) {
                                   return response.status(500).json({
                                          message:
                                                 "Error Internal in the server",
                                          error,
                                   });
                            }
                     } else {
                            return response.status(400).json({
                                   message:
                                          "Inputs incomplete, All input required",
                                   inputs: "name, email, password",
                                   status: 400,
                            });
                     }
              } catch (error) {
                     return response.status(500).json({
                            message: "Error Internal in the server",
                            error,
                     });
              }
       }

       async update(request, response) {
              try {
                     const id = request.params.id;
                     const name = request.body.name;
                     const email = request.body.email;
                     const password = request.body.password;

                     if (
                            validator.contains(name) &&
                            validator.isEmail(email) &&
                            validator.contains(password)
                     ) {
                            try {
                                   const data = await modelUsers.update(
                                          id,
                                          name,
                                          email,
                                          password
                                   );
                                   return response.status(200).json(data);
                            } catch (error) {
                                   return response.status(500).json({
                                          message:
                                                 "Error Internal in the server",
                                          error,
                                   });
                            }
                     } else {
                            return response.status(400).json({
                                   message:
                                          "Inputs incomplete, All input required",
                                   inputs: "id, name, email, password",
                                   status: 400,
                            });
                     }
              } catch (error) {
                     return response.status(500).json({
                            message: "Error Internal in the server",
                            error,
                     });
              }
       }

       async delete(request, response) {
              try {
                     const id = request.params.id;
                     if (validator.contains(id)) {
                            try {
                                   const data = await modelUsers.delete(id);
                                   return response.status(200).json(data);
                            } catch (error) {
                                   return response.status(500).json({
                                          message:
                                                 "Error Internal in the server",
                                          error,
                                   });
                            }
                     } else {
                            return response.status(400).json({
                                   message:
                                          "Inputs incomplete, All input required",
                                   inputs: "id",
                                   status: 400,
                            });
                     }
              } catch (error) {
                     return response.status(500).json({
                            message: "Error Internal in the server",
                            error,
                     });
              }
       }
}

module.exports = new ControllerUsers();
