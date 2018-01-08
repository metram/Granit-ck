// On Document Ready initialise the options 
jQuery(document).ready(function($){
"use strict";
			
/*****************************************************************************
		  		// OWL Sliders
*****************************************************************************/
/* Client logo slider */								
  jQuery("#client-logo").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
	  pagination:false,
	  navigation : false,
      items : 7,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
/* Client logo slider */


/* Testimonials */
 jQuery("#testimonials").owlCarousel({
	autoPlay: 3000, //Set AutoPlay to 3 seconds									  
      singleItem:true,
	  pagination:true,
	  navigation :false
  });
/* Testimonials */


/* History And Location-Details */
 jQuery("#fullwidth-slider").owlCarousel({
	autoPlay: 3000, //Set AutoPlay to 3 seconds									  
      singleItem:true,
	  pagination:true,
	  navigation :false
  });
/* History And Location-Details */


/* Home client slider */								
  jQuery("#owl-demo3").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
	  pagination:false,
	  navigation : false,
	  center: true,
      items :6,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,4]
  });
  
/* Home client slider */

//gallery Owl Carousel **/
    var carousel = $("#owl-demo");
  carousel.owlCarousel({
    navigation:false,
	autoPlay:false,
	loop:false,
	items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
	pagination:true,
  });
//	 Owl Carousel end


/* Staff Details */
 jQuery("#staff-details").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
	  pagination:false,
	  navigation : false,
	  items :3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
	  itemsTablet: [600,1], //2 items between 600 and 0
  });
/* // Staff Details */


/*****************************************************************************
		  		// OWL Sliders END
*****************************************************************************/

/*************************************************************
             Home Slider Start
**************************************************************/	

if($('.data-owl').length){

		$( '.data-owl' ).each(function( index ) {
			var $this =$(this);
			$this.owlCarousel(
			{
				items:$this.data('items'),
				navigation:$this.data('navigation'),
				singleItem:$this.data('singleitem'),
				autoPlay:$this.data('autoplay'),
				itemsScaleUp:$this.data('itemsscaleup'),
				navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], 
				pagination:$this.data('pagination'),
				paginationNumbers:$this.data('paginationnumbers'),
				autoHeight:$this.data('autoheight'),
				mouseDrag:$this.data('mousedrag'),
				transitionStyle:$this.data('transitionstyle'),
				responsive:true,
				lazyLoad:true,
				addClassActive:true,
				itemsDesktop :[1450,4],
				afterInit: function(){

					$('.active .caption-content-position', $this).children().each(function(index, val) {
						$(this).addClass('animated '+$(this).data('animation'));
					});
				},
				beforeMove:  function(){
					$('.caption-content-position').children().each(function(index, val) {
						$(this).removeClass('animated '+$(this).data('animation'));
					});
				},
				afterMove:  function(){
					$('.active .caption-content-position', $this).children().each(function(index, val) {
						$(this).addClass('animated '+$(this).data('animation'));
					});

				}
			});
			
	});
			
}

/******************  Home Slider END******************/


/* Location Tabs */
    jQuery(".location-tabs-menu a").click(function(event) {
        event.preventDefault();
        jQuery(this).parent().addClass("current");
        jQuery(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        jQuery(".location-tab-content").not(tab).css("display", "none");
       jQuery(tab).fadeIn();
    });
/* Location Tabs */

/* prettyPhoto */
jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();
		jQuery("#owl-demo:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
		jQuery("#portfolio-grid:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
/* prettyPhoto */


/*****************************************************************************
		  		// OWL Thumbnail Slider
*****************************************************************************/

<!-- obituary-photos -->
      var sync1 = $("#obituary-photos");
      var sync2 = $("#obituary-photos-thumpnail");

      sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 500,
        navigation: false,
		autoPlay: true,
        pagination:false,
		navigationText : ["prev","next"],
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });

      sync2.owlCarousel({
        items : 4,
        itemsDesktop      : [1199,4],
        itemsDesktopSmall     : [979,2],
        pagination:false,
		navigationText : ["prev","next"],
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });

      function syncPosition(el){
        var current = this.currentItem;
        $(sync2)
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($(sync2).data("owlCarousel") !== undefined){
          center(current)
        }

      }

      $(sync2).on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });

      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;

        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }

        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
      }

<!-- obituary-photos -->

<!-- obituary-tribute-videos-->
      var sync3 = $("#obituary-tribute-videos");
      var sync4 = $("#obituary-tribute-videos-thumpnail");

      sync3.owlCarousel({
        singleItem : true,
        slideSpeed : 500,
        navigation: false,
		autoPlay: true,
        pagination:false,
		navigationText : ["prev","next"],
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });

      sync4.owlCarousel({
        items : 4,
        itemsDesktop      : [1199,4],
        itemsDesktopSmall     : [979,2],
        pagination:false,
		navigationText : ["prev","next"],
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });

      function syncPosition(el){
        var current = this.currentItem;
        $(sync4)
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync4").data("owlCarousel") !== undefined){
          center(current)
        }

      }

      $(sync4).on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync3.trigger("owl.goTo",number);
      });

      function center(number){
        var sync4visible = sync4.data("owlCarousel").owl.visibleItems;

        var num = number;
        var found = false;
        for(var i in sync4visible){
          if(num === sync4visible[i]){
            var found = true;
          }
        }

        if(found===false){
          if(num>sync4visible[sync4visible.length-1]){
            sync4.trigger("owl.goTo", num - sync4visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync4.trigger("owl.goTo", num);
          }
        } else if(num === sync4visible[sync4visible.length-1]){
          sync4.trigger("owl.goTo", sync4visible[1])
        } else if(num === sync4visible[0]){
          sync4.trigger("owl.goTo", num-1)
        }
      }
	<!-- Image -->
	$('.play').on('click',function(){
		owl.trigger('autoplay.play.owl',[1000])
	})
	$('.stop').on('click',function(){
		owl.trigger('autoplay.stop.owl')
	})
<!-- obituary-tribute-videos-->


<!-- Location Details -->
<!-- location-facilities -->
      var sync5 = $("#location-facilities");
      var sync6 = $("#location-facilities-thumpnail");

      sync5.owlCarousel({
        singleItem : true,
        slideSpeed : 500,
        navigation: false,
		autoPlay: true,
        pagination:false,
		navigationText : ["prev","next"],
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });

      sync6.owlCarousel({
        items : 4,
        itemsDesktop      : [1199,4],
        itemsDesktopSmall     : [979,2],
        pagination:false,
		navigationText : ["prev","next"],
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });

      function syncPosition(el){
        var current = this.currentItem;
        $(sync6)
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync6").data("owlCarousel") !== undefined){
          center(current)
        }

      }

      $(sync6).on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync5.trigger("owl.goTo",number);
      });

      function center(number){
        var sync6visible = sync6.data("owlCarousel").owl.visibleItems;

        var num = number;
        var found = false;
        for(var i in sync6visible){
          if(num === sync6visible[i]){
            var found = true;
          }
        }

        if(found===false){
          if(num>sync6visible[sync6visible.length-1]){
            sync6.trigger("owl.goTo", num - sync6visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync6.trigger("owl.goTo", num);
          }
        } else if(num === sync6visible[sync6visible.length-1]){
          sync6.trigger("owl.goTo", sync6visible[1])
        } else if(num === sync6visible[0]){
          sync6.trigger("owl.goTo", num-1)
        }
      }

<!-- Location Details -->
<!-- location-facilities -->

/*****************************************************************************
		  		// OWL Thumbnail Slider END
*****************************************************************************/


});  // End DOM Ready Function