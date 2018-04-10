import express from 'express';
import User from '../models/User';


const router = express.Router();
    
router.post("/", (req, res) => 
{  // console.log('server/route/auth.js/credentials req=',req); //---visible only in sonsole of server-command prompt
  //  console.log('server/route/auth.js/credentials res=',res);
    console.log('server/route/auth.js/credentials req.body=',req.body);
    const { credentials } = req.body;
    
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

router.post("/confirmation", (req, res) => 
{ const token = req.body.token;
  User.findOneAndUpdate( { confirmationToken: token },{ confirmationToken: "", confirmed: true }, { new: true }
                        ).then( user => user ? res.json({ user: user.toAuthJSON() }) : res.status(400).json({}) );
});

export default router;