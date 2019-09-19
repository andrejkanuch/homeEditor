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
        console.log(el.classList.contains('ex-moved'), el);
        if (!el.classList.contains('ex-moved') && el.children[0]) {
            el.children[0].insertAdjacentHTML('afterbegin', '<span class="drag-image"></div>');
            el.className += ' ex-moved';
        }
    });
})();