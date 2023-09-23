const totalCount = 23;

function backgroundChanger() {
  const num = Math.ceil(Math.random() * totalCount);

  document.body.style.background = `url('assets/images/backgrounds/${num}.jpeg') center/cover no-repeat fixed`;
}