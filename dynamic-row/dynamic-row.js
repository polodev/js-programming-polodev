//incase of table we can add those stuff using insertRow and insertCell function
function addRow () {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  td1.textContent = name.value;
  td2.textContent = email.value;
  tr.appendChild(td1);
  tr.appendChild(td2);
  var table = document.getElementById('table');
  table.appendChild(tr);
  name.value = "";
  email.value = "";
}
