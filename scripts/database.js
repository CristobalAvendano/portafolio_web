const { createConnection } = require('mysql');


const conn = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bdoficial"
})


conn.query("select * from cesfam", (err, result) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})