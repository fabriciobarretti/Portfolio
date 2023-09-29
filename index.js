// Generating text to test the sticky position
let paragraph = document.getElementById("par");

for (i=0; i<100; i++){
    if (!paragraph.innerHTML){
        paragraph.innerHTML = `Line breaking <br>`;
    } else{
        paragraph.innerHTML += `Line breaking <br>`;
    }
}