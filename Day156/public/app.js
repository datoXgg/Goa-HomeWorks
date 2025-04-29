const API_URL = 'http://localhost:3000/songs';

async function loadSongs() {
  const response = await fetch(API_URL);
  const songs = await response.json();
  
  const songList = document.getElementById('songList');
  songList.innerHTML = songs.map(song => `
    <div class="song-card">
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
      <p>${Math.floor(song.duration/60)}:${song.duration%60}</p>
      <button onclick="deleteSong(${song.id})">Delete</button>
    </div>
  `).join('');
}

document.getElementById('songForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: document.getElementById('title').value,
      artist: document.getElementById('artist').value,
      duration: document.getElementById('duration').value,
      album: document.getElementById('album').value
    })
  });

  loadSongs();
});

window.deleteSong = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadSongs();
};

loadSongs();