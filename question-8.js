// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let fetchUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(respone => respone.json());
}
let getArray = (data) => {
    const newUser = data.map(user => user.name);
    return newUser;}

fetchUser()
    .then(getArray)
    .then(newUsers => {
      console.log(newUsers);
    });