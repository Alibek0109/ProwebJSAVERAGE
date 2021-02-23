var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье')



if ((a>b) && (b>c)) {
    
    alert(b);
}else if ((c>b) && (b>a)) {
    var d = b;
    alert(d);
}else if ((a<c) && (a>b)) {
    
    alert(a);
}else if ((a<b) && (a>c)) {
    var d = a;
    alert(d);
}else if ((c<a) && (c>b)) {
    
    alert(c);
}else if ((c<b) && (c>a)) {
    var d = c;
    alert(d);
}else {
    alert('что-то не так')
}