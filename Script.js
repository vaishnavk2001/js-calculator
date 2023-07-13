var buttonclick=(val)=>{
    document.getElementById("screen1").value += val
}
var clearDisplay=()=>{
    document.getElementById("screen1").value = ""
}
var resultclick=()=>{
    var text = document.getElementById("screen1").value
    var result = eval(text)
    document.getElementById("screen1").value = result
}
var back=()=>{
    var text = document.getElementById("screen1").value
    document.getElementById("screen1").value = text.substr(0,text.length-1)
}