const names = ["Divyajg", "hparul", "FlorentinaPetica"];
const requests = names.map((name) =>
  fetch(`https://api.github.com/search/repositories?q=user:${name}`)
);
Promise.all(requests)
  .then((responses) => {
    for (let response of responses) {
      `${response.url}`;
    }
    return responses;
  })

  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((users) => {
    console.log(users);
    users.forEach((user) => {
      user.items.forEach((item) => {
        const body = document.querySelector("body");
        const user = document.createElement("div");
        user.innerHTML = `${item.owner.login}`;
        body.appendChild(user);
        const ul = document.createElement("ul");
        body.appendChild(ul);
        const li = document.createElement("li");
        li.innerHTML = `<div>Owner :${item.owner.login}</div>
         <div> Name :${item.full_name}</div>
         <div>URL : ${item.owner.url}</div>`;
        ul.appendChild(li);
      });
    });
  });
