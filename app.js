const express=require('express');
const app=express();
app.use(express.json());
const { sequelize } = require("./models");


const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

sequelize.sync().then(() => {
app.listen(3000,()=>{
    console.log(`Server is running`)
});

})
