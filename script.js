    const starWrap = document.getElementById('stars');
    const stars = [...starWrap.querySelectorAll('.star')];
    let rating = 0;
    function paint(n){ stars.forEach((s,i)=>{ s.style.opacity = i < n ? 1 : 0.5; s.classList.toggle('active', i < n); }); }
    starWrap.addEventListener('click',(e)=>{ const s = e.target.closest('.star'); if(!s) return; rating = parseInt(s.dataset.val,10); paint(rating); });
    document.getElementById('sendBtn').addEventListener('click',()=>{ const msg=document.getElementById('fb').value.trim(); const text= msg?`Terima kasih! Rating: ${rating}/5 — \"${msg}\"`:`Terima kasih! Rating: ${rating}/5`; alert(text); });
    paint(0);