var inputtext,alphabets=[],numbers=[],x=0,y=0;
console.log("Initialized variables");
function segregate(){
inputtext=document.getElementById('userInput').value;
console.log("The value in text area is"+inputtext);
for(i=0;i<inputtext.length;i++)
{
    if(isNaN(inputtext[i]))
    {
        alphabets[x]=inputtext[i];
        x++;
    }
    else if(!isNaN(inputtext[i]))
    {
        numbers[y]=inputtext[i];
        y++;
    }
}

console.log("The alphabets and  numbers are segregated and stored.");
console.log("The alphabets are "+alphabets+" and numbers are "+numbers);
document.getElementById('alphabets').value=alphabets;
document.getElementById('numbers').value=numbers;
console.log("The page is updated.");
}