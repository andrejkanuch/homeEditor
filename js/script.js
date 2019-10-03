(function() {
    const nodelist = document.getElementById('list-section').querySelectorAll('.nested');
    const divyArray = Array.from(nodelist)
    dragula([document.querySelector('#list-section .container')], {
        removeOnSpill: true
    });
    dragula([document.querySelector('#list-section .container'), document.getElementById('special-items'), document.getElementById('available-items')].concat(divyArray), {
        copy: function(el, source) {
            return source === document.getElementById('available-items') || document.getElementById('special-items')
        },
        accepts: function(el, target) {
            return target !== document.getElementById('available-items') && target !== document.getElementById('special-items')
        },
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
        $('.home-image').removeClass('active-home');
        $(this).addClass('active-home')
    });

    $(document).on("click", ".delete-image", function() {
        $(this).closest('.ex-moved').remove();
    });
});