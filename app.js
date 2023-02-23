const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const app = express();
app.use(express.json());

//const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.use(cors());

const contactsRouter = require("./app/routes/contact.route");


app.use("/api/contacts", contactsRouter);





app.get("/",(req,res)=>{
    res.json({message: "welcom to contact book application ."});

});



app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
    });
    app.use((error, req, res, next) => {
        // Middleware xử lý lỗi tập trung.
        // Trong các đoạn code xử lý ở các route, gọi next(error)
        // sẽ chuyển về middleware xử lý lỗi này
        return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
        });});

        
app.use("/api/contacts ", contactsRouter);


module.exports = app;

