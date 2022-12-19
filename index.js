const limitTime = 30 * 1000;
const stepSnowNumber = Math.min(3 + Math.floor(screen.width / 200), 10);
var totalTime = 0;

document.body.onload = snowing;

function random(min = 0, max, float = true) {
  if (float) {
    return min + Math.random() * (max - min);
  } else {
    return min + Math.floor(Math.random() * (max - min + 1) - 0.0001);
  }
}

function snowing() {
  const snowNumber = random(1, stepSnowNumber, (float = false));
  for (let i = 0; i < snowNumber; i++) {
    const widthRatio = window.devicePixelRatio || 1;
    const left = random((max = screen.width * widthRatio), (float = false));
    const heightShift = random(-25, 25, (float = false));
    const fallAnimationTime = random(30, 45, (float = false));

    let box = document.createElement("div");
    document.body.appendChild(box);
    box.className = "snow-box";
    const boxStyleString =
      `left: ${left}px; margin-top: ${heightShift}px; ` +
      `animation: fall ${fallAnimationTime}s linear infinite;`;
    box.style = boxStyleString;

    const snowTransparent = random(0.2, 0.8);
    const size = random(
      2 / snowTransparent,
      7 / snowTransparent,
      (float = false)
    );
    const floatAnimation = random(1, 12, (float = false));
    const floatAnimationTime = random(10, 20, (float = false));
    console.log(size);

    let snow = document.createElement("div");
    box.appendChild(snow);
    snow.className = "snow";
    const snowStyleString =
      `height: ${size}px; width: ${size}px; ` +
      `background: radial-gradient(circle at center, rgba(255,255,255, ${snowTransparent}), rgba(255, 255, 255, 0)); ` +
      `animation: float-${floatAnimation} ${floatAnimationTime}s ease-in-out infinite alternate-reverse;`;

    snow.style = snowStyleString;
  }
  const delay = random((min = 1000), (max = 2000), (float = false));
  totalTime += delay;
  if (totalTime < limitTime) {
    setTimeout(() => snowing(), delay);
  }
}

// $("li a").on("click", function () {
//   alert("hide");
//   $("#navbar").collapse("hide");
// });
