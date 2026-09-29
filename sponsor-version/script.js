// sponsor-version small JS: optional enhancements

document.getElementById('year')?.textContent = new Date().getFullYear();

// Small fallback: if badge image not present, show logo.svg
const badge = document.querySelector('.badge-art');
const fallback = document.querySelector('.badge-fallback');
if (badge && fallback) {
  badge.addEventListener('error', () => { badge.style.display='none'; fallback.style.display='block'; });
}

// Simple form button feedback
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', (e)=>{
    const btn = form.querySelector('button[type="submit"]');
    if(btn){ btn.textContent='Sending...'; setTimeout(()=>btn.textContent='Sent',1200); }
  });
});
