(function() {
    const nodelist = document.getElementById('list-section').querySelectorAll('.nested');
    const divyArray = Array.from(nodelist)
    dragula([document.querySelector('#list-section .container'), document.getElementById('available-items')].concat(divyArray), {
        copy: function(el, source) {
            console.log(source)
            return source === document.getElementById('available-items')
        },
        accepts: function(el, target) {
            return target !== document.getElementById('available-items')
        },
        removeOnSpill: function(el, target) {
            console.log(el, target);
        }
    }).on('drop', function(el, source) {
        if (!el.classList.contains('ex-moved') && el.children[0]) {
            el.children[0].insertAdjacentHTML('afterbegin', ' <a class="home-button"><span class="home-image unactive"></span></a>');
            el.children[0].insertAdjacentHTML('afterbegin', '<span class="drag-image"></div>');
            el.children[0].insertAdjacentHTML('beforeend', '<span class="delete-image"></div>');
            el.className += ' ex-moved';
        }
    });
})();
$(document).ready(function() {
    $(document).on("click", ".home-button", function() {
        $('.home-button').children().removeClass('active').addClass('unactive');
        $('.home-button').removeClass('show-home').addClass('hide-home');

        $(this).removeClass('hide-home').addClass('show-home');
        $(this).children().removeClass('unactive').addClass('active');
    });
});

// $('.home-button').click(function() {
//     $('.home-button').children().removeClass('active').addClass('unactive');
//     $('.home-button').removeClass('show-home').addClass('hide-home');

//     $(this).removeClass('hide-home').addClass('show-home');
//     $(this).children().removeClass('unactive').addClass('active');

// });

$(document).ready(function() {

    $(document).on("click", ".delete-image", function() {
        $(this).parent().remove();
    });
});