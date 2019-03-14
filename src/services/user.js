import m from "mithril";

const randomPictures = () => m.request({ url: 'https://randomuser.me/api/?inc=picture', method: "GET" }).then(r => r.results.map(p => p.picture.large));

export default {
    get: (id) => m.request({ url: `https://jsonplaceholder.typicode.com/users/${id}`, method: "GET" }).then(async u => ({ ...u, picture: await randomPictures() }))
}
