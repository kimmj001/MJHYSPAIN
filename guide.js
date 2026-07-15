
document.addEventListener('click', function(e){
  const btn = e.target.closest('.guide-btn');
  if(!btn) return;
  const panel = document.getElementById(btn.getAttribute('aria-controls'));
  const isOpen = panel.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  btn.textContent = isOpen ? '관람 가이드 닫기' : '관람 가이드';
});
