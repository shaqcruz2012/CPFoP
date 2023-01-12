function calculator() {
  // variable storing current value being entered as string for easy concat
  let total = '0'
  // variable storing operations
  let operation = null
  // variable storing previous value
  let lastTotal = null

  // function updating the display with the current value
  function updateDisplay() {
      // selects the element with the id "placeToPutResult" and sets its text content to the current value
      document.querySelector('#placeToPutResult').textContent = total;
  }

  // function handling button clicks
  function buttonClick(value) {
      // if C is clicked, then clear all stored values
      if(value === 'C') {
          total = '0'
          operation = null
          lastTotal = null
      }
      // if an operator (+,-,*,/) is clicked, store current value, set the operation
      else if(value === '+' || value === '-' || value === '*' || value === '/') {
          lastTotal = total;
          operation = value;
          total = '0';
      }
      // if equals sign is clicked, perform the stored operation and update total
      else if(value === '=') {
          let result = '';
          // performs the operation using parse float to conver concat'ed strings
          if(operation == '+') {
              result = parseFloat(lastTotal) + parseFloat(total)
          }
          else if(operation == '-') {
              result = parseFloat(lastTotal) - parseFloat(total)
          }
          else if(operation == '*') {
              result = parseFloat(lastTotal) * parseFloat(total)
          }
          else if(operation == '/') {
              result = parseFloat(lastTotal) / parseFloat(total)
          }
          // updates the total and clears operator and previous value
          total = result.toString()
          operation = null
          lastTotal = null
      }
      // if a number is clicked, adds it to the current value
      else {
          // if current value is 0, replace with clicked number 
          if(total == '0') {
            total = value
          }
          // otherwise, concat clicked number to current value
          else {
            total += value
          }
      }
      updateDisplay()
  }

  // add event listeners to the button elements
  const buttons = document.querySelectorAll('.button');
  // for loop through all class "button" elements
  buttons.forEach(button => {
      // add a click event listener to each button
      button.addEventListener('click', () => buttonClick(button.textContent));
  })
}