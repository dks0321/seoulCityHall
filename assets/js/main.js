

$('.select-btn').click(function(){
    // camelCase
    url=$("#countryLang").val()
    window.open(url)
})

//상단으로 올라가기 버튼 이벤트
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
//메인 슬라이드 탭버튼 이벤트
$('.sc-visual .group-tab button').click(function () {
    idx=$(this).data('idx');
    $(this).addClass('on').siblings().removeClass('on');

    mainSlide.slideToLoop(idx)
})
//메인 슬라이드 변경시 탭버튼 이벤트
mainSlide.on("slideChange",function(){
    console.log(this);
    if (this.realIndex >= 7) {
        $('.sc-visual .btn-citizen').addClass('on').siblings().removeClass('on');
    } else {
        $('.sc-visual .btn-news').addClass('on').siblings().removeClass('on');
    }
    
})
//배너 슬라이드
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
//슬라이드이벤트 정지버튼 이벤트
const slideArr = [mainSlide,bannerSlide]
$('.swiper .control .start').click(function(){
    idx = $(this).data('slide')
    
    if ($(this).hasClass('on')) {
        slideArr[idx].autoplay.start();
        $(this).find('.blind').text()
    } else {
        slideArr[idx].autoplay.stop();
        $(this).find('.blind').text()
    }
    $(this).toggleClass('on');
})


//관련기관 클릭 이벤트
$('.relate-item .menu').click(function(){
    if($(this).hasClass('on')){
        $('.relate-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
    }else{
        $('.relate-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
        $(this).addClass('on').siblings('.sub').stop().slideDown()
    }
})

//키보드 탭 이벤트 - 키코드
$('.sc-relate .sub li:first-child').keydown(function(e){
    if (e.keyCode === 9 && e.shiftKey) {
        $('.relate-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
    } 
})
$('.sc-relate .sub li:last-child').keydown(function(e){
    if (e.keyCode === 9 && !e.shiftKey) {
        $('.relate-item .menu').removeClass('on').siblings('.sub').stop().slideUp()
    } 
})