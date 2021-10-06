const etchContainer=document.getElementById('etchContainer');
dimensions=16;
createGrid();
function createGrid(){
    for (let i=0; i<dimensions*dimensions; i++){
        const box=document.createElement('div');
            box.className='box';
            box.addEventListener('mouseover',function(){
            box.style.backgroundColor='red'});
            etchContainer.appendChild(box)
        }
        etchContainer.style.gridTemplateColumns=`repeat(${dimensions},auto`;
        etchContainer.style.gridTemplateRows=`repeat(${dimensions},auto`;
    }
    const resetBtn=document.getElementById('reset');
    resetBtn.addEventListener('click',function(){
        $('.box').remove();
        do {dimensions=parseFloat(prompt(
            'enter a whole number 1-100 for the dimensions of the etch you wish to sketch'
            )
            )
        }
        while (Number.isNaN(dimensions)||!Number.isInteger(dimensions)||dimensions>100||dimensions<1);
        createGrid();
    })