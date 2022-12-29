var imgFeature = document.querySelector('.img-feature')
var listImage = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0;

function updateImagebyIndex(index) {
    //remove active class
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })

    currentIndex = index 
    imgFeature.src =  listImage[index].getAttribute('src')
    listImage(index).parentElement.classList.add('active')
}

listImage.forEach((imgElement, index) => {

    imgElement.addEventListener('click', e => {
        updateImagebyIndex(index)
       
    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0) {
        currentIndex = listImage.length - 1
    }else{
        currentIndex--
    }

    updateImagebyIndex(currentIndex)
})

updateImagebyIndex(0)
