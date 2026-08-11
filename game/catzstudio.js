fetch("catzstudio.txt")
    .then(response => response.text())
    .then(text => {
        document.querySelector("article").textContent = text;
    });