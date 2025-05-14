document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('animateBtn');
  const img = document.getElementById('animateImg');

  const btnSelect = document.getElementById('buttonAnimationSelect');
  const imgSelect = document.getElementById('imageAnimationSelect');

  if (!btn || !img || !btnSelect || !imgSelect) {
    console.error('One or more required elements are missing in the HTML.');
    return;
  }

  // Load saved preferences
  const savedBtnAnim = localStorage.getItem('btnAnim');
  const savedImgAnim = localStorage.getItem('imgAnim');

  if (savedBtnAnim) btnSelect.value = savedBtnAnim;
  if (savedImgAnim) imgSelect.value = savedImgAnim;

  // Save preferences
  btnSelect.addEventListener('change', () => {
    localStorage.setItem('btnAnim', btnSelect.value);
  });

  imgSelect.addEventListener('change', () => {
    localStorage.setItem('imgAnim', imgSelect.value);
  });

  // Trigger animation for button
  btn.addEventListener('click', () => {
    const anim = btnSelect.value;
    triggerAnimation(btn, anim);
  });

  // Trigger animation for image
  img.addEventListener('click', () => {
    const anim = imgSelect.value;
    triggerAnimation(img, anim);
  });

  // Helper function to re-trigger animations
  function triggerAnimation(element, animationClass) {
    element.classList.remove('bounce', 'spin', 'fade');
    void element.offsetWidth; // Reflow
    element.classList.add(animationClass);
  }
});
