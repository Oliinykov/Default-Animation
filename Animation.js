const square = document.getElementById("square");
let pos = 0;

function animate() {
  square.style.left = pos + "px";
  pos++;
  if (pos < window.innerWidth) {
    requestAnimationFrame(animate);
  }
}

animate();