import m from "mithril";

export default {
    list: () => m.request({ url: "https://jsonplaceholder.typicode.com/posts", method: "GET" }),
    get: (id) => m.request({ url: `https://jsonplaceholder.typicode.com/posts/${id}`, method: "GET" }),
    byUser: (id) => m.request({ url: "https://jsonplaceholder.typicode.com/posts", method: "GET" }).then(posts => posts.filter(p => p.userId = id))
}