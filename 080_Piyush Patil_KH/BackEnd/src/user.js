const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysq/lib/connection").prototype);
const dbinfo={
    host : "localhost",
    user : "root",
    password : "PiyusH@1996",
    database : "wpt_exam",
};
const record = {
    sender : "Dhiraj"
    reciever : "Suraj"
    msg : "Hello Brother!"

}
const addMSG = async() => {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    const sql = "Insert Into massage (sender, reciever,msg) values (?,?,?)"
    await Connection.queryAsync(sql,[record.sender,record.reciever,record.msg]);
    await Connection.endAsync();
    console.log("Massage Record Added...!");

};
const readMSG = async() => {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    const sql = "Select * From massage";
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log("List of Record...! ");
    console.log(list);
    return list;
}

addMSG()
readMSG()

module.exports = {addMSG, readMSG};
