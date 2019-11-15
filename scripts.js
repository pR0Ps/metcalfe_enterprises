function unmangleInfo(){
  var e = document.querySelectorAll(".mangled");
  for (var i = 0; i < e.length; i++) {
    var info = e[i].getAttribute("data-info")
    if (info){
      var decoded = info.split("").reverse().join("");
      var proto = e[i].getAttribute("data-proto")
      e[i].href = proto + decoded;
      e[i].removeAttribute("data-info");
      e[i].removeAttribute("data-proto");
      e[i].removeAttribute("title");
      e[i].removeAttribute("class");
      e[i].innerHTML = decoded;
    }
  }
}
