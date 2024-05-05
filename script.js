const toggeleBtn = document.querySelector(".toggel-btn");
const toggeleIcon = document.querySelector(".toggle-btn i");
const dropdownMenue = document.querySelector(".dropdown");
toggeleBtn.onclick = function () {
    dropdownMenue.classList.toggle('open');
    const isOpen = dropdownMenue.classList.contains('open');
    toggeleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

let seeMoreBtn = document.querySelector('.btn');
let currentItem = 3;

seeMoreBtn.onclick = function() {
let boxes = [...document.querySelectorAll('.container .work-list .work')];
for (var i = currentItem; i < currentItem + 3; i++){
    boxes[i].style.display = 'inline-block';
}
currentItem += 3;

if(currentItem >= boxes.length){
    seeMoreBtn.style.display = 'none';
    
}
}

