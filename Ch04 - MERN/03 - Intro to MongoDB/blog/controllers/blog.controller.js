import fs from "fs";
import Blog from "../model/blog.model.js";

export const getAllBlog = async (req, res) => {
    try {
        const allBlogsData = await Blog.find({});   // ".find" ->  method in MongoDB
        res.status(200).send(allBlogsData);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId;   //blogId is a dynamic param we passed in "blog.route.js",
        // we can access it using ".params"
        const blogData = await Blog.findById(blogId);   // "findByID" -> method in MongoDB
        res.status(200).send(blogData);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const deleteBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const data = await Blog.findByIdAndDelete(blogId);   // "findByIdAndDelete" -> method in MongoDB
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const createBlog = async (req, res) => {
    try {
        const newBlogData = req.body;  // we'll get the new data in the request body
        const data = await Blog.create(newBlogData);   //"Blog" is our model instance name 
        //".create" -> method in MongoDB
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const updateBlogById = async (req, res) => {
    try {
        const newBlogData = req.body;
        const blogId = req.params.blogId;
        const data = await Blog.updateOne({ _id: blogId }, {$set: newBlogData});   //".updateOne" -> method in MongoDB
        // { _id: blogId } -> getting blogId , {$set: newBlogData} -> upsert: new data.
        // "upsert" is always better as it updates only the changed details, rest all remains the same.
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
}