import { route } from "mithril";
import { list, post } from "./components";

const root = document.getElementById("content");

route(root, "/list", {
    "/list": list,
    "/post/:id": post.full
});