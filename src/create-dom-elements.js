function createDiv(divId, ...divClasses) {
  const div = document.createElement("div");
  if (divId) {
    div.id = divId;
  }
  divClasses.forEach((divClass) => {
    div.classList.add(divClass);
  });
  return div;
}

function createParagraph(text, paraId, ...paraClasses) {
  const p = document.createElement("p");
  p.textContent = text;
  if (paraId) {
    p.id = paraId;
  }
  paraClasses.forEach((paraClass) => {
    p.classList.add(paraClass);
  });
  return p;
}

function createSpan(text, spanId, ...spanClasses) {
  const span = document.createElement("span");
  span.textContent = text;
  if (spanId) {
    span.id = spanId;
  }
  spanClasses.forEach((spanClass) => {
    span.classList.add(spanClass);
  });
  return span;
}

function createImage(imgSrc, imgId, ...imgClasses) {
  const img = document.createElement("img");
  img.src = imgSrc;
  if (imgId) {
    img.id = imgId;
  }
  imgClasses.forEach((imgClass) => {
    img.classList.add(imgClass);
  });
  return img;
}

export { createDiv, createParagraph, createImage, createSpan };
