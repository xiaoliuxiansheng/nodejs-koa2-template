/**
 * @name: company
 * @author: LIULIU
 * @date: 2020-08-03 17:18
 * @description：company
 * @update: 2020-08-03 17:18
 */
module.exports = (sequelize,DataTypes) => {
    let website = sequelize.define('website',{
        name: {
            type: DataTypes.STRING
        },
        url: DataTypes.STRING,
        alexa: DataTypes.INTEGER,
        country: DataTypes.STRING
    }, {
        timestamps: false
    })

    website.associate = () =>{
    }

    return website;
}
