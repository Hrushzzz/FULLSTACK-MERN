import { model, Schema } from "mongoose";    // importing model and schema

// Inside our schema, we will define our structure i.e what do we need in our schema
const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            minLength: [10, "Min 10 characters are required"],
        },
        author: {
            type: String,
            required: true,
        },
        content: String,
    },
    {timestamps: true}
);


// After we define our Schema, out of our schema we will create our model.
// The model name is equivaent to our collection name, using the model name we get a lot of methods
// Here, in this case "blog" is our model name. We make all the CRUD operations on top of our model.

const Blog = model('blog', blogSchema);   // creating a model "blog" ouf of our "blogSchema".
// Here, "blog" is a Collection and "blogSchema" is the structure of our Collection.
// The above line means ==> I need a blog from blogSchema.

export default Blog


// NOTE ::: "SCHEMA" is a structure that we are defining for our collection, 
//out of that Schema we create our "Model" instance.
// Using model, we can perform CRUD operations on a collection(table)

// Database ==> Collections (tables) ==> Records (data inside collections/table)


// Refer to "controllers" => "blog.controller.js" for CRUD operations 

