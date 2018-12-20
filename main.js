var booked=[0];
    var n;
    var count=0;
    function Input() {
      n= document.getElementById("inp1").value;
      for(i=0;i<=n;i++)
      {
        booked[i]=0;
      }
    }
    function booking()
    {
      var temp= document.getElementById("inp2").value;
      var alreadybooked=temp.split(' ');
      for(i=0;i<alreadybooked.length;i++)
      {
        booked[alreadybooked[i]]=-1;
      }
      var text1="";
      var i;
      for(i=1;i<=n;i++)
      {
        if(booked[i]==-1)
          text1 = text1 + '<button class="booked" id="'+i+'"onclick="book(this)";>'+i+"</button>";
        else
          text1 = text1 + '<button id="'+i+'" onclick="book(this)";>'+i+"</button>";
      }
      document.getElementById("seats").innerHTML = text1;
    }
    function book(k)
    {
      var num = k.id;
      if (booked[num]==0)
      {
        booked[num]=1;
        count++;
        k.setAttribute("class", "selected");
      }
      else if(booked[num]==1)
      {
        booked[num]=0;
        count--;
        k.setAttribute("class", "unselected");
      }
    }
    function display()
    {
      var flag=0;
      var str='The Booked Seat numbers are: ';
      for(i=1;i<=n;i++)
      {
        if(booked[i]==1)
        {
          if(!flag)
          {
            str+=i;
            flag++;
          }
          else
            str=str+' ,  '+i;
        }
      }
        document.getElementById("display").innerHTML=str;
    }