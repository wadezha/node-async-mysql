# node-async-mysql

//Use this test.js need node version is higher than 7.0.0 .
//And need the node arg "--harmony".

```
const config = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "database": "testDB",
    "charset": "UTF8_GENERAL_CI",
    "timezone": "local",
    "connectTimeout": 10000,
    "connectionLimit": 10
};
const Pool = require('./lib/Pool').Pool;
const Connection = require('./lib/Connection').Connection;
var pool = new Pool(config);
var conn = new Connection(config);
```

```
async function poolTest() {

    // pool.query()
    let result = await pool.query('SELECT * FROM tbltest WHERE name=?', ['wr']);
    console.log(result);

    // pool.getConn();
    let poolConn = await pool.getConn();
    console.log(poolConn.isPoolConnection);
    result = await poolConn.query('SELECT * FROM tbltest WHERE name=?', ['zs']);
    console.log(result);

    await pool.end();
    console.log(pool.isAlive);
}
```
```
async function connTest() {
    let rst = await conn.query('SELECT * FROM tbltest WHERE name=?', ['ls']);
    console.log(rst);
    await conn.beginTran();
    let count = (await conn.query('SELECT COUNT(*) FROM tbltest WHERE name=?', ['??']))[0]['COUNT(*)'];
    console.log(count);
    await conn.query('INSERT INTO tbltest(name) VALUES(?)', ['zhangsan']);
    if (count > 0) {
        await conn.commit();
        console.log('commit');
    }
    else {
        await conn.rollback();
        console.log('rollback');
    }

    rst = await conn.query('SELECT * FROM tbltest');
    console.log(rst);
}
```
```
poolTest();
connTest();
```
