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

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(res=>res.json())
.then(breeds =>{console.log(breeds)
    for(const item in breeds.message){
        let list=document.querySelector("#dog-breeds")
        const li=document.createElement("li")
        li.innerHTML=item
        list.appendChild(li);
        li.addEventListener('click', ()=>{
            list.style.color="red"
        })
    }
})





