let popup = document.getElementById('firstPopup');
const openPopup = document.getElementById('openPopup');
const closePop = document.getElementById('closePopup');

openPopup.addEventListener("click", showPopup) ;
closePop.addEventListener("click",closePopup) ;

function showPopup () {
    popup.classList.add("showpopup");
}

function closePopup () {
    popup.classList.remove("showpopup");
}
