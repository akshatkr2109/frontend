const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  for (const [name, value] of formData) {
    data[`${name}`] = value;
  }

  fetch("http://localhost:5000/employee/add", {
    method: "POST",
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
      alert(data.message)
    });
});
