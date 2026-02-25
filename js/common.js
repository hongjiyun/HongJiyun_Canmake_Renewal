// top btn
window.onscroll = function() {
  const topBtn = document.getElementById("topBtn");
  
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
};

document.getElementById("topBtn").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};




