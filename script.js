
const targetDate = new Date("June 21, 2026 11:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();
  const gap = targetDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('countdown-box').innerHTML = `
    ${days} ngày ${hours} giờ ${mins} phút
  `;

},1000);

function toggleMusic(){

  const music = document.getElementById('bgMusic');

  if(music.paused){
    music.play();
  } else {
    music.pause();
  }

}

window.addEventListener('load', () => {

  const music = document.getElementById('bgMusic');

  music.play().catch(() => {
    console.log('Autoplay bị browser chặn cho tới khi user tương tác');
  });

  let scrollSpeed = 1;

  function autoScroll() {
    window.scrollBy(0, scrollSpeed);

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      return;
    }

    requestAnimationFrame(autoScroll);
  }
    setTimeout(() => {
    requestAnimationFrame(autoScroll);
  }, 1500);

});