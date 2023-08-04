const express = require("express")
const router = express.Router()
const formCotroller = require("../Controller/form_controller")

router.post("/", formCotroller.create)
router.get("/get/:email", formCotroller.find)
router.get("/get/:mobile", formCotroller.find)
router.get("/get", formCotroller.find)
router.put("/update/:id", formCotroller.update)
router.delete("/delete/:id", formCotroller.delete)
router.put("/updateUser/:id", formCotroller.update)
module.exports = router