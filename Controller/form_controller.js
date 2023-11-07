const formDB = require("../Model/form_model")

exports.create = async (req, res) => {
    if (!req.body) {
      res.status(400).send("Content Cannot Be Empty");
      return;
    }
  
    const form = new formDB({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      message: req.body.message,
    });
  
    form.save()
      .then(data => {
        res.status(200).send({ status: true, message: "Submitted Successfully", data: data });
      })
      .catch(error => {
        res.status(500).send({
          message: error.message || "An error occurred while saving the form data."
        });
      });
  };

// find user 
    exports.find = (req, res) => {
      if (req.params.email) {
          const email = req.params.email
          formDB.findOne({ email: email }
          ).then(data => {
              if (!data) {
                  res.status(400).send("User not found")
              } else {
                  res.send(data)
              }
          })
              .catch(err => {
                  res.status(500).send(err)
              })
      }
      else
          formDB.find()
              .then(user => {
                  res.send(user)
              })
              .catch(err => {
                  res.status(500).send(err)
              })
  }    


// update user

exports.update = async (req, res) => {
   if (!req.body) {
       res.status(400).send("User Address not found")
   }
   const id = req.params.id
   formDB.findByIdAndUpdate(id, req.body, { new: true })
       .then(data => {
           if (!data) {
               res.status(400).send(`Can not found user Address with ${id}`)
           } else {
               res.send(data)
           }
       })
       .catch(error => {
           res.status(500).send(error)
       })
}

// Delete user
exports.delete = (req, res) => {
    const id = req.params.id

    formDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(400).send(`User not Found with ${id}`)
            } else {
                res.send("user deleted successfully")
            }
        })
        .catch(error => {
            res.status(500).send(error)
        })
}


// mobile user
exports.mobile = (req, res) => {
      if (req.body.mobile) {
          const mobile = req.body.mobile
          console.log(mobile, 'fdasdvdfv')
          formDB.find({ mobile: mobile }
          ).then(data => {
              if (!data) {
                  res.status(400).send("User not found")
              } else {
                  res.send(data)
              }
          })
              .catch(err => {
                  res.status(500).send(err)
              })
      }
      else
          formDB.find()
              .then(user => {
                  res.send(user)
              })
              .catch(err => {
                  res.status(500).send(err)
              })
  }


  // Update a user by ID
exports.updateUser = (req, res) => {
   const { id } = req.params;
   const { name, email } = req.body;
 
   // Find the user by ID
   const form = users.find((form) => form.id === parseInt(id));
 
   // User not found
   if (!user) {
     return res.status(404).json({ success: false, message: 'User not found' });
   }
 
   // Update the user's name and email
   user.name = name;
   user.email = email;
 
   res.json({ success: true, message: 'User updated successfully', data: { id: user.id, name: user.name, email: user.email } });
 };
 