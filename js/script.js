var moon = document.getElementById('moon');
var menu = document.getElementById('menu');
var nav = document.getElementById('navbar')
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    })
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle')
    });
    $('#moon').click(function(){
            $(this).toggleClass('fa-sun');
            $('body').toggleClass('dark-theme');
    });
    $('#all').click(function(){
        $('.portfolio .image-container .box').show(1000)
    });
    $('#design').click(function(){
        $(' .portfolio .image-container .box.design').show(1000)
        $('.portfolio .image-container .box.website').hide()
        $('.portfolio .image-container .box.brand').hide()
        $('.portfolio .image-container .box.code').hide()
    });
    $('#website').click(function(){
        $(' .portfolio .image-container .box.website').show(1000)
        $('.portfolio .image-container .box.design').hide()
        $('.portfolio .image-container .box.brand').hide()
        $('.portfolio .image-container .box.code').hide()
    });
    $('#code').click(function(){
        $(' .portfolio .image-container .box.code').show(1000)
        $('.portfolio .image-container .box.design').hide()
        $('.portfolio .image-container .box.brand').hide()
        $('.portfolio .image-container .box.website').hide()
    });
    $('#brand').click(function(){
        $(' .portfolio .image-container .box.brand').show(1000)
        $('.portfolio .image-container .box.design').hide()
        $('.portfolio .image-container .box.code').hide()
        $('.portfolio .image-container .box.website').hide()
    });
})