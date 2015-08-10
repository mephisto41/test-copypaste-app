function ok(res, msg) {
  var info = document.getElementById("info");
  var para = document.createElement("p");
  var resStr = "test:" + msg + " result:" + !!res;
  var node = document.createTextNode(resStr);
  console.log(resStr);
  para.appendChild(node);

  if (info.firstChild) {
    info.insertBefore(para, info.firstChild);
  } else {
    info.appendChild(para);
  }
}

SimpleTest = {
  waitForExplicitFinish: function() {
  },

  finish: function() {
  }
}

SpecialPowers = {
  pushPrefEnv: function(arg, func) {
    func();
  },
}

