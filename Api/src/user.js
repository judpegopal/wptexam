const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "exam1",
};

async function addRecord(obj) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsnyc();
  console.log("connection successful");
  let sql = "Insert into user1(username,password) values(?,?)";
  await connection.queryAsnyc(sql, [obj.username, obj.password]);
  await connection.endAsnyc();
  console.log("Record added");
}
async function selectAllRecords() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection successful");
  let sql = "select * from user1";
  const list = await connection.queryAsnyc(sql, []);
  await connection.endAsync();
  console.log("The table contends are :", list);
  return list;
}
module.exports = { addRecord, selectAllRecords };
