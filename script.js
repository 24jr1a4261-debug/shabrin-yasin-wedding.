
const target=new Date('2026-07-09T00:00:00');
function update(){
 const el=document.getElementById('countdown');
 if(!el) return;
 const diff=target-new Date();
 const d=Math.floor(diff/86400000);
 const h=Math.floor(diff%86400000/3600000);
 el.innerHTML=`${d} Days ${h} Hours Remaining`;
}
setInterval(update,1000); update();
