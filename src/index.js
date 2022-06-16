console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then(res =>res.json())
.then((images) => {console.log(images)
   for (const item of images.message) {
       const pictures = document.querySelector("#dog-image-container");
       pictures.innerHTML += `<img src="${item}" alt=""> `
   }
})




