function toggleblink() {
  if (document.querySelector('#MB').className == "button buttonMiddle") {
    document.querySelector('#MB').className = "button buttonMiddleBlink";
  }
  else {
    document.querySelector('#MB').className = "button buttonMiddle";
  }
  document.querySelector('#LA').className = "button buttonMiddle";
  document.querySelector('#RA').className = "button buttonMiddle";
}

function leftArrow() {
  if (document.querySelector('#LA').className == "button buttonMiddle") {
    document.querySelector('#LA').className = "button buttonMiddleBlink";
  }
  else {
    document.querySelector('#LA').className = "button buttonMiddle";
  }
  document.querySelector('#MB').className = "button buttonMiddle";
  document.querySelector('#RA').className = "button buttonMiddle";
}

function rightArrow() {
  if (document.querySelector('#RA').className == "button buttonMiddle") {
    document.querySelector('#RA').className = "button buttonMiddleBlink";
  }
  else {
    document.querySelector('#RA').className = "button buttonMiddle";
  }
  document.querySelector('#LA').className = "button buttonMiddle";
  document.querySelector('#MB').className = "button buttonMiddle";
}