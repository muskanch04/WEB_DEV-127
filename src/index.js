const express = require("express")
const hbs = require("hbs")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const routes = require('./routes/main')
const Detail = require ("./models/Detail")
const slider= require("./models/sliders")
const Service= require("./models/Service")
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)

//(template engine)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connections
console.log("connecting to mongodb")
mongoose.connect("mongodb://localhost:27017/WEBSITE1");
console.log("connected to mongodb") 

// Service.create([
//     {
//         icon:'fa-brands fa-stack-overflow',
//         title:'Proivde Best Courses',
//         description:'We provide courses that help our students in learning and in placments.',
//         linkText:'http://www.learncoding.com',
//         link:'Check'
//     },
//     {
//         icon:'fa-brands fa-stack-overflow',
//         title:'Learn Projects',
//         description:'We provide courses that help our students in learning and in placments.',
//         linkText:'http://www.learncoding.com',
//         link:'Learn' 
//     },
//     {
//         icon:'fa-solid fa-print',
//         title:'Learn Projects',
//         description:'We provide courses that help our students in learning and in placments.',
//         linkText:'http://www.learncoding.com',
//         link:'Learn'  
//     }
// ])


// Detail.create({
//     brandName:"Informatix Solution",
//     brandIconUrl: "https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg",
//     links:[
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us"
//         },
//     ]
// });

// slider.create([
//     {
//         imageUrl: "/static/images/pic1.jpg"
//     },
//     {
//         imageUrl: "/static/images/pic2.jpg"
//     },
//     {
//         imageUrl: "/static/images/pic4.jpeg"
//     }
// ])

app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})