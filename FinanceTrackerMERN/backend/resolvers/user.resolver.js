import { users } from "../dummyData/data.js";

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
    signUp: async (_, {input}) => {
        try {
            const newUser = {
                ...input,
                _id: String(users.length + 1)
            }
        }catch (err){
            console.log(err);
            throw new Error(err.message || "Error creating user");
        }
    },
    login: async (_, {input}) => {
        try {
            const user = await users.find((user) => user.username === input.username);
            const isPasswordValid = await users.find((user) => user.password === input.password);
            if (!user) {
                throw new Error("User not found")
            }
            else if (!isPasswordValid) {
                throw new Error("Invalid password")
            }
            else {
                return user;
            }
        }catch (err) {
            console.error("Error in login mutation:", err);
            throw new Error(err.message || "Error logging in");
        }
    }
}
}
