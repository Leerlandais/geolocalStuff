window.addEventListener('resize', displayScreenWidth); 

function displayScreenWidth() { 
    const screenwidth = document.getElementById("screenwidth");
    let theWidth = window.innerWidth;                                             
    screenwidth.innerHTML = 'The screen width is: ' + theWidth;
}
displayScreenWidth();

const thisLat = document.getElementById('thisLat');
const thisLong = document.getElementById('thisLong');

console.log (thisLat.textContent, thisLong);