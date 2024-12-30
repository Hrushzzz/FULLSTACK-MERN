import express from "express";
import {createBlog, getAllBlog, getBlogById, updateBlogById, deleteBlogById} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/:blogId", getBlogById);  
// "/:blogId" is being passed as a Dynamic param over here
// passing a controller over here --> "getBlogById".
// router.get("/:blogId", (req, res) => {res.send({ id: 1 , title: "blog 1" })});
router.get("/", getAllBlog);
// router.get("/", (req, res) => {res.send([{ id: 1 , title: "blog 1" }, { id: 2 , title: "blog 2" }])});
router.post("/", createBlog);
router.put("/:blogId", updateBlogById);
router.delete("/:blogId", deleteBlogById);

export default router;