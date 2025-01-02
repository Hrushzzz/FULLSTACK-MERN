import { model, Schema } from "mongoose";

const userSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            minLength: [3, 'Min 3 chars'],
            maxLength: [10, 'Max 10 chars'],
            select: false  // Password will not be shred by default by Server in any of the query
            // as a response unless explicitly asked.
        }
});


// Middleware :::
// Middleware functions (also known as pre and post hooks) enable developers to execute custom logic 
// before or after certain methods or actions are performed on Mongoose models or documents.

userSchema.pre("save", function(next) {
    const user = this;
    console.log("Pre Hook");
    console.log(user);
    user.password = user.password + "-encrypted";
    // "next()" function is very important as use it to pass down the control.
    // Every middleware hook should have a "next()" function.
    next();
});

// userSchema.post("save", function(next) {
//     const user = this;
//     console.log("Post Hook");
//     console.log(user);
//     next();
// });

const User = model('user', userSchema);

export default User;


// PRE hook ::: Executes before the operation. Use next() to proceed or throw an error to halt.
// POST hook ::: Executes after the operation has completed.
// Middleware functions can be synchronous or asynchronous.
// Middleware is registered on the schema, not the model.

// Mongoose middleware makes your application more maintainable and expressive by allowing 
// repetitive tasks to be handled automatically and consistently across your application.