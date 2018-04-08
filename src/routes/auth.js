import express from 'express';
import User from '../models/User';


const router = express.Router();
    
router.post("/", (req, res) => 
{
    const { credentials } = req.body;
    console.log('credentials',req.body);
    User.findOne({ email: credentials.email }).then(user => 
    {  if (user && user.isValidPassword(credentials.password))   //isvalid is defined in model user
        { //console.log('user found',credentials);
        // res.json({ user: {email: user.email} });
          res.json({ user: user.toAuthJSON() });
         } 
      else { // console.log('user not found', credentials); //this will come to the console where server npm start is written
        res.status(400).json({ errors: { global: "Invalid credentials" } });
      }
    });
  });

export default router;