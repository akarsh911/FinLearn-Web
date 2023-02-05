// getting all required elements
let suggestions = [];
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
var json;
// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  if (userData.length > 1) {
    $.ajax(
      {
        url: 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&datatype=json&keywords=' + userData + '&apikey=DUVB61PRIEEG0SX8',
        dataType: "html",
        success: function (data3) {
          var c = 0; var data2 = "";
          while (c < (data3.length - 2)) {
            if ((data3.charAt(c) <= 9) && data3.charAt(c) >= 1 && data3.charAt(c + 1) == "." && data3.charAt(c + 2) == " ") {
              c += 2;
            }
            else {
              data2 += data3.charAt(c);
            }
            c++;
          }
          data2 += data3.charAt(c + 1);
          data2 += data3.charAt(c + 2);
          console.log(data2);
          json = JSON.parse(data2);
          for (var i = 0; i < json.bestMatches.length; i++) {
            suggestions.push(json.bestMatches[i].name);
          }

          let emptyArray = [];
          if (userData) {
            icon.onclick = () => {
              webLink = "/trade_stocks.html?q=" + get_code(userData, json) + "&name=" + selectData;
              linkTag.setAttribute("href", webLink);
              linkTag.click();
            }
            emptyArray = suggestions;
            emptyArray = emptyArray.map((data) => {
              // passing return data inside li tag
              return data = `<li>${data}</li>`;
            });
            searchWrapper.classList.add("active"); //show autocomplete box
            showSuggestions(emptyArray);
            let allList = suggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
              //adding onclick attribute in all li tag
              allList[i].setAttribute("onclick", "select(this)");
            }
          } else {
            searchWrapper.classList.remove("active"); //hide autocomplete box
          }
        },
        error: function (e) {

          alert('Error: ' + JSON.stringify(e));
        }
      });
  }


}
function get_code(name, json) {
  for (var i = 0; i < json.bestMatches.length; i++) {
    if (json.bestMatches[i].name == name)
      return json.bestMatches[i].symbol;
  }
}
function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = "/html/trade_stocks.html?q=" + get_code(selectData, json) + "&name=" + selectData;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  }
  searchWrapper.classList.remove("active");
}
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}
