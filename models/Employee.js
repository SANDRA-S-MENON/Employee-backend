const mongoose = require("mongoose")
const schema = mongoose.schema(
    {
        "name":String,
        "id":String,
        "dept":String,
        "subject":String
    }
)
let Employeemodel = mongoose.model("employees",schema);
module.exports={Employeemodel}