// Random background picture processor
const totalPicture = 54;

function backgroundChanger() {
  const randomGenerator = Math.ceil(Math.random() * totalPicture);

  document.querySelector("body").style.background = `url('assets/images/backgrounds/${randomGenerator}.jpg') center/cover no-repeat fixed`;
}