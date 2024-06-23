function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const playerId = getQueryParam('player');

if (playerId) {
  fetch(`https://raw.githubusercontent.com/bluestar-b/leaderboard/main/players/${playerId}.json`)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('player-data');

      const user = document.createElement('p');
      user.classList.add("name");
      document.title = data.user;
      user.textContent = `${data.user}`;
      container.appendChild(user);

      Object.entries(data.data).forEach(([kitName, tier]) => {
        const template = `
            <hr/>
              <div class="tier-item">
                <p class="kit-name">${kitName}</p>
                <p class="kit-tier">${tier}</p>
              </div>
             
            `;
        container.innerHTML += template;
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
} else {
  console.error('Player ID not found in query parameter.');
}