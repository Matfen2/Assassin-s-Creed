document.addEventListener('DOMContentLoaded', async function () {
    const list = document.querySelector('.listGames');

    const games = await fetch('games.json').then(response => response.json());

    for (let i = 0; i < games.length; i++) {
        const img = document.createElement('img');
        img.src = games[i].logo;
        list.appendChild(img);
    }
});
