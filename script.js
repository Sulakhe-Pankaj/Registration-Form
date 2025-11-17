// Populate day/month/year
(function populateDOB(){
  const day = document.getElementById('day');
  const month = document.getElementById('month');
  const year = document.getElementById('year');

  for(let d=1; d<=31; d++){
    const o = document.createElement('option'); o.value = d; o.textContent = d;
    day.appendChild(o);
  }

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  months.forEach((m,i)=>{
    const o = document.createElement('option'); o.value = i+1; o.textContent = m;
    month.appendChild(o);
  });

  const cur = new Date().getFullYear();
  for(let y=cur; y>=1950; y--){
    const o = document.createElement('option'); o.value = y; o.textContent = y;
    year.appendChild(o);
  }
})();

// Form handling
document.getElementById('regForm').addEventListener('submit', function(e){
  e.preventDefault();
  const form = e.target;
  // Basic validation
  const fname = form.firstName.value.trim();
  const lname = form.lastName.value.trim();
  const email = form.email.value.trim();
  if(!fname || !lname || !email){
    alert('Please fill required fields (First name, Last name, Email).');
    return;
  }

  // gather data
  const fd = new FormData(form);
  const data = {};
  for(const [k,v] of fd.entries()){
    if(data[k] === undefined) data[k] = v;
    else {
      if(!Array.isArray(data[k])) data[k] = [data[k]];
      data[k].push(v);
    }
  }

  console.log('Form Data:', data);
  alert('Form submitted! Check console for the collected data.');
  form.reset();
});