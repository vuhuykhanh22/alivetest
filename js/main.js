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
function getWidth(){
  var presentWidth = $(window).width();
  if(presentWidth < 768){
    var yourDiv = $("ul.tabs__title");
    var yourSpan = $('<select ></select>');
    yourDiv.before(yourSpan);
    yourSpan.append(yourDiv.children());
    yourDiv.remove();
    $('select li').each(function(){
    $(this).replaceWith( "<option>" + $(this).html() + "</option>" );  
  }) 
}
};
getWidth();
resizeWidth();
function resizeWidth(){
   $(window).resize(function(){
    if( $(window).width() < 768){
    var yourDiv = $("ul.tabs__title");
    var yourSpan = $('<select ></select>');
    yourDiv.before(yourSpan);
    yourSpan.append(yourDiv.children());
    yourDiv.remove();
    $('select li').each(function(){
    $(this).replaceWith( "<option>" + $(this).html() + "</option>" );

});
  }
  else if($(window).width() >= 768){
    var yourDiv = $("select");
    var yourSpan = $('<ul class= "tabs__title" > </ul>');
    yourDiv.before(yourSpan);
    yourSpan.append(yourDiv.children());
    yourDiv.remove();
   $('option').each(function(){
    $(this).replaceWith( "<li> <b>" + $(this).html() + " </b> </li>" );
    $('ul.tabs__title li b').first().addClass('active');
  });
}
  });
}