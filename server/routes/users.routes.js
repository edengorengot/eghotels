const express = require('express');
const router = express.Router();
const userValidation = require('../validation/users.validation');
const userModel = require('../model/users.model');



router.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    let validateData = await userValidation.validateUsersSchema.validateAsync(req.body);
    


    if (false) {
      console.log(req);
      res.json("1234");
    }
    res.json("54321");
  }
  catch(err) {
    res.status(401).json({ err });
  }

  // console.log(req);
  // try {
  //   console.log(validateUsersSchema);
  //   console.log(req);
  //   if (true) {
  //     res.json({ msg: "You have Successfully Signed Up!" });
  //   } else {
  //     throw "User already exists...";
  //   }
  // }
  // catch (err) {
  //   // console.log(req);
  //   console.log("testEden");
  //   res.status(401).json({ err });
  // }
});





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





module.exports = router;
