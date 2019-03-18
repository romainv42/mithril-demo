import m from "mithril"
import services from "../services"

export const user = {
    small: {
        oninit: (vnode) => {
            services.user.get(vnode.attrs.userId).then(u => vnode.state.user = u)
        },
        view: (vnode) => vnode.state.user ? m(".card", [
            m(".media", [
                m(".media-left", [
                    m("figure.image.is-48x48", [
                        m("img.is-rounded", { src: vnode.state.user.picture ? vnode.state.user.picture : "https://dagoma.fr/medias/pictos/picto-user.svg" })
                    ])
                ]),
                m(".media-content", [
                    m("p.title.is-4", vnode.state.user.name),
                    m("p.subtitle.is-6", [
                        m("a", { href: "/user/" + vnode.state.user.id, oncreate: m.route.link }, `@${vnode.state.user.username}`)
                    ])
                ])
            ])
        ]) : null
    },
    full: {
        oninit: (vnode) => {
            services.user.get(vnode.attrs.id).then(u => vnode.state.user = u)
        },
        view: (vnode) => vnode.state.user ? m(".card", [
            m(".card-image", [
                m("figure.image.is-128x128", [
                    m("img.is-rounded.is-centered", { src: vnode.state.user.picture ? vnode.state.user.picture : "https://dagoma.fr/medias/pictos/picto-user.svg" })
                ]),
            ]),
            m(".card-content", [
                m(".media-content", [
                    m("p.title.is-4", vnode.state.user.name),
                    m("p.subtitle.is-6", `@${vnode.state.user.username}`)
                ]),
                m(".content", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem erat. Donec sollicitudin eros nec egestas faucibus. In diam arcu, rutrum eget congue eu, pretium ut mauris. Suspendisse maximus dictum erat, lobortis placerat ipsum tristique et. Quisque lacinia erat augue, eget cursus enim scelerisque vitae. Integer justo nibh, pellentesque sed felis ut, aliquam posuere metus. Phasellus scelerisque mi in condimentum vestibulum. Nullam placerat fringilla orci ac laoreet. Ut maximus dolor sit amet justo blandit, ultrices malesuada ipsum congue. Morbi fermentum pulvinar urna, eget egestas nibh sollicitudin quis. Aliquam tempor, turpis vel ultricies pulvinar, ligula arcu efficitur risus, at mattis quam arcu id massa.")
            ]),
        ]) : null
    }
}
