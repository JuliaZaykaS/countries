 function createImage(link, name) {
  const item = document.createElement("img");
  item.setAttribute("src", link);
  item.setAttribute("alt", name);
  item.setAttribute("width", "300");
  return item;
}

function createGallery(array) {
  return array.map((elem) => {
    // console.log(elem);
    const { src, photographer } = elem;
    return createImage(src.tiny, photographer);
  });
}

export default createGallery;