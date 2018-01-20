$(document).ready(function () {
    (function ($) {
        console.log('hello');

        $(function () {
            $("#tabs").tabs();
        });



        //cache a reference to the tabs
        var tabs = $('.case-tab');
        $('.case-tab:first').addClass('current');
        $('.case-content:first').addClass('current');
        //on click to tab, turn it on, and turn previously-on tab off
        tabs.click(function () {
            console.log('clicked');
            var tab_id = $(this).attr('data-tab');

            $('.case-tab').removeClass('current');
            $('.case-content').removeClass('current');
            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        });
        //auto-rotate every 5 seconds
        setInterval(function () {
            //get currently-on tab
            var onTab = tabs.filter('.current');
            //click either next tab, if exists, else first one
            var nextTab = onTab.index() < tabs.length - 1 ? onTab.next() : tabs.first();
            nextTab.click();
        }, 5000);

        $('.notes-toggle').on("click", function () {
            $('.notes').slideToggle();
        });

        //looks for iframes wraps and adapts the height and width
        (function (window, document, undefined) {

            /*
             * Grab all iframes on the page or return
             */
            var iframes = document.getElementsByTagName('iframe');

            /*
             * Loop through the iframes array
             */
            for (var i = 0; i < iframes.length; i++) {

                var iframe = iframes[i],

                    /*
                     * RegExp, extend this if you need more players
                     */
                    players = /www.youtube.com|player.vimeo.com/;

                /*
                 * If the RegExp pattern exists within the current iframe
                 */
                if (iframe.src.search(players) > 0) {

                    /*
                     * Calculate the video ratio based on the iframe's w/h dimensions
                     */
                    var videoRatio = ( iframe.height / iframe.width ) * 100;

                    /*
                     * Replace the iframe's dimensions and position
                     * the iframe absolute, this is the trick to emulate
                     * the video ratio
                     */
                    iframe.style.position = 'absolute';
                    iframe.style.top = '0';
                    iframe.style.left = '0';
                    iframe.width = '100%';
                    iframe.height = '100%';

                    /*
                     * Wrap the iframe in a new <div> which uses a
                     * dynamically fetched padding-top property based
                     * on the video's w/h dimensions
                     */
                    var wrap = document.createElement('div');
                    wrap.className = 'fluid-vids';
                    wrap.style.width = '100%';
                    wrap.style.position = 'relative';
                    wrap.style.paddingTop = videoRatio + '%';

                    /*
                     * Add the iframe inside our newly created <div>
                     */
                    var iframeParent = iframe.parentNode;
                    iframeParent.insertBefore(wrap, iframe);
                    wrap.appendChild(iframe);

                }

            }

        })(window, document);


    })(jQuery); // Fully reference jQuery after this point.
});

