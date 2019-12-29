function translate()
{
    var input = document.getElementById("input").value;
    var arr = input.split(" ");
    var output="";
console.log(arr);
for(temp of arr)
{
    var result = temp.slice(1, (temp.length));
    output = output + " " + result+temp[0]+"ay";
}
    document.getElementById("output").innerHTML = output;
}