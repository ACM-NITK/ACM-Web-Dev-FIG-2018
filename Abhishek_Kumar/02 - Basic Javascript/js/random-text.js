function gen_text()
{
    // Instead of generating true random text, I am just printing lorem ipsum
    console.log("Called function gen_text()")
    var rand_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis ac erat eget laoreet. In ligula nibh, fermentum sit amet facilisis sit amet, pharetra in elit. Integer mi quam, convallis quis urna eget, mollis bibendum lectus. Quisque ac scelerisque elit, vitae molestie augue. In aliquet imperdiet leo quis porttitor. Nunc. \nThanks for Waiting :)"
                
    document.getElementById("random-text-box").innerHTML = rand_text
}
