const limitTime = 20 * 1000;
const stepSnowNumber = Math.min(3 + Math.floor(screen.width / 150), 15);
var totalTime = 0;

document.body.onload = snowing;

function snowing(){
    const snowNumber = Math.floor(Math.random() * stepSnowNumber);
    for(let i = 0; i < snowNumber;i++){
        const widthRatio = window.devicePixelRatio || 1;
        const left = Math.floor(Math.random() * screen.width * widthRatio);
        const heightShift = Math.floor(Math.random() * 50)
        const size = 2 + Math.floor(Math.random() * 5);
        const floatAnimation = 1 + Math.floor(Math.random() * 4 - 0.0001);
        
        let box = document.createElement("div"); 
        document.body.appendChild(box);
        box.className = "snow-box";
        box.style = "left: " + left + "px; margin-top: " + heightShift + "px;";

        let snow = document.createElement("div");
        box.appendChild(snow);
        snow.className = "snow";
        snow.style = "height: " + size + "px; width: " + size + "px; animation: float-" + floatAnimation + " 10s linear infinite alternate-reverse;";
    }
    const delay = Math.random() * 1000;
    totalTime += delay;
    if(totalTime < limitTime){
        setTimeout(() => snowing(), delay);
    }
}
