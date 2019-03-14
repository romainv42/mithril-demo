import m from "mithril"
import services from "../services"

export const user = {
    small: {
        oninit: (vnode) => {
            console.log(vnode.attrs);
            services.user.get(vnode.attrs.userId).then(u => vnode.state.user = u)
        },
        view: (vnode) => vnode.state.user ? m(".card", [
            m(".media", [
                m(".media-left", [
                    m("figure.image.is-48x48", [
                      m("img.is-rounded", { src: vnode.state.user.picture ? vnode.state.user.picture : "https://dagoma.fr/medias/pictos/picto-user.svg"})  
                    ])
                ]),
                m(".media-content", [
                    m("p.title.is-4", vnode.state.user.name),
                    m("p.subtitle.is-6", `@${vnode.state.user.username}`)
                ])
            ])
        ]) : null
    }
}
