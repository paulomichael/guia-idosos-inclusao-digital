// assets/script.js

let currentStep = 1;
const totalSteps = 5;

function showStep(id) {
  document.querySelectorAll('.step').forEach(step => {
    step.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function nextStep() {
  const next = currentStep + 1;
  if (next <= totalSteps) {
    showStep('step' + next);
    currentStep++;
  }
  if (currentStep === totalSteps) {
    document.querySelector('.btn.next').disabled = true;
    document.querySelector('.btn.next').textContent = 'Finalizado!';
  }
}

function goHome() {
  window.location.href = 'index.html';
}

// Iniciar no primeiro passo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  showStep('step1');
  document.querySelector('.btn.next').disabled = false;
});
