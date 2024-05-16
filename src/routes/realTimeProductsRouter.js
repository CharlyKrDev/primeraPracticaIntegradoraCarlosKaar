import express from "express";
import productsModel from "../dao/models/products.model.js";



export const realTimeProductsRouter = express.Router()




realTimeProductsRouter.get("/home", async (req, res) => {

  const limit = parseInt(req.query.limit);

  try {
    let products;
    if(!isNaN(limit)) {

      products = await productsModel.find().limit(limit).lean();

    } else{
      products = await productsModel.find().lean()
    }

    res.render('home',{
      style:'style.css',
      productos: products

    })
  
  } catch (error) {
    res.status(404).json({ error: error.message }); 
  }
});

realTimeProductsRouter.get("/realTimeProducts", (req, res)=>{

  res.render('realTimeProducts',{
    style:'style.css',


  })
})

// realTimeProductsRouter.get("/chat", (req, res)=>{

//   res.render('messages',{
//     style:'style.css',


//   })})

