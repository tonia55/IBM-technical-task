fetch('https://api.giphy.com/v1/gifs/search?api_key=hYgJyicUHZ8RFVU2WnigH0wuoK5PH6ze&q=animal&limit=100&offset=0&rating=g&lang=en')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    info(data);
  });

function info(data) {
  for (var i = 0; i < 3; i++) {
    var parentLi = document.getElementById("ul1");
    var newLi = document.createElement("li");
    parentLi.appendChild(newLi);
    var gifTitle = data.data[i].title;
    //var gifPlace = document.getElementById("gifPlace1");
    var gif = data.data[i].embed_url;
    var aTag = document.createElement("a");
    aTag.setAttribute("href", gif);
    aTag.setAttribute("id", "gifPlace1");
    aTag.textContent = gifTitle;
    newLi.appendChild(aTag);
  }
  for (var i = 3; i < 6; i++) {
    var parentLi = document.getElementById("ul2");
    var newLi = document.createElement("li");
    parentLi.appendChild(newLi);
    var gifTitle = data.data[i].title;
    //var gifPlace = document.getElementById("gifPlace2");
    var gif = data.data[i].embed_url;
    var aTag = document.createElement("a");
    aTag.setAttribute("href", gif);
    aTag.setAttribute("id", "gifPlace2");
    aTag.textContent = gifTitle;
    newLi.appendChild(aTag);
  }
  for (var i = 6; i < 9; i++) {
    var parentLi = document.getElementById("ul3");
    var newLi = document.createElement("li");
    parentLi.appendChild(newLi);
    var gifTitle = data.data[i].title;
    //var gifPlace = document.getElementById("gifPlace3");
    var gif = data.data[i].embed_url;
    var aTag = document.createElement("a");
    aTag.setAttribute("href", gif);
    aTag.setAttribute("id", "gifPlace3");
    aTag.textContent = gifTitle;
    newLi.appendChild(aTag);
  }
  for (var i = 9; i < 12; i++) {
    var parentLi = document.getElementById("ul4");
    var newLi = document.createElement("li");
    parentLi.appendChild(newLi);
    var gifTitle = data.data[i].title;
    //var gifPlace = document.getElementById("gifPlace4");
    var gif = data.data[i].embed_url;
    var aTag = document.createElement("a");
    aTag.setAttribute("href", gif);
    aTag.setAttribute("id", "gifPlace4");
    aTag.textContent = gifTitle;
    newLi.appendChild(aTag);
  }
}

function myFunction() {
  var input = document.getElementById("myInput");
  var filter = input.value;
  var ul = document.getElementById("gifPlace");
  var li = document.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  function isAlphaNumeric(filter) {
    var code, i, len;

    for (i = 0, len = filter.length; i < len; i++) {
      code = filter.charCodeAt(i);
      if (!(code > 47 && code < 58)
        && !(code > 64 && code < 91)
        && !(code > 96 && code < 123)) {
        return false;
      }
    }
    return true;
  };
}

