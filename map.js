// create map and centre on London
var map = L.map('map').setView([51.5074, -0.1278], 13);
// add OpenStreetMap basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
// add markers to map
L.marker([51.498658778661806, -0.16191385330292712]).addTo(map).bindPopup(`
  <h3>Harry's Dolce Vita</h3>
  <p>Harry's Dolce Vita is one of my favourite Italian restaurants in London which serves upscale Italian dishes.</p>
  <p>My go-to Italian spot in London</p>
`);
L.marker([51.509913612736824, -0.1266682858401914]).addTo(map).bindPopup(`
  <h3>London Coliseum </h3>
  <p>The London Coliserum is an ornate, restored Edwardian theatre with an 80ft stage for opera productions, plus bars and dining</p>
  <p>Home of The Nutcracker by the English National Ballet.</p>
`);
L.marker([51.51584024339054, -0.2055474576988727]).addTo(map).bindPopup(`
  <h3>The Notting Hill Bookshop </h3>
  <p>The Notting Hill Bookshop became famous in 1999 after its interior had been copied in the Notting Hill film featuring Hugh Grant and Julia Roberts.</p>
  <p>Home of the famous Notting Hill film - my favourite bookshop in London.</p>
`);
