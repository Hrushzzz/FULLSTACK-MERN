// Problem Statement:

// You are given an array of objects representing transactions made by customers.
// Each object contains the following properties:

// customerId: Number, representing the unique ID of the customer.
// amount: Number, representing the amount of the transaction.
// date: String, representing the date of the transaction (in the format "YYYY-MM-DD").

// Your task is to write a JavaScript function using functional programming techniques that takes 
//this array of transaction objects and returns an object containing the following information:

// q1. totalTransactions: Total number of transactions.
// q2. totalAmount: Total amount of all transactions.
// q3. averageTransactionAmount: Average amount of transactions.
// q4. transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
// q5. transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.

const transactions = [
    { customerId: 1, amount: 100, date: '2024-03-01' },
    { customerId: 2, amount: 150, date: '2024-03-01' },
    { customerId: 1, amount: 200, date: '2024-03-02' },
    { customerId: 3, amount: 50, date: '2024-03-02' },
    { customerId: 2, amount: 120, date: '2024-03-03' },
];


const totalTransactions = transactions.length;
console.log("q1 ::: " , totalTransactions);


const totalAmount = transactions.reduce(function(total , transaction) {
    total = total + transaction.amount;
    return total;
} , 0);

console.log("q2 ::: " , totalAmount);


const averageTransactionAmount = totalAmount / totalTransactions;
console.log("q3 ::: " , averageTransactionAmount);


const transactionsPerDay = transactions.reduce(function(acc , transaction) {
    if (!acc[transaction.date]) {
        acc[transaction.date] = [];
    }

    acc[transaction.date].push(transaction);
    return acc;
} , {});

console.log("q4 ::: " , transactionsPerDay);


const transactionsByCustomer = transactions.reduce(function(acc , transaction) {
    if (!acc[transaction.customerId]) {
        acc[transaction.customerId] = [];
    }

    acc[transaction.customerId].push(transaction);
    return acc;
} , {});

console.log("q5 ::: " , transactionsByCustomer);