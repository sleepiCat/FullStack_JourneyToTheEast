//import Transaction from "../models/transaction.model.js";
//import User from "../models/user.model.js";
import { transactions } from "../dummyData/data.js";

export const transactionResolver = {
	Query: {
        transactions: async () => {
            // get all transactions
            return await transactions;
        },
        transaction: async (_, { transactionId }) => {
            // get Transaction by ID

        },
        categoryStatistics: async () => {
            // get array of category statistics

        }
    },
    Mutation: {
        
    }
	
	
};

