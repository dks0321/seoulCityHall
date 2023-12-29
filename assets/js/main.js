

$('.select-btn').click(function(){
    // camelCase
    url=$("#country-lang").val()
    window.open(url)
})




//main swiper
const mainSlide = new Swiper('.sc-visual .slide-area', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false //사용자컨트롤이후의 유무ㅡ
    },
    pagination: {
        el: '.pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.prev',
        nextEl: '.next'
    }
})

$('.sc-visual .group-tab button').click(function () {
    idx=$(this).data('idx');
    $(this).addClass('on').siblings().removeClass('on');

    mainSlide.slideToLoop(idx)
})


mainSlide.on("slideChange",function(){
    console.log(this);
    if (this.realIndex >= 7) {
        $('.sc-visual .btn-citizen').addClass('on').siblings().removeClass('on');
    } else {
        $('.sc-visual .btn-news').addClass('on').siblings().removeClass('on');
    }
    
})












//banner slide
const bannerSlide = new Swiper('.sc-bannerslide .slide-area', {
    slidesPerView: 3,
    spaceBetween: 43,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false //사용자컨트롤이후의 유무ㅡ
    },
    pagination: {
        el: '.pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.prev',
        nextEl: '.next'
    }
})

const slideArr = [mainSlide,bannerSlide]
$('.swiper .control .start').click(function(){
    idx = $(this).data('slide')
    
    if ($(this).hasClass('on')) {
        slideArr[idx].autoplay.start();
        $(this).find('.blind').text("????")
    } else {
        slideArr[idx].autoplay.stop();
        $(this).find('.blind').text("????")
    }

    $(this).toggleClass('on');
})


$(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr >= 30) {
        $('.fix-top').addClass('show')
    } else {
        $('.fix-top').removeClass('show')
        
    }
})
$('.fix-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})




//관련기관클릭
$('.event14-item .menu').click(function(){

    if($(this).hasClass('on')){
        $('.event14-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
    }else{
        $('.event14-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
        $(this).addClass('on').siblings('.sub').stop().slideDown()
    }
})


$('.event14-area .sub li:first-child').keydown(function(e){
    if (e.keyCode === 9 && e.shiftKey) {
        $('.event14-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
    } 
})

$('.event14-area .sub li:last-child').keydown(function(e){
    if (e.keyCode === 9 && !e.shiftKey) {
        $('.event14-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
    } 
})