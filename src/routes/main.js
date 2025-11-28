const express=require("express")

const routes = express.Router()

const Detail = require("../models/Detail")
const sliders = require("../models/sliders")
const services = require("../models/Service")
const Service = require("../models/Service")
const Contact = require("../models/Contact")

routes.get("/", async (req,res)=>{
  const details = await Detail.findOne({"_id":"678fe5d9601c8c95b8847467"})
  const slides = await sliders.find() 
  // console.log(details)
  const services = await Service.find()

   res.render("index",{
      details : details,
      slides : slides,
      services:services
   })
})
routes.get("/gallery",async(req,res)=>{
   const details = await Detail.findOne({"_id":"678fe5d9601c8c95b8847467"})
   res.render("gallery",{
      details : details
   })
})

routes.post("/process-contact-form",async (request,response) => {
   console.log("form is submitted")
   console.log(request.body)
   //save the data to db
   try{
      const data =await Contact.create(request.body)
      console.log(data)
         response.redirect("/")
   }catch(e)
   {
      console.log(e)
      response.redirect("/")
   }
})

module.exports=routes