const form = document.getElementById("form");
const ul = document.getElementById("list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  for (const [name, value] of formData) {
    data[`${name}`] = value;
  }

  fetch(`http://localhost:5000/employee/update/${data.email}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.success) {
        alert(data.message)
        return
      }
      for (const [name, value] of Object.entries(data.updated_employee)) {
        const li = document.createElement("li")
        li.innerText = `${name}: ${value}`
        ul.appendChild(li)
      }
    });
});
