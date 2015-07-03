$(function() {
    // Set blueimp gallery options.
    $.extend(blueimp.Gallery.prototype.options, {
        useBootstrapModal: false,
        hidePageScrollbars: false
    });

    // Engage gallery.
    $('.gallery').flickr({
        apiKey: '337a1f0c1ba0d512fed80e98540810d3',
        photosetId: '72157650915136622'
    });
});