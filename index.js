var SequalizeAuto = require('sequelize-auto')

// import models into sequelize instance
var auto = new SequalizeAuto('bd-name','username', 'password', {
    host: '0.0.0.0',
    dialect: 'mssql',
    directory: './models2',
    port: '00000',
    caseModel: 'l', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    caseProp: 'c',
    singularize: true, // convert plural table names to singular model names
    additional: {
        timestamps: false
        // ...options added to each model
    },
    tables: ['name_table', 'name_table']
})

auto.run(function(err){
    if(err) throw err;

    console.log(auto.tables);
    console.log(auto.foreignKeys);
})