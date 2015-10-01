window.onload = function()
{
  function bgadj(){   
        var element = document.getElementById("bg");
        var ratio =  element.width / element.height;   
        if ((window.innerWidth / window.innerHeight) < ratio){
            element.style.width = 'auto';
            element.style.height = '100%';
            if (element.width > window.innerWidth){
                var ajuste = (window.innerWidth - element.width)/2;
                element.style.left = ajuste+'px';
            }
        }
        else{         
            element.style.width = '100%';
            element.style.height = 'auto';
            element.style.left = '0';
        } 
    }
    bgadj();
    window.onresize = function() {
        bgadj();
    }
}