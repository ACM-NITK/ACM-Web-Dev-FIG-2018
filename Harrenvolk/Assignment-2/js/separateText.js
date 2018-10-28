function separateText()
{
        console.log("Code to Separate Numbers and Alphabets");
        var  messageBox = prompt("Text to be separated goes here");
        var alphabets = ""
        var digits = ""
        if(messageBox!= null)
        {
                console.log("Input: " + messageBox);
                var i = 0;
                for(i = 0; i < messageBox.length; i++)
                {
                    var ch = messageBox.charAt(i)
                    if("0" <= ch && ch <= "9")
                        digits += ch;
                    else
                        alphabets +=  ch;
                   
                }
        }
        console.log("Alphabets and Digits separated successfully");
        document.getElementById("alphabetbox").innerHTML = alphabets;
        document.getElementById("digitbox").innerHTML = digits;
        
}