import m from "mithril";
import services from "../services";
import { post } from "./post";

export const list = {
    oninit: (vnode) => services.post.list().then(data => vnode.state.data = data),
    view: (vnode) => vnode.state.data ? m(".tile.is-ancestor", vnode.state.data.map(p => m(post.preview, { post: p }))) : null
};
