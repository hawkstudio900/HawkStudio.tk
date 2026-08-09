fetch("games.json")
    .then(response => response.json())
    .then(games => {

        const container = document.getElementById("games-container");

        games.forEach(game => {

            const tile = document.createElement("div");

            tile.classList.add("game");

            tile.dataset.id = game.id;

            tile.innerHTML = `
                <a href="${game.link}">
                    <img src="${game.image}" alt="${game.title}">
                </a>
                <p>${game.title}</p>
                <article>${game.article}</article>
            `;

            container.appendChild(tile);
        });

    });