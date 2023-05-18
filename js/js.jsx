//ad
$(function(){
    $('.mutltiple-item').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
		autoplaySpeed: 1800,
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        });
})

//可投注項
$(function(){
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute
            ('data-target');
            const c = +counter.innerText;

            const increment = target / 100000000 ;

            if (c < target){
                counter.innerText= `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            }
        };
        updateCounter();
    });
})


//filter open + close
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })
 
    //請先登入
    $(".plzLogIn").on("click",function(){
        $(".jumpWindow")
        .removeClass('display');
        $('.filter,.jumpWindow.unLogIn')
        .addClass('display');
    })

    //立即註冊
    $(".filter .unLogIn .signUp").click(function(){
        $('.jumpWindow.signUP').addClass('display');
        $(".unLogIn").removeClass('display');
    })

    //註冊
    $(".signUp").on("click",function(){
        $(".filter,.jumpWindow.signUP").addClass("display");
    })

    //註冊成功!
    $(".filter .signUP .submit").click(function(){
        $('.jumpWindow.applySuccess').addClass('display');
        $(".signUP").removeClass('display');
    })

    //公告
    $('.notice .content .showAll').on("click",function(){
        $('.showMore').addClass('display');
        $('.notice').removeClass('display');
    })

    //back
    $('.showMore .back').on("click",function(){
        $('.notice').addClass('display');
        $('.showMore').removeClass('display');
    })
})
