class ScoreTable {
    static show() {
        let table = document.getElementById('score-table');

        if (localStorage) {
            let players = new Array();

            Object.keys(localStorage).forEach(name => {
                players.push({
                    'name': name,
                    'victories': parseInt(localStorage.getItem(name))
                });
            });

            players = players.sort((a, b) => b.victories - a.victories);
            players = players.slice(0, 5);

            table.innerHTML = '';

            players.forEach(player => {
                let row = `<tr><td>${player.name}</td> <td>${player.victories}⭐</td></tr>`;
                table.innerHTML += row;
            });

            document.querySelector('#score-table tr').style = 'font-weight: bold';
        }
    }
}