import m from "mithril";

export default {
    list: () => m.request({ url: "https://jsonplaceholder.typicode.com/posts", method: "GET" }),
    get: (id) => m.request({ url: `https://jsonplaceholder.typicode.com/posts/${id}`, method: "GET" })
}