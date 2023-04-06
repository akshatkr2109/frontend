const form = document.getElementById("form");
const ul = document.getElementById("list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  for (const [name, value] of formData) {
    data[`${name}`] = value;
  }

  fetch(`http://localhost:5000/employee/${data.email}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.success) {
        alert(data.message)
        return
      }
      for (const [name, value] of Object.entries(data.employee)) {
        const li = document.createElement("li")
        li.innerText = `${name}: ${value}`
        ul.appendChild(li)
      }
    });
});
