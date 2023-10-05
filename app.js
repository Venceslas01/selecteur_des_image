let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxs = document.querySelectorAll('.case');
const destroy = document.querySelector('.destroy');
const allCases = [];
const choix = [];
let photoEnCours;

for (i = 0; i < boxs.length; i++)
{
    allCases.push(boxs[i]);
}
allCases.push(destroy);

let indexPhoto = 1;

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;

function nvBase(){

    const newBase = document.createElement('div');
    newBase.setAttribute('class', 'base');
    newBase.setAttribute('draggable', 'true');
    indexPhoto++;
    newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    premiereCase.appendChild(newBase);
    base = newBase;
}

for (const vide of allCases){
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('drop', dragDrop);
}
function dragDrop(){

    if(this.id === "premier-case"){
        return;
    }

    if(this.id === "destroy"){
        base.remove();
        nvBase();
        return;
    }
    this.removeEventListener('drop', dragDrop);
    this.removeEventListener('dragenter', dragEnter);
    this.removeEventListener('dragover', dragOver);

    this.appendChild(base);
    this.childNodes[0].setAttribute('draggable', false)
    nvBase();

    choix.push(photoEnCours);
    if(choix.length === 3){
        setTimeout(() => {
            alert('Sélection terminée !')
        }, 200)
    }
}


function dragOver(e){
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}