import express from "express";
import {createBlog, getAllBlog, getBlogById, updateBlogById, deleteBlogById, renderBlogs} from "../controllers/blog.controller.js";

const router = express.Router();

// router.get("/list", renderBlogs);
router.get("/:blogId", getBlogById);  
router.get("/", getAllBlog);
router.post("/", createBlog);
router.put("/:blogId", updateBlogById);
router.delete("/:blogId", deleteBlogById);

export default router;