import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        enum: ["cash", "card"],
        required: true
    },
    category: {
        type: String,
        enum: ["saving", "expense", "investment"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
}, {timestamps: true});

// export model so we can use it in other files
export const Transaction = mongoose.model("Transaction", transactionSchema)