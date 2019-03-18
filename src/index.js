import { route } from "mithril";
import { list, post, user } from "./components";

const root = document.getElementById("content");

route(root, "/list", {
    "/list": list,
    "/post/:id": post.full,
    "/user/:id": user.full
});