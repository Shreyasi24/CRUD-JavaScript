let url = "https://crudcrud.com/api/adda1be88ad347a9a4635d0a6cc7fd65/todos";
//get method
function get() {
    return axios.get(url)
        .then((res) => console.log(res.data))
}
get();

function post(posts) {
    return axios.post(url, { posts })
        .then((res) => res)
        .then((data) => console.log(data))

}
// post({ id: 1, name: "Shreyasi Chatterjee", job: "Developer" });
// post({ id: 2, name: "Nirjhar RoyChowdhury", job: "IPS" });

//edit method
function edit(updates) {
    return axios.put("https://crudcrud.com/api/adda1be88ad347a9a4635d0a6cc7fd65/todos/6411ad9c6047da03e808e5e4", { updates })
        .then((res) => res)
        .then((data) => console.log(data))

}
edit({ id: 3, name: "Anurag Sen", job: "Manager" });

//delete method
function dlt(dlts) {
    return axios.delete("https://crudcrud.com/api/adda1be88ad347a9a4635d0a6cc7fd65/todos/6411ada06047da03e808e5e9", { dlts })
        .then((res) => res)
        .then((data) => console.log(data))

}
//dlt()