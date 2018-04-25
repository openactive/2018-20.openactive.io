$(document).ready(function () {
    (function ($) {



        $(".demo").ycp({
            apikey : 'AIzaSyB_zuXrp0TyGsod6g2PtzT5jlIO0j6z1X8'
        });

        $('.diagram img').each(function( i ){
          $(this).delay(1000*i).fadeTo(1000,1);
        });


        TweenMax.staggerFrom(".unticked .svg", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 1);


        $('.open').change(function() {
            TweenMax.staggerTo(".unticked .svg", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
            $('.ticked').css({
                'opacity' : '1',
            });
            TweenMax.staggerFrom(".ticked .svg", 2, {scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut, force3D:true}, 1);
        });


        $(".extra-content").hide();

        $('.show_hide-content').on("click", function (event) {
            event.preventDefault();
            $(this).parent('p').siblings('.extra-content').slideToggle();
            if ($(this).html() == 'See more') {
                $(this).html('See less');
            } else {
                $(this).html('See more');
            }
        });


        $('#video').hover(
            function () {
                $(this).parent('.fluid-vids').siblings('.mask').fadeOut();
            }
            // function() {
            //     $(this).parent('.fluid-vids').siblings('.mask').fadeIn();
            // }
        );

        $(".mobile-show").hide();
        if ($(window).width() < 500) {
            $(".mobile-show").show();
            $(".mobile-hide-content:gt(5)").hide();

            $('.mobile-show').on("click", function () {
                $('.mobile-hide-content').show();
            });


        }

        $(".further-code").hide();

        $('.data-show').on("click", function () {
            if ($(this).html() == 'Show me more') {
                $(this).html('Show me less');
            } else {
                $(this).html('Show me more');
            }
            $('.further-code').slideToggle();
        });



        $('.booking-tab.slim').addClass('hide');
        $('.booking-tab:gt(7)').addClass('hide');
        $('#booking-filter').keyup(function () {
            var filter = this.value.toLowerCase();  // no need to call jQuery here

            $('nav > .booking-tab').each(function() {
                /* cache a reference to the current .media (you're using it twice) */
                var _this = $(this);
                var title = _this.text().toLowerCase();

                /*
                 title and filter are normalized in lowerCase letters
                 for a case insensitive search
                 */
                if (title.indexOf(filter) < 0) {
                    _this.addClass('hide');
                }
                else{
                    _this.removeClass('hide');

                }
            });
        });
        $('#booking-filter').keyup(function () {
            var filter = this.value;
            if(filter <= 0){
                $('.booking-tab:gt(7)').addClass('hide');
                $('.booking-tab.slim').addClass('hide');
            }
        });

        $('#booking-filter').keyup(function () { 
    
             $('.notListed').fadeIn();
        });

        $('#booking-filter').blur(function () { 
             $('.notListed').fadeOut();
             $('#booking-filter').val('');
        });



        hljs.initHighlightingOnLoad();


        if ($(".slides").length > 0) {
            const mySiema = new Siema({
                selector: '.slides',
                duration: 800,
                loop: true,
                easing: 'ease-out',
                startIndex: 0,
                draggable: true,
                perPage: 1,
                multipleDrag: true,
            });
            // listen for keydown event
            // setInterval(() => mySiema.next(), 5000);

            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');

            // prev.addEventListener('click', () => mySiema.prev());
            // next.addEventListener('click', () => mySiema.next());

            prev.on("click", function () {
                mySiema.prev()
            });
            next.on("click", function () {
                mySiema.next()
            });

        }
        if ($(".slides-2").length > 0) {
            const mySiema2 = new Siema({
                selector: '.slides-2',
                duration: 800,
                loop: true,
                easing: 'ease-out',
                startIndex: 0,
                draggable: true,
                perPage: 1,
                multipleDrag: true,
            });
            // listen for keydown event
            // setInterval(() => mySiema.next(), 5000);

            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');

            // prev.addEventListener('click', () => mySiema2.prev());
            // next.addEventListener('click', () => mySiema2.next());
            $('.prev').click(function () {
                mySiema2.prev()
            });
            $('.next').click(function () {
                mySiema2.next()
            });


        }


        $('.global-palette').on("click", function () {
            $('.page')
                .removeClass('startup-template')
                .removeClass('publish-template')
                .removeClass('use-template')
                .addClass('global-template')
        });

        $('.use-palette').on("click", function () {
            $('.page')
                .removeClass('startup-template')
                .removeClass('publish-template')
                .removeClass('global-template')
                .addClass('use-template')
        });

        $('.publish-palette').on("click", function () {
            $('.page')
                .removeClass('startup-template')
                .removeClass('use-template')
                .removeClass('global-template')
                .addClass('publish-template')
        });

        $('.startups-palette').on("click", function () {
            $('.page')
                .removeClass('publish-template')
                .removeClass('use-template')
                .removeClass('global-template')
                .addClass('startup-template')
        });


        $.fn.isInViewport = function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
        if ($(".accelerator-template").length > 0) {


            $(window).on('resize scroll', function () {
                if ($('.stats').isInViewport()) {
                    var el = document.querySelector('.years');
                    od = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    od.update(5);

                    var el = document.querySelector('.startups');
                    startupsod = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    startupsod.update(124);

                    var el = document.querySelector('.world');
                    worldod = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    worldod.update(24);

                    var el = document.querySelector('.cohorts');
                    cohortsod = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    cohortsod.update(23);

                    var el = document.querySelector('.investment');
                    investmentod = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    investmentod.update(30);

                    var el = document.querySelector('.jobs');
                    jobsod = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    jobsod.update(400);
                }
            });

        }


        if ($(".stats-row").length > 0) {


            $(window).on('resize scroll', function () {
                if ($('.stats-row').isInViewport()) {
                    var el = document.querySelector('.com-members');
                    members = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    members.update(84);

                    var el = document.querySelector('.com-startups');
                    startups = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    startups.update(10);

                    var el = document.querySelector('.com-published');
                    published = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    published.update(20);

                    var el = document.querySelector('.com-champions');
                    champions = new Odometer({
                        el: el,
                        value: 333555,
                        // Any option (other than auto and selector) can be passed in here
                        format: '',
                        theme: 'default'
                    });
                    champions.update(10);

                }
            });

        }


        $(".slidingDiv").hide();
        $('.show_hide').on("click", function () {
            $(this).children('.slidingDiv').slideToggle();
        });


        var $onScrollNav = $('.mobile_button'),
            $header = $('header#mainHeader'),
            scrollClass = 'on-scroll',
            activateAtY = 360;

        function deactivateHeader() {
            if (!$header.hasClass(scrollClass)) {
                $header.addClass(scrollClass);
            }
            if (!$onScrollNav.hasClass(scrollClass)) {
                $onScrollNav.addClass(scrollClass);
            }
        }

        function activateHeader() {
            if ($header.hasClass(scrollClass)) {
                $header.removeClass(scrollClass);
            }
            if ($onScrollNav.hasClass(scrollClass)) {
                $onScrollNav.removeClass(scrollClass);
            }
        }


        $(window).scroll(function () {
            if ($(window).scrollTop() > activateAtY) {
                deactivateHeader();
                // $('#nav-icon3').removeClass('open');
                // $('.mobile-nav').css('display', 'none');
            } else {
                activateHeader();
                // $('.mobile-nav').css('display', 'inline-flex');
                // if ($('#nav-icon3').hasClass('open')) {
                //     $('#nav-icon3').removeClass('open');
                //     $('.mobile-nav').slideUp();
                // }
            }

        });


        //looks for iframes wraps and adapts the height and width
        (function (window, document, undefined) {

            /*
             * Grab all iframes on the page or return
             */
            // var iframes = document.getElementsByTagName('iframe');
            var iframes = $('iframe');

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


        //HERO BLOCK
        //cache a reference to the tabs
        var tabsHero = $('.hero-tab');
        $('.hero-tab:first').addClass('current');
        $('.hero-content:first').addClass('current');
        //on click to tab, turn it on, and turn previously-on tab off
        tabsHero.click(function () {
            var tab_id = $(this).attr('data-tab');

            $('.hero-tab').removeClass('current');
            $('.hero-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
        // //auto-rotate every 5 seconds
        // setInterval(function () {
        //     //get currently-on tab
        //     var onTab = tabsHero.filter('.current');
        //     //click either next tab, if exists, else first one
        //     var nextTab = onTab.index() < tabsHero.length - 1 ? onTab.next() : tabsHero.first();
        //     nextTab.click();
        // }, 5000);


        //CASE STUDIES
        //cache a reference to the tabs
        var tabs = $('.case-tab');
        $('.case-tab:first')
            .addClass('current')
            .attr("aria-selected", "true");

        $('.case-content:first')
            .addClass('current')
            .attr("aria-hidden", "false");

        $('aside .case-content:first')
            .addClass('current')
            .attr("aria-hidden", "false");


        //on click to tab, turn it on, and turn previously-on tab off
        tabs.click(function () {
            var tab_id = $(this).attr('data-tab');
            $('.case-tab')
                .removeClass('current')
                .attr("aria-selected", "false");
            $('.case-content')
                .removeClass('current')
                .attr("aria-hidden", "true");

            $('aside .case-content')
                .removeClass('current')
                .attr("aria-hidden", "true");

            $(this)
                .addClass('current')
                .attr("aria-hidden", "false");
            $("#" + tab_id)
                .addClass('current')
                .attr("aria-hidden", "false");

            $("[data-id=" + tab_id + "]")
                .addClass('current')
                .attr("aria-hidden", "false");
        });
        //auto-rotate every 5 seconds
        setInterval(function () {
            //get currently-on tab
            var onTab = tabs.filter('.current');
            //click either next tab, if exists, else first one
            var nextTab = onTab.index() < tabs.length - 1 ? onTab.next() : tabs.first();
            nextTab.click();
        }, 8000);


        //TABS
        //cache a reference to the tabs
        var tabsTab = $('.tabsList .tablink');
        $('.tabsList .tablink:first')
            .addClass('current')
            .attr("aria-selected", "true");


        $('.tabPanel:first')
            .addClass('current')
            .attr("aria-hidden", "false");

        //on click to tab, turn it on, and turn previously-on tab off
        tabsTab.click(function ($e) {
            $e.preventDefault();
            var tab_idTab = $(this).find('a').attr('href');
            $('.tabsList .tablink')
                .removeClass('current')
                .attr("aria-selected", "false");

            $('.tabPanel')
                .removeClass('current')
                .attr("aria-hidden", "true");

            $(this)
                .addClass('current')
                .attr("aria-selected", "true");
            $(tab_idTab)
                .addClass('current')
                .attr("aria-hidden", "false");
        });

        var hash = document.location.hash;
        if (hash) {
            $('.tabsList .tablink')
                .removeClass('current')
                .attr("aria-selected", "false");
            $('.tabPanel')
                .removeClass('current')
                .attr("aria-hidden", "true");

            $('.tabsList .tablink a').each(function(){
                if($(this).attr('href') == hash ){
                    $(this).parent('.tablink')
                        .addClass('current')
                        .attr("aria-selected", "true");
                }
            });
            $(hash)
                .addClass('current')
                .attr("aria-hidden", "false");
            $("html, body").animate({ scrollTop: $('#tabs').offset().top -100 }, 1500);

        }

        $('.notes-toggle').on("click", function () {
            $('.note-wrap').slideToggle();
        });


        //MATCH HEIGHT OF CASE STUDY CONTENT
        // $('.matchHeight').matchHeight({
        //     target: $('.match_this'),
        //     property: 'height'
        // });

    })(jQuery); // Fully reference jQuery after this point.

    /*! modernizr 3.5.0 (Custom Build) | MIT *
     * https://modernizr.com/download/?-cssgrid_cssgridlegacy-setclasses !*/
    !function (e, n, t) {
        function r(e, n) {
            return typeof e === n
        }

        function o() {
            var e, n, t, o, s, i, l;
            for (var a in w)if (w.hasOwnProperty(a)) {
                if (e = [], n = w[a], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)i = e[s], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = o : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = o), C.push((o ? "" : "no-") + l.join("-"))
            }
        }

        function s(e) {
            var n = _.className, t = Modernizr._config.classPrefix || "";
            if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(r, "$1" + t + "js$2")
            }
            Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? _.className.baseVal = n : _.className = n)
        }

        function i(e, n) {
            return !!~("" + e).indexOf(n)
        }

        function l() {
            return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
        }

        function a(e, n) {
            return function () {
                return e.apply(n, arguments)
            }
        }

        function u(e, n, t) {
            var o;
            for (var s in e)if (e[s] in n)return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? a(o, t || n) : o);
            return !1
        }

        function f(e) {
            return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
                return n + t.toUpperCase()
            }).replace(/^-/, "")
        }

        function c(n, t, r) {
            var o;
            if ("getComputedStyle" in e) {
                o = getComputedStyle.call(e, n, t);
                var s = e.console;
                if (null !== o) r && (o = o.getPropertyValue(r)); else if (s) {
                    var i = s.error ? "error" : "log";
                    s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else o = !t && n.currentStyle && n.currentStyle[r];
            return o
        }

        function d(e) {
            return e.replace(/([A-Z])/g, function (e, n) {
                return "-" + n.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function p() {
            var e = n.body;
            return e || (e = l(x ? "svg" : "body"), e.fake = !0), e
        }

        function m(e, t, r, o) {
            var s, i, a, u, f = "modernizr", c = l("div"), d = p();
            if (parseInt(r, 10))for (; r--;)a = l("div"), a.id = o ? o[r] : f + (r + 1), c.appendChild(a);
            return s = l("style"), s.type = "text/css", s.id = "s" + f, (d.fake ? d : c).appendChild(s), d.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), c.id = f, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = _.style.overflow, _.style.overflow = "hidden", _.appendChild(d)), i = t(c, e), d.fake ? (d.parentNode.removeChild(d), _.style.overflow = u, _.offsetHeight) : c.parentNode.removeChild(c), !!i
        }

        function g(n, r) {
            var o = n.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; o--;)if (e.CSS.supports(d(n[o]), r))return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var s = []; o--;)s.push("(" + d(n[o]) + ":" + r + ")");
                return s = s.join(" or "), m("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == c(e, null, "position")
                })
            }
            return t
        }

        function y(e, n, o, s) {
            function a() {
                c && (delete N.style, delete N.modElem)
            }

            if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
                var u = g(e, o);
                if (!r(u, "undefined"))return u
            }
            for (var c, d, p, m, y, v = ["modernizr", "tspan", "samp"]; !N.style && v.length;)c = !0, N.modElem = l(v.shift()), N.style = N.modElem.style;
            for (p = e.length, d = 0; p > d; d++)if (m = e[d], y = N.style[m], i(m, "-") && (m = f(m)), N.style[m] !== t) {
                if (s || r(o, "undefined"))return a(), "pfx" == n ? m : !0;
                try {
                    N.style[m] = o
                } catch (h) {
                }
                if (N.style[m] != y)return a(), "pfx" == n ? m : !0
            }
            return a(), !1
        }

        function v(e, n, t, o, s) {
            var i = e.charAt(0).toUpperCase() + e.slice(1), l = (e + " " + P.join(i + " ") + i).split(" ");
            return r(n, "string") || r(n, "undefined") ? y(l, n, o, s) : (l = (e + " " + z.join(i + " ") + i).split(" "), u(l, n, t))
        }

        function h(e, n, r) {
            return v(e, t, t, n, r)
        }

        var C = [], w = [], S = {
            _version: "3.5.0",
            _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e])
                }, 0)
            },
            addTest: function (e, n, t) {
                w.push({name: e, fn: n, options: t})
            },
            addAsyncTest: function (e) {
                w.push({name: null, fn: e})
            }
        }, Modernizr = function () {
        };
        Modernizr.prototype = S, Modernizr = new Modernizr;
        var _ = n.documentElement, x = "svg" === _.nodeName.toLowerCase(), b = "Moz O ms Webkit",
            P = S._config.usePrefixes ? b.split(" ") : [];
        S._cssomPrefixes = P;
        var z = S._config.usePrefixes ? b.toLowerCase().split(" ") : [];
        S._domPrefixes = z;
        var E = {elem: l("modernizr")};
        Modernizr._q.push(function () {
            delete E.elem
        });
        var N = {style: E.elem.style};
        Modernizr._q.unshift(function () {
            delete N.style
        }), S.testAllProps = v, S.testAllProps = h, Modernizr.addTest("cssgridlegacy", h("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", h("grid-template-rows", "none", !0)), o(), s(C), delete S.addTest, delete S.addAsyncTest;
        for (var T = 0; T < Modernizr._q.length; T++)Modernizr._q[T]();
        e.Modernizr = Modernizr
    }(window, document);
});

