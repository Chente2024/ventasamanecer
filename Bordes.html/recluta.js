const subtitulo = document.querySelector(".titulo-reclutamiento");
const colores = [
  { color: "#ff00cc", shadow: "#f7f5f9" },
  { color: "#00ffff", shadow: "#00ffff" },
  { color: "#ff6600", shadow: "#ff6600" },
  { color: "#ccff00", shadow: "#ccff00" },
  { color: "#00ff99", shadow: "#00ff99" },
  { color: "#ff0033", shadow: "#ff0033" }
];
let i = 0;

if (subtitulo) {
  setInterval(() => {
    subtitulo.style.color = colores[i].color;
    subtitulo.style.textShadow = `
      0 0 8px ${colores[i].shadow},
      0 0 15px ${colores[i].shadow}
    `;
    i = (i + 1) % colores.length;
  }, 800);
}