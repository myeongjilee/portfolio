$(document).ready(function() {
	 var daltan = {};
        daltan.works = {};
        /**
         * [kolonsport Options]
         * @type {Object}
         */
        daltan.works.kolonsport = {
            fullPageElem    : '#wrap',
            resetSlidersKey     : 'a29sb25zcG9ydC5tcnJvbWFuY2UuY28ua3JfQ0tFY21WelpYUlRiR2xrWlhKelVNcg=='
        }
	var slide_index = 0;
		 $max = $('.maxPage');
		 $vPage = $('.vPage');
		 $curPage = $('.curPage');
		 $nav = $('.nav');
	$('#wrap').fullpage({
		anchors: ['video', 'aboutNoah', 'ssNoah', 'musicVideo', 'seaHorse', 'ulleungdo', 'looks', 'opinionLeaders'],
		lockAnchors: true,
        menu: '.menudot',
        resetSliders: true,
        resetSlidersKey: daltan.works.kolonsport.resetSlidersKey,
		//autoScrolling:false,
		//scrollBar:true,
		slidesNavigation: false,
		loopHorizontal: false,
		afterLoad: function(anchorLink, index){
			slide_index = 0;
			$('.section').find('.slide').removeClass('anistart');
			$('.section.active').find('.slide.active').addClass('anistart');

			var loadedSection = $(this)
                 max = loadedSection.find('.slide').length
                 offClass = max==0?'off':'';
			     isHash = window.location.hash,
                 isCheck = isHash.indexOf("/")>-1
                 slidePage = offClass=='' ? ( isCheck ? parseInt( isHash.split("/")[1] ) + 1 : 1) : 0;
			$max.text(max);
			$vPage.removeClass('off').addClass(offClass)
			$curPage.text(slidePage);
			if(anchorLink == 'aboutNoah' || anchorLink == 'looks' || anchorLink == 'musicVideo'){
				$nav.addClass('white');
			} else {
				$nav.removeClass('white');
			}

			if(anchorLink == 'ssNoah' || anchorLink == 'seaHorse'){
				$vPage.fadeIn(1000);
				$vPage.addClass('white');
			} else if(anchorLink == 'video') {
				$vPage.fadeOut(1000);
			} else {
				$vPage.fadeIn(1000);
				$vPage.removeClass('white');
			}
		},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			slide_index = slideIndex;
			$('.section').find('.slide').removeClass('anistart');
			$('.section.active').find('.slide.active').addClass('anistart');

			if(anchorLink == 'ssNoah' && slideIndex == 0){
				$('.ssnoah').addClass('remove');
			} else {
				$('.ssnoah').removeClass('remove');
			}
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			$curPage.text( (nextSlideIndex + 1 ) );
        },
		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 1 && index == 2 && slide_index != 0){
				return false;
			}
		 }
	});

	$('.menudot li').on('click', function(e){
		e.preventDefault();
		
		var menuanchor = $(this).data('menuanchor');
		$.fn.fullpage.moveTo(menuanchor, 0);
	});

	$('.menulist li').on('click', function(e){
		e.preventDefault();
		
		$('.menulist').fadeOut(500);
		var menuanchor = $(this).data('menuanchor');
		$.fn.fullpage.moveTo(menuanchor, 0);
	});

	$('.enter').on('click', function(e){
		e.preventDefault();
		
		var menuanchor = $(this).data('menuanchor');
		$.fn.fullpage.moveTo(menuanchor, 0);
	});

	$('button.menu').click(function(){
		$('.menulist').fadeIn(500);
	});
	$('button.close').click(function(){
		$('.menulist').fadeOut(500);
	});

	/* intro */
	var $title1 = $('.intro .title1');
	var $title2 = $('.intro .title2');
	var $title3 = $('.intro .title3');


	$title1.delay(500).fadeIn(2000).fadeOut(1500);
	$title2.delay(3000).fadeIn(2000).fadeOut(500);
	$title3.delay(5000).fadeIn(1000);
	$('.intro').delay(6000).animate({'top':'-100%'},600);

	/*$(window).resize(function(){
		var $center =$('.resize');
			 $centerleft =$center.width();
		alert($centerleft);
		//$center.css({'left':-$centerleft})
	}).resize();*/
});