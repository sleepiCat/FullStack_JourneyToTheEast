//import { users } from "../dummyData/data.js";
import { User } from "../models/user.model.js";

export const userResolver = {
  Query: {
    users: async (_,_,context) => {
      return users;
    },
    authUser: async () => {
        return users[0];
    },
    user: async (_, { userId }) => {
        try {
            const user = await users.find((user) => user._id === userId);
            return user;
        } catch (err) {
            console.error("Error in user query:", err);
            throw new Error(err.message || "Error getting user");
        }
        
    }
  },
  Mutation: {
    logOut: async () => {
        return { message: "Logged out successfully"}
    },
    signUp: async (_, {input}, context) => {
        try {
            const {username, name, password, gender} = input;
            if (!username || !name || !password || !gender) {
                throw new Error("All fields are required");
            }
            const existingUser = await User.findOne({username});
            if (existingUser) {
                throw new Error("User already exists");
            }

            // the password will be hashed before being stored in the database
            // the two functions below are used to hash the password
            const salt = await bycrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const boyProfilePic = `https://avatars.iran.liara.run/public/boy?username=${username}`;
            const girlProfilePic = `https://avatars.iran.liara.run/public/girl?username=${username}`;
       
            const newUser = new User({
                username,
                name,
                password: hashedPassword,
                gender,
                profilePicture: gender === "male" ? boyProfilePic : girlProfilePic;
            })

            // the user object will be saved in the database
            await newUser.save();
            // the user object will be logged in through the context object
            // the context object is passed to the resolvers through the ApolloServer
            await context.login(newUser);
            // the user object will be returned to the client
            return newUser;
        }catch (err){
            console.log("Error in sigup mutation:", err);
            throw new Error(err.message || "Error creating user");
        }
    },
    login: async (_, {input}, context) => {
        try {

            const {username, password} = input;
            // we want to verify that the username and password are also inside the database
            const {user, info} = await context.authenticate("graphql-local", {username, password});
            // we want to verify that the password is correct
            // so we need to hash the password and compare it with the hashed password in the database
            // however, since we are using context to authenticate the user, we don't need to do this
            // the authenticate function will handle this for us
            // if the password is incorrect, the authenticate function will throw an error
            await context.login(user);

            return user;
            
        }catch (err) {
            console.error("Error in login mutation:", err);
            throw new Error(err.message || "Internal server error");
        }
    },
    logOut: async (_, _, context) => {
        try {
            const message = "Logged out successfully";
            return message
        }
    }
}
}
