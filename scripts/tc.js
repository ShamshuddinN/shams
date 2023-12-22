document.querySelector('#textOutput').disabled = true;

var isAlpha = function(ch){
  return /^[A-Z]$/i.test(ch);
}



function inputSubmit() {
  let iText = document.querySelector('#textInput').value;
  let incomingText = iText.replace(/\n/g, " ");

  // if (incomingText.includes('equipments') || incomingText.includes('Equipments')) {
  //   incomingText = incomingText.replace(/equipments/g, "equipment") 
  // }

  if (incomingText === '') {
    document.querySelector('#textOutput').placeholder = 'Please Enter Text in Input Text Box with a Line seperator.';
    document.querySelector('#textOutput').disabled = true;
  } else if (isAlpha(incomingText[0])) {
    document.querySelector('#textOutput').placeholder = 'Error: No Line Seperator Found!';
    document.querySelector('#textOutput').disabled = true;
  } else {
    let sep = incomingText[0];

    let out = incomingText.split(sep);
    let outText = ''

    for (let i = 1; i < out.length; i++) {
      outText += '• ' + out[i].trim()+ '\n';
    }
    document.querySelector('#textOutput').disabled = false;

    document.querySelector('#textOutput').value = outText;
  }
  
}

// const str = "Mr Red has a red house and a red car";
// const newText = str.replace(/red/g, "blue");
// console.log(newText); // Mr Blue has a blue house and a blue car


