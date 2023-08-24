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

export { createDiv, createParagraph, createImage };
