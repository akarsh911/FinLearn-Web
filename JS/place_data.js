let data1 = JSON.parse(window.localStorage.getItem('user_data'));
$.ajax(
    {
        url: "../php/update_local_storage.php?email=" + data1.email,
        dataType: "json",
        success: function (data) {
            //data = JSON.parse(data);
            window.localStorage.setItem('user_data', JSON.stringify(data));
            let data3 = JSON.parse(window.localStorage.getItem('user_data'));
            console.log("stcks=" + data);
            document.getElementById("user_name_topbar").innerHTML = data3.f_name;
            document.getElementById("user_funds").innerHTML = " " + data3.wallet_balance;
        },
        error: function (e) {
            alert('Error in putting data at     : ' + JSON.stringify(e));
            console.log("stcks=" + JSON.stringify(e));
        }
    });


