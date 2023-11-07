const RequirementForm = require('../Model/RequirementForm_Model');

exports.create = async(req, res) => {
    console.log(req.body);
    console.log(req.protocol + "://" + req.get("host"), "url")
    if(!req.body) {
        res.status(400).send("Content Connt Be Empty")
        return
    }
    const requirementform = new RequirementForm({
        Name: req.body.Name,
        PhoneNumber: req.body.PhoneNumber,
        SliderValue: req.body.SliderValue,
        Amount: req.body.Amount,
        ChooseFile: req.file&&req.file.filename ? req.protocol + "://" +req.get("host")+"/images/" + req.file.filename : "",
        Message: req.body.Message, 
    })
    requirementform.save(requirementform)
                   .then(data => {
                    res.status(200).send(data)
                   })
                   .catch(error => {
                    res.status(500).send({
                        message: error
                    })
                   })
}