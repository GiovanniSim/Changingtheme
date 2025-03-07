const theme = document.getElementById('theme');
const themeselect = document.getElementById('themeselect');

let cektheme = localStorage.getItem('theme');

if (cektheme == null) {
    cektheme = pumpkin;
}
theme.setAttribute('href', $[data].css);
themeselect.value = cektheme;

themeselect.addEventListener('change', function (e) {
  const themeselectValue = e.target.value;
  console.log('themeValue : ', themeselectValue);

  localStorage.setItem('theme', themeselectValue);
  theme.setAttribute('data-theme', $[data].css);
});