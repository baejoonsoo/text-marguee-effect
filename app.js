const pTag1 = document.querySelector(".first-parallel");
const pTag2 = document.querySelector(".second-parallel");

const textArr1 =
  "A B C D E, F U And your mom and your sister and your job And your craigslist couch and the way your voice sounds Fuck you and your friends that I'll never see again Everybody but your dog, you can all fuck off".split(
    " "
  );
const textArr2 =
  "also define the standard property 'backgroundClip' for compatibility".split(
    " "
  );

const initTexts = (element, textArray) => {
  textArray.push(...textArray);

  textArray.forEach((text) => {
    element.innerText += `${text}\u00A0\u00A0\u00A0\u00A0`;
  });
};

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

let count1 = 0;
let count2 = 0;

const marqueeText = (count, element, direction) => {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translateX(0)`;
    count = 0;
  }

  element.style.transform = `translateX(${count * direction}px)`;
  return count;
};

const animate = () => {
  count1++;
  count2++;

  count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);

  window.requestAnimationFrame(animate);
};

animate();
