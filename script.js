function sw(imgId, thumb, newSrc) {
    document.getElementById(imgId).src = newSrc;
    thumb.closest('.thumbs').querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  }
  function st(btn, panelId) {
    const tabs = btn.closest('.prod-tabs');
    tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(panelId).classList.add('active');
  }