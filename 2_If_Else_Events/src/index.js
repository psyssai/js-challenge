
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const WINDOW_BIG_SIZE_CLASS = "big";
const WINDOW_MIDDLE_SIZE_CLASS = "middle";
const WINDOW_SMALL_SIZE_CLASS = "small";
function handleResized(){
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth < 800){
    body.className = WINDOW_SMALL_SIZE_CLASS;
  }
  else if ( windowWidth < 1400){
    body.className = WINDOW_MIDDLE_SIZE_CLASS;
  }
  else{
    body.className = WINDOW_BIG_SIZE_CLASS;
  }
}
window.addEventListener("resize", handleResized);
