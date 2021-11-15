const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const register = require("./models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
// const template_path = path.join(__dirname, "../templates/views");
// const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
// app.set("view engine", "hbs");
// app.set("views", template_path);
// hbs.registerPartials(partials_path);


app.get("/", (req,res) => {
    res.render("index")
});

app.post("/register", async (req,res) => {
    try {
        const password = req.body.password;
        const confirmpassword = req.body.cpassword;

        if(password === confirmpassword)
        {
            const registerdetails = new register({
                fname: req.body.fname,
                mname: req.body.mname,
                lname: req.body.lname,
                number1: req.body.mobileno,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
                gender: req.body.gender,
                txtDate: req.body.txtDate,
                course: req.body.course
            }) 
            const registered = await registerEmployee.save();
            res.status(201).render("index");
        }
        else
        {
            res.send("password and confirm password are different");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
