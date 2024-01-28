!(function ($) {
    const TypedMdc = function ($element,options) {
        this.options = options;
        var n = this;
        if ($element) {
            function type(text, i, fnCallback) {
                if (i < (text.length)) {
                    $element.html(text.substring(0, i + 1));
                    setTimeout(function () {
                        type(text, i + 1, fnCallback)
                    }, 100);
                } else if (typeof fnCallback == 'function') {
                    setTimeout(fnCallback, n.options.delay);
                }
            }

            function Start(i) {
                if (typeof n.options.dataText[i] == 'undefined') {
                    setTimeout(function () {
                        Start(0);
                    }, 2000);
                } else if (i < n.options.dataText[i].length) {
                    type(n.options.dataText[i], 0, function () {
                        // after callback (and whole text has been animated), start next text
                        Start(i + 1);
                    });
                }
            }

            const highestId = window.setTimeout(() => {
                for (let i = highestId; i >= 0; i--) {
                    window.clearInterval(i);
                }
            }, 0);
            Start(0);
        }
    }

    $.fn.TypedMdc = function (options) {
        return new TypedMdc($(this),options);
    };
})(window.jQuery);