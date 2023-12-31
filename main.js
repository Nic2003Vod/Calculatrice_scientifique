let output = document.getElementById('output');

function setValue(value) {
    output.value += value;
}
function deleteCharacter() {
    let inputElement = document.getElementById("output");
    let currentValue = inputElement.value;
    
    if (currentValue.length > 0) {
      let newValue = currentValue.slice(0, -1);
      inputElement.value = newValue;
    }
  }
  
  let effButton = document.getElementById("effButton");
  effButton.addEventListener("click", deleteCharacter);

  function calculer() {
    let inputElement = document.getElementById('output');
    let expression = inputElement.value;

    try {
        let result = eval(expression);
        inputElement.value = result;
    } catch (error) {
        inputElement.value = 'Erreur';
    }
}

function addScientificFunction(funcName) {
    let inputElement = document.getElementById('output');
    let currentValue = inputElement.value;
    
    // Vérifiez si l'expression est vide ou déjà terminée
    if (currentValue === '' || currentValue.endsWith('+') || currentValue.endsWith('-') ||
        currentValue.endsWith('*') || currentValue.endsWith('/')) {
        currentValue += funcName + '(';
    } else {
        currentValue += '*' + funcName + '(';
    }
    
    inputElement.value = currentValue;
}


  