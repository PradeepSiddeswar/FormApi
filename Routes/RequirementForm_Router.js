const express = require("express")
const route = express.Router()
const RequirementFormMulter = require("../Config/RequirementForm_Multer")
const requirementform = require("../Controller/RequirementForm_Controller")


route.post("/", RequirementFormMulter.single("image"), requirementform.create)
// route.get("/getAll",customer1signupcontroller.get)
// route.put("/update/:id", customer1signupcontroller.update)
// route.delete("/delete/:id", customer1signupcontroller.delete)
// route.get("/profiles/:profileId", customer1signupcontroller.getProfile)
module.exports = route