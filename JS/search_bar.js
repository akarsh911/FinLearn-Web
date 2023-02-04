function on_key_up()
{
    
$.ajax(
    {
        url: "../php/search_stock.php?keywords=" + data1.email,
        dataType: "json",
        success: function (data) {
            window.localStorage.setItem('user_data', JSON.stringify(data));
            let data3 = JSON.parse(window.localStorage.getItem('user_data'));
            console.log("stcks=" + data);
            document.getElementById("user_name_topbar").innerHTML = data3.f_name;
            document.getElementById("user_funds").innerHTML = " " + data3.wallet_balance;
        },
        error: function (e) {
            alert('Error: ' + e);
        }
    });
}