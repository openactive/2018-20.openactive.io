$(document).ready(function () {
    (function ($) {
        console.log('hello');

        $(function () {
            $("#tabs").tabs();
        });

    })(jQuery); // Fully reference jQuery after this point.
});

