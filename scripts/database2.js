/*
class TestConnection {
    constructor(host, user, password, database) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }
}

exports.imprimir = () => {
    console.log('funciona')
}
/*
    fn_consolebd() {
        console.log('funciona')
    }
    fn_select() {
        conn.query("select * from cesfam", (err, result) => {
            if (err) {
                return console.log(err);
            }
            return console.log(result);
        })
    }
}*/


const algo = require("./database.js");

algo.select('cesfam')





