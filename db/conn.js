const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_pro', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectou')

}catch(error) {
    console.log(`Não conectou: ${error}`)
}

module.exports = sequelize