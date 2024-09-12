import passport from "passport";
import bcrypt from "bcrypt";

import User from "../models/user.model.js";
import { GraphQLLocalStrategy, buildContext } from "graphql-passport";


// when this function is called, it will configure passport to use the local strategy
// the local strategy is used to authenticate users using a username and password
// the function will also serialize and deserialize the user object
// the serializeUser function is used to store the user id in the session
// the deserializeUser function is used to retrieve the user object from the session
export const configurePassport = async () => {
    passport.serializeUser((user, done) => {
        console.log("Serialing user");
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        
        try { 
            const user = await User.findById(id);
            done(null, user);            
        } catch (err){
            done(err)
        }
        //const matchingUser = users.find(user => user.id === id);
        //done(null, matchingUser); 
      });

      passport.use(
        new GraphQLLocalStrategy(async (username, password, done) => {
          try {
            const user = await User.findOne({ username} );
            if (!user) {
              throw new Error("User or password is incorrect");
            }
            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                throw new Error("Invalid user or password");
            }
            return done(null, user); // done takes 2 arguments, the first is an error, the second is the user
            
          } catch (err) {
            done(err);
          }
        }
    ));
}
