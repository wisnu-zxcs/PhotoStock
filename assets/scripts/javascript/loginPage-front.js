const pictureTotal = 54;
const picturePath = Array.from({ length: pictureTotal }, (_, i) => `assets/images/backgrounds/${i + 1}.jpg`);

function backgroundPreloader(Paths) {
  Paths.forEach((path) => new Image().src = path);
}

function backgroundChanger() {
  const pictureRandomizer = picturePath[Math.floor(Math.random() * pictureTotal)];
  document.body.style.background = `url('${pictureRandomizer}') center/cover no-repeat fixed`;
}