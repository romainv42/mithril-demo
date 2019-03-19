import { route } from "mithril";
import { list, post, user, login } from "./components";

const root = document.getElementById("content");

route(root, "/list", {
    "/login": login,
    "/list": list,
    "/post/:id": post.full,
    "/user/:id": {
        onmatch: (param, path) => {
            if (!localStorage.getItem("auth-token")) {
                route.set("/login", { asked: path })
            } else return user.full
        }
    }
});