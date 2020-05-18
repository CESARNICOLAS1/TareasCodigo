//toolbar enable no funciona muy bien aveces se trava
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    //en options le podemos poner elementos como: 
    //{direction: 'left'}   {hoverEnabled: false}   {toolbarEnabled: true} ,podemos usar las 3
    //en direction puede ser: 'top', 'right', 'buttom', 'left'
    //hover enable esta en true en todos por defecto
    var instances = M.FloatingActionButton.init(elems, {direction: 'top'});   
  });
 
  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton({direction: 'left'});
//evento dentro de esta lista
    $('#prueba').click(() => {
        alert("has echo click");
       });
  });



  let variable=true;
  $("#caa").click(() => {
    
      if (variable==true) {
          $("#cambiar").addClass("scale-out");
          variable=false;
      }else{
          $("#cambiar").removeClass("scale-out");
          variable=true;
      }
  })
