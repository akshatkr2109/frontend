fetch("http://localhost:5000")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("block").innerText = data.message
  });
