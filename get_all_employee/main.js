const ul = document.getElementById("list");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  fetch("http://localhost:5000/employee/all")
    .then((res) => res.json())
    .then((data) => {
      if (!data.success) {
        alert(data.message)
        return
      }
      data.employees.forEach(element => {
        for (const [name, value] of Object.entries(element)) {
          const li = document.createElement("li")
          li.innerText = `${name}: ${value}`
          ul.appendChild(li)
        }
        ul.appendChild(document.createElement("br"))
      });
    });
});
