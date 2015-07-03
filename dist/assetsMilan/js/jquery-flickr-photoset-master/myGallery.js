$(function() {
    // Set blueimp gallery options.
    $.extend(blueimp.Gallery.prototype.options, {
        useBootstrapModal: false,
        hidePageScrollbars: false
    });

    // Engage gallery.
    $('.gallery').flickr({
        apiKey: '6e2b6f4a8ad20061ce7cb3748ebb7531',
        photosetId: '72157650933599795'
    });
});