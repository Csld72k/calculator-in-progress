// DISABLE SELECTION OF CALCULATOR NAME, BUTTON DARK-MODE/LIGHT-MODE AND CALCULATOR BUTTONS 
document.onselectstart = () => {
  return false
}

window.calculator = new CalcController();