const parent=document.querySelector('.reads');
parent.addEventListener('click',event=>{
    const current=event.target;
    const isReadMoreBtn=current.className.includes('read-more-btn');
    if(!isReadMoreBtn) return;
    const currentText=event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');

    current.textContent=current.textContent.includes('Read More') ?
    "Read Less...":"Read More.";

});

const parents=document.querySelector('.readss');
parents.addEventListener('click',event=>{
    const currents=event.target;
    const isReadMoreBtns=currents.className.includes('read-more-btns');
    if(!isReadMoreBtns) return;
    const currentTexts=event.target.parentNode.querySelector('.read-more-texts');
    currentTexts.classList.toggle('read-more-text--shows');

    currents.textContent=currents.textContent.includes('Read More') ?
    "Read Less...":"Read More.";

});


const parentss=document.querySelector('.readsss');
parentss.addEventListener('click',event=>{
    const currentss=event.target;
    const isReadMoreBtnss=currentss.className.includes('read-more-btnss');
    if(!isReadMoreBtnss) return;
    const currentTextss=event.target.parentNode.querySelector('.read-more-textss');
    currentTextss.classList.toggle('read-more-text--showss');

    currentss.textContent=currentss.textContent.includes('Read More') ?
    "Read Less...":"Read More.";

});

const parentee=document.querySelector('.readee');
parentee.addEventListener('click',event=>{
    const currentee=event.target;
    const isReadMoreBtnee=currentee.className.includes('read-more-btnee');
    if(!isReadMoreBtnee) return;
    const currentTextee=event.target.parentNode.querySelector('.read-more-textee');
    currentTextee.classList.toggle('read-more-text--showee');

    currentee.textContent=currentee.textContent.includes('Read More') ?
    "Read Less...":"Read More.";

});