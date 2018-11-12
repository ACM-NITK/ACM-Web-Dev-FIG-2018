function book(obj)
{
    if(obj.className=="btn btn-danger")
    {
        alert("This seat is already taken.");
    }
    else
        if(obj.className=="btn btn-default")
        {
            obj.className="btn btn-success";
        }
        else
            if(obj.className=="btn btn-success")
            {
                obj.className="btn btn-default";
            }
            else
                alert("ERROR1!!!");
}
function selectedSeats()
{
    var selected=[],seats=[];
    selected=document.getElementsByClassName("btn btn-success");
    for(i=0;i<selected.length;i++)
    {
        seats[i]=selected[i].id;
    }
    document.getElementById("Seats").value=seats;    
}