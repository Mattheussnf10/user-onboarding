const { UserCreateController } = require("../user/user-create-controller");

const Routes = (app)=> {

    app.post("/user", UserCreateController);
    
    return app;
}

module.exports = { Routes };