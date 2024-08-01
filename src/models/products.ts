import { DataTypes } from "sequelize"
import sequelize from "../db/conn"



const product = sequelize.define('productos',{
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    stock:{
        type: DataTypes.NUMBER
    },
},{
    updatedAt:false,
    createdAt: false
})


export default product;