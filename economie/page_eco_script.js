
const data = [
  {percent: 39.2, color:"#27AE60"},
  {percent: 26.3, color:"#3498DB"},
  {percent: 19.1, color:"#FFC300"},
  {percent: 11.4, color:"#FF5733"},
  {percent: 4.1,  color:"#fe0098"}
];

const svgCamembert = document.querySelector("#camembert svg");
const radius = 80;
const cx = 100, cy = 100;
let startAngle = 0;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180.0;
  return {x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad)};
}

data.forEach(d => {
  const angle = d.percent * 3.6;
  const endAngle = startAngle + angle;

  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArc = angle > 180 ? 1 : 0;

  const pathData = [
    `M ${cx} ${cy}`,
    `L ${end.x} ${end.y}`,
    `A ${radius} ${radius} 0 ${largeArc} 1 ${start.x} ${start.y}`,
    `Z`
  ].join(" ");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  path.setAttribute("fill", d.color);
  svgCamembert.appendChild(path);

  startAngle += angle;
});



const tooltip = document.getElementById('tooltip');
const svgCircle = document.querySelector('.line-chart');
const points = svgCircle.querySelectorAll('circle');

points.forEach(point => {
  const info = point.getAttribute('data-info') || point.getAttribute('title');

  point.addEventListener('mouseenter', e => {
    tooltip.textContent = info;
    tooltip.style.opacity = 1;
  });

  point.addEventListener('mousemove', e => {
    tooltip.style.left = (e.pageX + 10) + 'px';
    tooltip.style.top = (e.pageY + 10) + 'px';
  });

  point.addEventListener('mouseleave', e => {
    tooltip.style.opacity = 0;
  });
});


function changerLangue(select) {
    const langue = select.value;
    if (langue === "fr") {
        window.location.href = "page_eco.html"; // page française
    } else if (langue === "en") {
        window.location.href = "page_eco_en.html"; // page anglaise
    }
}
