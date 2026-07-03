cart = [];
ng = 0;
nm = 0;
nc = 0;
ti = 0;
sum = 0;
subtlt = document.getElementById('subtlt');
carttxt = document.getElementById('idklist');
unlisted = document.createElement('ul');
qlist = document.createElement('ul');
unlisted.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
qlist.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

function groundnut(){
  if(ng==0){
    lg = document.createElement('li');
    lg.innerText = 'Groundnut Oil';
    lg.style.color = 'black';
    unlisted.append(lg);
    qg = document.createElement('li');
    gm = document.createElement('div');
    gm.append(qg);
    gm.style.color = 'black';
    qlist.append(gm);
    minusg = document.createElement('button');
    minusg.style.height = '20px';
    minusg.style.width = '20px';
    minusg.textContent = '-';
    gm.append(minusg);
    gm.style.display = 'flex';
    gm.style.gap = '5px';
    minusg.addEventListener('click',function(){
      if(ng>1){
        ng = ng-1;
        qg.innerText = ng;
        addToCart('groundnut',ng);
        updateUI();
      }
      else{
        lg.remove();
        qg.remove();
        gm.remove();
        ng = 0;
        addToCart('groundnut',ng);
        updateUI();
      }
    })
  }
  ng = ng + 1;
  qg.innerText = ng;
  addToCart('groundnut', ng);
  updateUI();
}
function mustard(){
  if(nm==0){
    lm = document.createElement('li');
    lm.innerText = 'Mustard Oil';
    lm.style.color = 'black';
    unlisted.append(lm);
    qm = document.createElement('li');
    mm = document.createElement('div');
    mm.append(qm);
    mm.style.color = 'black';
    qlist.append(mm);
    minusm = document.createElement('button');
    minusm.style.height = '20px';
    minusm.style.width = '20px';
    minusm.textContent = '-';
    mm.append(minusm);
    mm.style.display = 'flex';
    mm.style.gap = '5px';
    minusm.addEventListener('click',function(){
      if(nm>1){
        nm = nm-1;
        qm.innerText = nm;
        addToCart('mustard',nm);
        updateUI();
      }
      else{
        lm.remove();
        qm.remove();
        mm.remove();
        nm = 0;
        addToCart('mustard',nm);
        updateUI();
      }
    })
  }
  nm = nm + 1;
  qm.innerText = nm;
  addToCart('mustard', nm);
  updateUI();
}
function coconut(){
  if(nc==0){
    lc = document.createElement('li');
    lc.innerText = 'Coconut Oil';
    lc.style.color = 'black';
    unlisted.append(lc);
    qc = document.createElement('li');
    cm = document.createElement('div');
    cm.append(qc);
    cm.style.color = 'black';
    qlist.append(cm);
    minusc = document.createElement('button');
    minusc.style.height = '20px';
    minusc.style.width = '20px';
    minusc.textContent = '-';
    cm.append(minusc);
    cm.style.display = 'flex';
    cm.style.gap = '5px';
    minusc.addEventListener('click',function(){
      if(nc>1){
        nc = nc-1;
        qc.innerText = nc;
        addToCart('coconut',nc);
        updateUI();
      }
      else{
        lc.remove();
        qc.remove();
        cm.remove();
        nc = 0;
        addToCart('coconut',nc);
        updateUI();
      }
    })
  }
  nc = nc + 1;
  qc.innerText = nc;
  addToCart('coconut', nc);
  updateUI();
}

function updateUI(){
  carttxt.innerText = '';
  carttxt.append(unlisted);
  carttxt.append(qlist);
  carttxt.style.display = 'flex';
  carttxt.style.justifyContent = 'space-between';
  subtlt.innerText = '₹'+total();
  document.getElementById('basketNum').innerText = totalBasket();
  document.getElementById('tlt').innerText = '₹'+total();
  if(unlisted.children.length===0){
    carttxt.innerText = 'Your basket is currently empty.';
  }
  if(unlisted.children.length!=0){
    document.getElementById('checkout').style.backgroundColor = 'orange';
    document.getElementById('checkout').style.color = 'black';
    document.getElementById('checkout').style.cursor = 'pointer';
  }
}
function total(){
  let sum = 0;
  for(let i=0; i<cart.length; i++){
    if(cart[i][0]=='groundnut'){
      sum += 350 * cart[i][1]; // multiply by quantity
    }
    else if(cart[i][0]=='mustard'){
      sum += 550 * cart[i][1];
    }
    else if(cart[i][0]=='coconut'){
      sum += 800 * cart[i][1];
    }
  }
  return sum;
}

function addToCart(item, qty){
  let found = cart.find(c => c[0] === item);
  if(found){
    found[1] = qty; // update quantity
  } else {
    cart.push([item, qty]); // add new if not found
  }
}
function totalBasket(){
  h = 0;
  for(let i=0;i<cart.length;i++){
    h = h + cart[i][1];
  }
  return h;
}
function checkout(){
  alert('ok, we will deliver to you soon!')
}