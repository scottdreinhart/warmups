var bigJSON = {"dlpgcack": false, "indwqahe": null, "caki": {"vvczskh": null, "tczqyzn": false, "qymizftua": "jfx", "cyd": {"qembsejm": [null, "full-stack", null], "qtcgujuki": 79, "ptlwe": "lrvogzcpw", "jivdwnqi": null, "nzjlfax": "xaiuf", "cqajfbn": true}, "kbttv": "dapsvkdnxm", "gcfv": 43.25503357696589}, "cfqnknrm":
null, "dtqx": "psuyc", "zkhreog": [null, {"txrhgu": false, "qkhe": false,
"oqlzgmtmx": "xndcy", "khuwjmktox": 48, "yoe": true, "xode": "hzxfgvw",
"cgsciipn": 20.075297532268902}, "hducqtvon", false, [null, 76.8463226047357,
"qctvnvo", null], [null, {"nlp": false, "xebvtnvwbb": null, "uhfikxc": null,
"eekejwjbe": false, "jmrkaqky": null, "oeyystp": false}, [null, 10, "nyzfhaps",
71, null], 40, null, 13.737832677566875], [true, 80, 20, {"weynlgnfro":
40.25989193717965, "ggsirrt": 17, "ztvbcpsba": 12, "mljfh": false, "lihndukg":
"bzebyljg", "pllpche": null}, null, [true, false, 52.532666161803895, "mkmqrhg",
 "kgdqstfn", null, "szse"], null, {"qkhfufrgac": "vpmiicarn", "hguztz":
  "ocbmzpzon", "wprnlua": null}], {"drnj": [null, false], "jkjzvjuiw": false,
   "oupsmgjd": false, "kcwjy": null}]};


function getString ( obj, target ) {
  var accumulatedPath = "";
  function go( obj, target, accumulatedPath ) {
    if ((typeof obj === "string" || typeof obj === "number" ) && obj == target) {
      return obj + " -> " + accumulatedPath;
    }
    var currentTest;
    for(key in obj){
      console.log(obj[key], target, accumulatedPath);
      currentTest = go(obj[key], target, accumulatedPath);
    }
  console.log(currentTest);
  }
  newOutput = [];
  for (var i = 0 ; i < obj.length ; i++)
    newOutput.push(go ( obj[i], target, accumulatedPath ))
  }
}
console.log(getString(bigJSON, "full-stack"));
