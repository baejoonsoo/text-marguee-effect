"use strict";
const pTag1 = document.querySelector(".first-parallel");
const pTag2 = document.querySelector(".second-parallel");
const pTag3 = document.querySelector(".third-parallel");
const pTag4 = document.querySelector(".forth-parallel");
const textArr1 = "A B C D E, F U And your mom and your sister and your job And your craigslist couch and the way your voice sounds Fuck you and your friends that I'll never see again Everybody but your dog, you can all fuck off".split(" ");
const textArr2 = "also define the standard property 'backgroundClip' for compatibility".split(" ");
const textArr3 = "A side step, rightLeft, to my beat High like the moon, rock with me, baby Know that I got that heat Let me show you 'cause talk is cheap".split(" ");
const textArr4 = "Cause I I I'm in the stars tonight So watch me bring the fire and set the night alight Shining through the city with a little funk and soul So I'ma light it up like dynamite".split(" ");
const initTexts = (element, textArray) => {
    const newElement = element;
    textArray.push(...textArray);
    textArray.forEach((text) => {
        newElement.innerText += `${text}\u00A0\u00A0\u00A0\u00A0`;
    });
};
if (pTag1) {
    initTexts(pTag1, textArr1);
}
if (pTag2) {
    initTexts(pTag2, textArr2);
}
if (pTag3) {
    initTexts(pTag3, textArr3);
}
if (pTag4) {
    initTexts(pTag4, textArr4);
}
const marqueeText = (count, element, direction) => {
    const newElement = element;
    if (count > newElement.scrollWidth / 2) {
        newElement.style.transform = `translateX(0)`;
        count = 0;
    }
    newElement.style.transform = `translateX(${count * direction}px)`;
    return count;
};
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
const animate = () => {
    count1++;
    count2++;
    count3++;
    count4++;
    if (pTag1) {
        count1 = marqueeText(count1, pTag1, -1);
    }
    if (pTag2) {
        count2 = marqueeText(count2, pTag2, 1);
    }
    if (pTag3) {
        count3 = marqueeText(count3, pTag3, -1);
    }
    if (pTag4) {
        count4 = marqueeText(count4, pTag4, 1);
    }
    window.requestAnimationFrame(animate);
};
window.addEventListener("scroll", () => {
    count1 += 15;
    count2 += 15;
    count3 += 15;
    count4 += 15;
});
animate();
