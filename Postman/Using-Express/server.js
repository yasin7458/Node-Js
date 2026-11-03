import express from "express"

const app = express();

const users = [
    {
        id: 1,
        fname: "yashin",
        lname: "mithani",
        age: 19,
        hobby: "coding"
    },
    {
        id: 2,
        fname: "nirmal",
        lname: "dholu",
        age: 18,
        hobby: "debugging"
    }
]

app.get("/", (req, res) => {
    res.json({
        msg: "Connection Completed SuccessFully...!!",
        data: users
    })
})

app.listen(3000);

// http://localhost:3000