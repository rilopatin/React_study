<<<<<<< HEAD
const images = ['img/coffee-cup.jpg', 'img/farmerboy1.jpg', 'img/sample-image.jpg'];

function loadImg (url) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.addEventListener('load', e => resolve(img));
            img.addEventListener('error', () => {
                reject(new Error(`Не загружена картинка с адресом: ${url}`));
            });
            img.src = url;
        });
}
for (let url of images) {
    loadImg(url)
        .then(img => document.getElementById('container').appendChild(img))
        .catch(error => console.log(error));
}


=======
const images = ['img/coffee-cup.jpg', 'img/farmerboy1.jpg', 'img/sample-image.jpg'];

function loadImg (url) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.addEventListener('load', e => resolve(img));
            img.addEventListener('error', () => {
                reject(new Error(`Не загружена картинка с адресом: ${url}`));
            });
            img.src = url;
        });
}
for (let url of images) {
    loadImg(url)
        .then(img => document.getElementById('container').appendChild(img))
        .catch(error => console.log(error));
}


>>>>>>> 8c2ffc86576b7ab4cc55eb27d13d6627073004f1
