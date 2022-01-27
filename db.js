const Pool=require("pg").pool

const pool= new Pool({
    user:"postgres",
    password:"database",
    database:"database2",
    port:5432

})
