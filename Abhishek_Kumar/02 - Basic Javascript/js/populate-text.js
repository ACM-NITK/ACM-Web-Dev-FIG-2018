function populate_text()
{
        console.log("populate_text() called");
        var input = prompt("Please enter text to seperate");
        var alpha_text = ""
        var num_text = ""
        if(input != null)
        {
                console.log("Input: " + input);
                var i = 0;
                for(i = 0; i < input.length; i++)
                {
                    var character = input.charAt(i)
                    console.log("Value of i = " + i);
                    console.log("Value of character = " + character);
                    if("0" <= character && character <= "9")
                        num_text +=  character;
                    else
                        alpha_text +=  character;
                    // Anything that is not a digit is considered an alphaber
                }
        }
        console.log("Input is seperated into alphabets and number");
        document.getElementById("alpha-text-box").innerHTML = alpha_text;
        document.getElementById("numeric-text-box").innerHTML = num_text;
        console.log("Loaded new values into the text boxes");
}
