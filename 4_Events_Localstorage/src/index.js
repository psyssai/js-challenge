// <⚠️ /DONT DELETE THIS ⚠️>

const COUNTRY_KEY = "country";
function saveLocalStorage() {
  const selectElement = document.querySelector("select");
  selectElement.addEventListener("change", event => {
    localStorage.setItem(COUNTRY_KEY, event.target.value);
  });
}
function loadName() {
  const select = document.querySelector("select");
  const currentCountry = localStorage.getItem(COUNTRY_KEY);
  if (currentCountry !== null) {
    const option = select.querySelector(`option[value = ${currentCountry}]`);
    option.selected = true;
  }
}
function init() {
  loadName();
  saveLocalStorage();
}

init();
