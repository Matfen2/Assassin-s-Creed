document.addEventListener('DOMContentLoaded', async function () {
    const body = document.body;
    const games = await fetch('games.json').then(response => response.json());

    for (let i = 0; i < games.length; i++) {
        const pict = document.querySelector('.list')
        const img = document.createElement('img');
        img.src = games[i].logo;
        img.classList.add('img-fluid');
        pict.appendChild(img);

        img.addEventListener('mouseenter', function () {
            body.style.backgroundImage = `url('${games[i].wallpaper}')`
        })
    }
})