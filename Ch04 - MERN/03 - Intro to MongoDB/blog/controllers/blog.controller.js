import fs from "fs";

export const getAllBlog = (req, res) => {
    try {
        const blogData = fs.readFileSync("mocks/blog.mock.json");
        res.status(200).send(JSON.parse(blogData));
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const getBlogById = (req, res) => {
    try {
        const blogId = req.params.blogId;   //blogId is a dynamic param we passed in "blog.route.js",
        // we can access it using ".param"
        const blogData = fs.readFileSync("mocks/blog.mock.json");
        const blogDataById = JSON.parse(blogData).find(blog => blog.id == blogId);
        res.status(200).send(blogDataById);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const deleteBlogById= (req, res) => {
    try {
        const blogId = req.params.blogId;   //blogId is a dynamic param we passed in "blog.route.js",
        // we can access it using ".params"
        const blogData = JSON.parse(fs.readFileSync("mocks/blog.mock.json"));
        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);
        blogData.splice(blogIndexDataById, 1);
        fs.writeFileSync("mocks/blog.mock.json", JSON.stringify(blogData));  // setting the data back, after deletion
        res.status(200).send("Blog deleted");
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const createBlog = (req, res) => {
    try {
        const newBlogData = req.body;  // we'll get the new data in the request body
        console.log(newBlogData);
        let blogData = JSON.parse(fs.readFileSync("mocks/blog.mock.json"));  //reading the data
        blogData = [...blogData, newBlogData];   //updating the data
        fs.writeFileSync("mocks/blog.mock.json", JSON.stringify(blogData));  //setting the data back, after adding a blog
        res.status(200).send("Blog created successfully..!");  //sending success status
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const updateBlogById = (req, res) => {
    try {
        const newBlogData = req.body;
        const blogId = req.params.blogId;
        let blogData = JSON.parse(fs.readFileSync("mocks/blog.mock.json"));
        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);
        blogData[blogIndexDataById] = {...blogData[blogIndexDataById] , ...newBlogData};
        // ...newBlogData  ==> only the modified data will be updated,
        //if we just pass "newBlogData" ==> entire Array will be overridden, which will lead to loss of unchanged data.
        fs.writeFileSync("mocks/blog.mock.json", JSON.stringify(blogData));
        res.status(200).send("Blog updated successfully..!");
    } catch(e) {
        res.status(500).send(e.message);
    }
}