fetch("catzstudio.md")
    .then(response => response.text())
    .then(markdown => {
        document.getElementById("catzstudio-article").innerHTML = marked.parse(markdown);
    });