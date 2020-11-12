var pswpElement = document.querySelectorAll('.pswp')[0];
const blocks = document.querySelectorAll('.gallery img');
const blocksArr = [...blocks];

// build items array
var items = [
    { src: './img/g1.jpg', w: 1500, h: 900 },
    { src: './img/g2.jpg', w: 1500, h: 900 },
    { src: './img/g3.jpg', w: 1500, h: 900 },
    { src: './img/g4.jpg', w: 1500, h: 900 },
    { src: './img/g5.jpg', w: 1500, h: 900 },
    { src: './img/g6.jpg', w: 1500, h: 900 },
    { src: './img/g7.jpg', w: 1500, h: 900 },
    { src: './img/g8.jpg', w: 1500, h: 900 },
    { src: './img/g9.jpg', w: 1500, h: 900 },
    { src: './img/g10.jpg', w: 1500, h: 900 },
    { src: './img/g11.jpg', w: 1500, h: 900 },
    { src: './img/g12.jpg', w: 1500, h: 900 },
    { src: './img/g13.jpg', w: 1500, h: 900 },
    { src: './img/g14.jpg', w: 1500, h: 900 },
    { src: './img/g15.jpg', w: 1500, h: 900 },
    { src: './img/g16.jpg', w: 1500, h: 900 },
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

blocksArr.map((el, i) => {
    el.addEventListener('click', () => {
        options.index = i;
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });

    el.addEventListener('touchend', () => {
        options.index = i;
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});