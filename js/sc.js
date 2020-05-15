function Add()
{
  var a,b,c=0;
  a=Number(document.getElementById("a").value);
  b=Number(document.getElementById("b").value);
c=a+b;
document.getElementById("add").innerHTML=+c;
}
function Sub()
{
  var a,b,c=0;
  a=Number(document.getElementById("a").value);
  b=Number(document.getElementById("b").value);
c=a-b;
document.getElementById("sub").innerHTML=c;
}
function Mul()
{
  var a,b,c=0;
  a=Number(document.getElementById("a").value);
  b=Number(document.getElementById("b").value);
c=a*b;
document.getElementById("mul").innerHTML=c;
}
function Div()
{
  var a,b,c=0;
  a=Number(document.getElementById("a").value);
  b=Number(document.getElementById("b").value);
c=a/b;
c=c.toFixed(3);
document.getElementById("div").innerHTML=c;
}
