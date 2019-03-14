import m from "mithril";
import services from "../services";
import { user } from "./user";

export const post = {
    preview: {
        view: (vnode) => m(".tile.is-parent", [
            m("article.tile.is-child.box", [
                m("a.title", { href: "/post/" + vnode.attrs.post.id, oncreate: m.route.link }, vnode.attrs.post.title),
                m("p.content", vnode.attrs.post.body)
            ])
        ])
    },
    full: {
        oninit: async (vnode) => await services.post.get(vnode.attrs.id).then(r => vnode.state.post = r),
        view: (vnode) => vnode.state.post ? m(".tile.is-parent", [
            m("article.tile.is-child.box", [
                m("p.title", vnode.state.post.title),
                m("p.content", vnode.state.post.body),
                m(user.small, { userId: vnode.state.post.userId })
            ]),
        ]) : null
    }
};