$(function() {
    // Set blueimp gallery options.
    $.extend(blueimp.Gallery.prototype.options, {
        useBootstrapModal: false,
        hidePageScrollbars: false
    });

    // Engage gallery.
    $('.gallery').flickr({
        apiKey: '00a42d2ba16285804248ba23c75247d9',
        photosetId: '72157650933004945'
    });
});