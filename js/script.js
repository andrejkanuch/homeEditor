(function() {
    const nodelist = document.getElementById('list-section').querySelectorAll('.nested');
    const divyArray = Array.from(nodelist)
    dragula([document.querySelector('#list-section .container'), document.getElementById('special-items'), document.getElementById('available-items')].concat(divyArray), {
        copy: function(el, source) {
            return source === document.getElementById('available-items') || document.getElementById('special-items')
        },
        accepts: function(el, target) {
            return target !== document.getElementById('available-items') && target !== document.getElementById('special-items')
        },
        removeOnSpill: function(el, target) {
            // console.log(el, target);
        }
    }).on('drop', function(el, source) {
        if (!el.classList.contains('ex-moved') && el.children[0]) {
            let groupButtons =
                '<div class="buttons-group">' +
                '<span class="edit-image"></span>' +
                '<span class="home-image"></span>' +
                '<span class="delete-image"></span>' +
                '</div>'
            el.children[0].insertAdjacentHTML('beforeend', groupButtons);

            el.className += ' ex-moved';
        }
    });
})();
$(document).ready(function() {
    $(document).on("click", ".home-image", function() {
        $('.home-image').css("opacity", "0.1");
        $(this).css("opacity", "1");
        // $('.home-button').children().removeClass('active').addClass('unactive');
        // $('.home-button').removeClass('show-home').addClass('hide-home');

        // $(this).removeClass('hide-home').addClass('show-home');
        // $(this).children().removeClass('unactive').addClass('active');
    });

    $(document).on("click", ".delete-image", function() {
        $(this).parent().parent().remove();
    });
});