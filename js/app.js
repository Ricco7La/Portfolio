var _CurrentSlide = 0;
$(document).ready(function(){

	//fullpage
	$('#fullpage').fullpage({
		menu: '#menu',
        anchors:['home', 'about', 'works', 'contact'],
        scrollingSpeed: 1250,
        navigation: true,
        navigationTooltips: ['Home', 'About Me', 'Works', 'Contact'],
        controlArrows: false,
        onLeave: function(index, nextIndex, direction){
        	if (index == 3 && _CurrentSlide != 0) 
        	{
        		_CurrentSlide = 0;
        		$.fn.fullpage.moveSlideLeft();
        	}
        },
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            _CurrentSlide = slideIndex;
            setTimeout(function(){ 
            	$.fn.fullpage.setAllowScrolling(true);
            	$.fn.fullpage.setKeyboardScrolling(true);
            }, 125);
        },
        onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
    	
    });

	$('#btnMore').on('click', function(){
		$.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    	$.fn.fullpage.moveSlideRight();
	});
    $('#btnBack').on('click', function(){
    	$.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    	$.fn.fullpage.moveSlideLeft();
	});

	//Google Map
	function initialize() {
	  var myLatLong = new google.maps.LatLng(49.97366666666667,4.529833333333333);
	  var mapProp = {
	    center: myLatLong,
	    zoom:17,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	  var infowindow = new google.maps.InfoWindow({
	    content: 'Ma maison',
	    maxWidth: 100
	  });
	  var marker = new google.maps.Marker({
	    position: myLatLong,
	    map: map,
	    title: 'Ma maison'
	  });
	  marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	// Slick
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false
	});

	
	var dotsList = document.getElementsByClassName("slick-dots")[0];

	var prevArrow = document.createElement('button');
	prevArrow.innerHTML = '<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>';
	prevArrow.classList.add('leftArrow');
	prevArrow.classList.add('arrows');
	var nextArrow = document.createElement('button');
	nextArrow.innerHTML = '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>';
	nextArrow.classList.add('rightArrow');
	nextArrow.classList.add('arrows');

	dotsList.insertBefore(prevArrow, dotsList.firstChild);

	dotsList.appendChild(nextArrow);

	$('.leftArrow').on('click', function(){
    	$('.slider').slick("slickPrev");
	});
	$('.rightArrow').on('click', function(){
    	$('.slider').slick("slickNext");
	});

	//Smartphone
	$(".btn-toggle-menu").click(function() {
    	$(".main-menu").toggleClass("hidden-menu");
    });
});