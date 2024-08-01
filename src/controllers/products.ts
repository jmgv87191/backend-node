import { Request,Response  } from "express"
import product from '../models/products';


export const getProducts =async (req:Request,res:Response)=>{

    const products = await product.findAll();

    res.json( products )
}

export const getProduct = async(req:Request,res:Response)=>{

    const {id} = req.params
    const products = await product.findByPk(id)

    if (products) {
        res.json( products )
    } else {
        res.json({
            msg:`no existe un producto con el id ${id}`
        })
    }

}

export const deleteProduct = async(req:Request,res:Response)=>{

    const {id} = req.params
    const products = await product.findByPk(id)

    if (products) {
        products.destroy();
        res.json({
            msg:'producto eliminado',
            products
        })
    }else{
        res.json({
            msg:`no existe un producto con el id ${id}`
        })
    }

}

export const createProduct = async(req:Request,res:Response)=>{

    const {body} = req

    try {
        const products = product.create(body);
        res.json({
            msg:'producto agregaro',
            body
        })
    } catch (error) {
        res.json({
            msg:'ups algo paso'
        })
    }


}

export const updateProduct = async(req:Request,res:Response)=>{

    const {body} = req
    const {id} = req.params

    try {
        
        const products = await product.findByPk(id)

        if (products) {
            products.update(body);
            res.json({
                msg:'producto acutalizado',
                body
            })
        } else {
            res.json({
                msg:`no existe un producto con el id ${id}`
            })
        }

    } catch (error) {
        console.log('ups algo paso')
    }


}

