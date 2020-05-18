$(document).ready(function(){
	$('.sidenav').sidenav();//para el sidebar que aparesca
	$('.collapsible').collapsible();//para el sidebar collapasar,puedes cambiar los valores abajo
	$('#myTable').pageMe({
	  pagerSelector:'#myPager',//the name of the materialize pager
	  activeColor: 'green',//color of the active page
	  prevText:'Anterior',// previous text
	  nextText:'Siguiente',// next text
	  showPrevNext:true,//show previous and next buttons 
	  hidePageNumbers:false,//hide page numbers
	  perPage:1//number of rows to show
	});

});




// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
//   });


 