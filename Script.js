document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.holographic-button');

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const deg = 360 * (x + y);

    buttons.forEach(button => {
      button.style.backgroundImage = `linear-gradient(${deg}deg, #FF66CC, #FF3366, #FF6699, #FF33CC)`;
    });
  });
});
