const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  for (const [name, value] of formData) {
    data[`${name}`] = value;
  }

  fetch(`http://localhost:5000/employee/delete/${data.email}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.success) {
        alert(data.message)
        return
      }
      alert(data.message)
    });
});
