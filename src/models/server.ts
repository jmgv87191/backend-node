import express, { Application, Request, Response } from 'express';
import router from '../routes/products';
import sequelize from '../db/conn';
import cors from 'cors';


class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001'
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(` aplicacion corriendo en el puerto ${this.port}`)
        } )
    }

    routes(){
        this.app.get('/',( req:Request, res:Response )=>{
            res.json({
                msg:' aplicacion corriendo shido'
            })
        })

        this.app.use('/api/productos',router)

    }

    midlewares(){
        this.app.use( express.json() )
        this.app.use(cors())
    }

    async dbConnection(){

        try {
            await sequelize.authenticate();
            console.log('base de datos conectada')
            
        } catch (error) {
            console.log(error);
            console.log("error en la conexion")
        }

    }

}

export default Server;