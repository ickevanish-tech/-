document.addEventListener('DOMContentLoaded', function(){
  const qtyEls = document.querySelectorAll('.qty');
  const totalEl = document.getElementById('cart-total');

  function updateTotal(){
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseInt(item.dataset.price,10) || 0;
      const q = parseInt(item.querySelector('.qty .value').textContent,10) || 0;
      total += price * q;
    });
    if(totalEl) totalEl.textContent = `Итог: ${total} рублей`;
  }

  qtyEls.forEach(q => {
    const btnInc = q.querySelector('.inc');
    const btnDec = q.querySelector('.dec');
    const valEl = q.querySelector('.value');

    btnInc && btnInc.addEventListener('click', ()=>{
      valEl.textContent = parseInt(valEl.textContent,10) + 1;
      updateTotal();
    });
    btnDec && btnDec.addEventListener('click', ()=>{
      let v = parseInt(valEl.textContent,10) - 1;
      if(v<0) v=0;
      valEl.textContent = v;
      updateTotal();
    });
  });

  updateTotal();
});
