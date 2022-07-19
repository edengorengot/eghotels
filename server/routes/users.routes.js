const express = require('express');
const router = express.Router();
const userValidation = require('../validation/users.validation');
const userModel = require('../model/users.model');
const bcrypt = require('../config/bcrypt');



router.post('/signup', async (req, res) => {
  try {
    let validateData = await userValidation.validateUsersSchema.validateAsync(req.body);
    let hashedPassword = await bcrypt.createHash(validateData.password);
    let databaseChecker = await userModel.selectUserByEmail(validateData.email);

    if (databaseChecker.length === 0) {
      let newUser = await userModel.insertNewUser(
        validateData.firstName,
        validateData.lastName,
        validateData.email,
        validateData.mobilePhone,
        validateData.telephone,
        hashedPassword,
        validateData.profileImg,
      );
      res.json({ message: "New user inserted" });
    } else {
      res.json({ message: "The user already exists..." });
    }
  }
  catch(err) {
    res.status(401).json({ err });
  }
});

router.delete('/deleteUser', async (req, res) => { // auth needed
  try {
    // console.log(req.body.id);
    let databaseChecker = await userModel.selectUserByID(req.body.id);
    console.log(databaseChecker);
    if (databaseChecker) {
      userModel.deleteUser(databaseChecker._id);
      console.log(databaseChecker._id);
      res.json({ message: "User deleted successfully" });
    } else {
      res.json({ message: "The user isn't exists." });
    }
  }
  catch (err) {
    res.status(401).json({ err });
  }
});

router.get('/userById', async (req, res) => {
  try {
    let databaseChecker = await userModel.selectUserByID(req.body.id);
    res.json(databaseChecker);
  } catch (err) {
    res.status(401).json({ message: "User does not exists.", err });
  }
});

router.get('/userByEmail', async (req, res) => {
  try {
    let databaseChecker = await userModel.selectUserByEmail(req.body.email);
    if (databaseChecker.length === 0) {
      res.json({ message: "User does not exists." });
    } else {
      res.json(databaseChecker[0]);
    }
  } catch (err) {
    res.status(401).json({ err });
  }
});

// router.get('/userById', async (req, res) => {
//   try {
    
//   } catch (err) {
//     res.status(401).json({ err });
//   }
// });

// HTTP request methods: GET POST PUT DELETE PATCH
// GET: The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
// POST: The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
// PUT: The PUT method replaces all current representations of the target resource with the request payload.
// DELETE: The DELETE method deletes the specified resource.
// PATCH: The PATCH method applies partial modifications to a resource.




// router.get('myuser', auth, async (req, res) => {
//   try {
  // const user = await User.findById(req.user._id).select("-password");
  // res.send(user);
//   } catch (err) {
//     res.status(401).json({ err });
//   }
// })


// router.get('allusers', auth, async (req, res) => {
//   try {
//     const users = await User.find({}).select(["-password", "-__v"]);
//     res.json(users);
//   } catch (err) {
//     res.status(401).json({ err });
//   }
// })







/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





module.exports = router;
