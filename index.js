
const subButton = document.querySelector('#submit');

subButton.addEventListener('click', e => {
    let inpBox = document.querySelector('#inpbox').value;

    // Words Counter
    let words = inpBox.match(/\S+/gm);
    // All caracters including spaces
    let caracters = inpBox.split('');
    // Detects any caracters execept by spaces
    let noSpaceCaracters = inpBox.match(/[\S+]/gm);
    // Content Line Counter
    let breakLineNoSpace = inpBox.match(/.+/gm);

    const b = document.createElement('b');

    document.getElementById('result').value = 
    `Word counter: ${words.length} \n
    Caracter counter: ${caracters.length}
    Non space caracters: ${noSpaceCaracters.length} \n
    Content line counter: ${breakLineNoSpace.length}`;
})
