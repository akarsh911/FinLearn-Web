let data = JSON.parse(window.localStorage.getItem('result'));
console.log(data);
document.getElementById("user_name_topbar").innerHTML = data.f_name;
document.getElementById("user_funds").innerHTML = data.wallet_balance;