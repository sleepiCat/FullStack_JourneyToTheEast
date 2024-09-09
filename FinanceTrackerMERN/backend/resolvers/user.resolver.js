import { users } from "../dummyData/data.js";

export const userResolver = {
  Query: {
    users: async () => {
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
    
  }
};
