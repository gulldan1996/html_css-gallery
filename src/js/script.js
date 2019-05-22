const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener("click", (e) => {
  e.preventDefault();
  target = e.target;
  if (target.tagName === 'IMG') {
    largeImg.src = target.parentNode.href
  }
});

