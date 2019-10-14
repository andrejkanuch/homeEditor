(function() {
    const nodelist = document.getElementById('list-section').querySelectorAll('.nested');
    const divyArray = Array.from(nodelist)
    dragula([document.querySelector('#list-section .container'), document.getElementById('special-items'), document.getElementById('available-items')].concat(divyArray), {
        copy: function(el, source) {
            return source === document.getElementById('available-items') || source === document.getElementById('special-items')
        },
        accepts: function(el, target) {
            return target !== document.querySelector('#special-items') && target !== document.querySelector('#available-items')
        },
    }).on('drop', function(el, source) {
        if (!el.classList.contains('ex-moved')) {
            console.log(el.children);
            var groupButtons =
                '<div class="buttons-group">' +
                '<span class="edit-image"></span>' +
                '<span class="home-image"></span>' +
                '<span class="delete-image"></span>' +
                '</div>'

            let dragImage = el.children[0].getElementsByClassName('drag-image');
            let defaultIcon = '<span class="settings-image"></span>';
            el.children[0].insertAdjacentHTML('beforeend', groupButtons);
            if (dragImage[0]) { dragImage[0].insertAdjacentHTML('afterend', defaultIcon); }
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
        let item = $(this).closest('.ex-moved');
        let nestedItem = item.parent()
        item.remove();
        if (nestedItem.children().length == 0 && nestedItem.parent().hasClass('sub-section')) {
            nestedItem.addClass("empty-folder")
        }
    });
});