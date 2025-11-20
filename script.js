// Simple countdown to 30 days from now (just for demo)
(function(){
  const end = new Date();
  end.setDate(end.getDate() + 30);
  const el = document.getElementById('countdown');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  function fmt(n){ return String(n).padStart(2,'0'); }

  function tick(){
    const now = new Date();
    let diff = Math.max(0, end - now);
    const days = Math.floor(diff / (1000*60*60*24)); diff -= days*(1000*60*60*24);
    const hours = Math.floor(diff / (1000*60*60)); diff -= hours*(1000*60*60);
    const mins = Math.floor(diff / (1000*60)); diff -= mins*(1000*60);
    const secs = Math.floor(diff / 1000);
    el.textContent = days + '일 ' + fmt(hours) + ':' + fmt(mins) + ':' + fmt(secs);
    if(diff<=0) clearInterval(timer);
  }
  const timer = setInterval(tick, 1000);
  tick();

  const form = document.getElementById('notifyForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert('등록되었습니다: ' + email + '\n(이 데모는 실제 구독을 저장하지 않습니다.)');
    form.reset();
  });
})();