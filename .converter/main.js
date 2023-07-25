document.addEventListener('DOMContentLoaded',  () => {
  const srcUrl = document.getElementById('srcUrl');
  const nameInput = document.getElementById('imageName');
  const urlInput = document.getElementById('srcInput');
  const gramInput = document.getElementById('grams');
  const srcBtn = document.getElementById('srcGen');
  const image = document.getElementById('testImage');
  const sqlCode = document.getElementById('sqlCode');
  const single = document.getElementById('single');
  const plural = document.getElementById('plural');

  //gen function
  function urlGen (shareLink) {
    const id = shareLink.slice(32, -20)
    return `https://drive.google.com/uc?export=view&id=${id}`
  }

  srcBtn.addEventListener('click', (event) => {
    const input = urlInput.value
    const result = urlGen(input);
    srcUrl.innerText = result;
    image.src = result;
    image.alt = 'generated path is broken, please check google share link and try again';
    sqlCode.innerText = `INSERT INTO weight_image (name_desc, name_single, name_plural, image_link, grams)
    VALUES ('${nameInput.value}', '${single.value}', '${plural.value}', '${result}', ${gramInput.value});`
  })
})