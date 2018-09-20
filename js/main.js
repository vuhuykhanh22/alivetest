$(document).ready(function() {
	 var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    


    // var a = ('.navbar li a.lang.active'[0]).text();
    // console.log(a);
   function getValue(){
        var yourArray = [];
        var b;
       $("#menu-lang").find("a.lang.active").each(function(){
        if(($.trim($(this).text()).length>0)){
          $("i").empty();
         yourArray.push($(this).text());
         var a = document.getElementById("show-lang");
          a = yourArray[0];
          b = document.getElementById("label-lang").innerHTML = yourArray[0];
        }
    });
  }
      getValue();
     $('.navbar ul li a.lang').on('click',function(){
        $('.navbar ul li a.lang').removeClass('active');
        $(this).addClass('active');
        getValue();
        });
        
 
	$('.tabs__title li b').on('click',function(){
			$('.tabs__title li b').removeClass('active');
			$(this).addClass('active');
			var chiso = $(this).parent().index()+1;
			console.log(chiso);
			$('.group-content li .catalog').removeClass('appear');
			$('.group-content li:nth-child(' + chiso +") .catalog").addClass('appear');
		})
});
