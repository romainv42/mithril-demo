import m from "mithril";

const auth = {
    username: "",
    password: "",

    setUsername: (value) => auth.username = value,
    setPassword: (value) => auth.password = value,
    login: () => new Promise((resolve, reject) => {
        if (auth.username === 'tata' && auth.password === 'yoyo') {
            localStorage.setItem("auth-token", "something");
            resolve();
        } else {
            reject("Bad login");
        }
    })
}

export const login = {
    view: (vnode) => m("form", [
        m("input[type=text]", {
            oninput: function (e) { auth.setUsername(e.target.value) },
            value: auth.username
        }),
        m("input[type=password]", {
            oninput: function (e) { auth.setPassword(e.target.value) },
            value: auth.password
        }),
        vnode.state.error ? m("span.is-danger", "Bad login/password") : null,
        m("button[type=button]", {
            onclick: () => auth.login()
                .then(() => m.route.set(vnode.attrs.asked))
                .catch((err) => {
                    vnode.state.error = true;
                    m.redraw();
                })
        }, "Login")
    ])
};