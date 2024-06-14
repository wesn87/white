$(document).ready(function() {
    // 歡迎頁面點擊事件
    $('#welcomePage').click(function() {
        $('#welcomePage').fadeOut(500, function() {
            $('#mainPage').removeClass('hidden');
        });
    });

    // 切換側邊欄顯示與隱藏
    $('#toggleSidebar').click(function() {
        $('#sidebar').toggleClass('show');
        $('#mainPage').toggleClass('dimmed');
        $(this).toggleClass('moved');
    });

    // 當點擊側邊欄外部時隱藏側邊欄
    $(document).click(function(event) {
        if (!$(event.target).closest('#sidebar, #toggleSidebar').length) {
            if ($('#sidebar').hasClass('show')) {
                $('#sidebar').removeClass('show');
                $('#mainPage').removeClass('dimmed');
                $('#toggleSidebar').removeClass('moved');
            }
        }
    });

    // 防止點擊側邊欄內部時關閉側邊欄
    $('#sidebar').click(function(event) {
        event.stopPropagation();
    });

    // 側邊欄連結
    $('#mainPageLink').click(function() {
        $('#mainContent').show();
        $('#secondContent').hide();
    });

    $('#secondPageLink').click(function() {
        $('#mainContent').hide();
        $('#secondContent').show();
    });


    // 頭像懸停效果
    $('#avatar').hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    $('#avatar1').hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    $('#picture').hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    $('#picture1').hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    $('#picture2').hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // 頭像點擊事件
    $('#avatar').click(function() {
        let interval = setInterval(function() {
            let x = Math.floor(Math.random() * ($(window).width() - 250));
            let y = Math.floor(Math.random() * ($(window).height() - 250));
            $('body').append('<img class="random" src="image/happy.jpg" style="left:' + x + 'px; top:' + y + 'px;">');
        }, 100);

        setTimeout(function() {
            clearInterval(interval);
            $('.random').remove();
            $('#welcomePage').fadeIn(500, function() {
                $('#mainPage').addClass('hidden');
            });
        }, 3000);
    });

    // 顏色切換開關
    $('#colorToggle').change(function() {
        if (this.checked) {
            $('#content').css('background-color', '#333').css('color', 'white');
        } else {
            $('#content').css('background-color', 'white').css('color', 'black');
        }
    });
});
