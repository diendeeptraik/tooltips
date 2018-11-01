//<![CDATA[
// var copy = https://www.bacsiwindows.com
! function (_0x41afx1) {
    _0x41afx1.tooltipsy = function (_0x41afx2, _0x41afx3) {
        this.options = _0x41afx3, this["$el"] = _0x41afx1(_0x41afx2), this.title = this["$el"].attr("title") || "", this["$el"].attr("title", ""), this.random = parseInt(1e4 * Math.random()), this.ready = !1, this.shown = !1, this.width = 0, this.height = 0, this.delaytimer = null, this["$el"].data("tooltipsy", this), this.init()
    }, _0x41afx1.tooltipsy.prototype = {
        init: function () {
            var _0x41afx2, _0x41afx3 = this,
                _0x41afx4 = _0x41afx3["$el"],
                _0x41afx5 = _0x41afx4[0];
            _0x41afx3.settings = _0x41afx2 = _0x41afx1.extend({}, _0x41afx3.defaults, _0x41afx3.options), _0x41afx2.delay = +_0x41afx2.delay, "function" == typeof _0x41afx2.content && _0x41afx3.readify(), _0x41afx2.showEvent === _0x41afx2.hideEvent && "click" === _0x41afx2.showEvent ? _0x41afx4.toggle(function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), _0x41afx2.delay > 0 ? _0x41afx3.delaytimer = window.setTimeout(function () {
                    _0x41afx3.show(_0x41afx1)
                }, _0x41afx2.delay) : _0x41afx3.show(_0x41afx1)
            }, function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), window.clearTimeout(_0x41afx3.delaytimer), _0x41afx3.delaytimer = null, _0x41afx3.hide(_0x41afx1)
            }) : _0x41afx4.bind(_0x41afx2.showEvent, function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), _0x41afx3.delaytimer = window.setTimeout(function () {
                    _0x41afx3.show(_0x41afx1)
                }, _0x41afx2.delay || 0)
            }).bind(_0x41afx2.hideEvent, function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), window.clearTimeout(_0x41afx3.delaytimer), _0x41afx3.delaytimer = null, _0x41afx3.hide(_0x41afx1)
            })
        },
        show: function (_0x41afx2) {
            !1 === this.ready && this.readify();
            var _0x41afx3 = this,
                _0x41afx4 = _0x41afx3.settings,
                _0x41afx5 = _0x41afx3["$tipsy"],
                _0x41afx6 = _0x41afx3["$el"],
                _0x41afx7 = _0x41afx6[0],
                _0x41afx8 = _0x41afx3.offset(_0x41afx7);
            if (!1 === _0x41afx3.shown && (function (_0x41afx1) {
                    var _0x41afx2, _0x41afx3 = 0;
                    for (_0x41afx2 in _0x41afx1) {
                        _0x41afx1.hasOwnProperty(_0x41afx2) && _0x41afx3++
                    };
                    return _0x41afx3
                }(_0x41afx4.css) > 0 && _0x41afx3["$tip"].css(_0x41afx4.css), _0x41afx3.width = _0x41afx5.outerWidth(), _0x41afx3.height = _0x41afx5.outerHeight()), "cursor" === _0x41afx4.alignTo && _0x41afx2) {
                if ((_0x41afx9 = [_0x41afx2.clientX + _0x41afx4.offset[0], _0x41afx2.clientY + _0x41afx4.offset[1]])[0] + _0x41afx3.width > _0x41afx1(window).width()) {
                    _0x41afx9[1], _0x41afx9[0]
                } else {
                    _0x41afx9[1], _0x41afx9[0]
                }
            } else {
                var _0x41afx9 = [_0x41afx4.offset[0] < 0 ? _0x41afx8.left - Math.abs(_0x41afx4.offset[0]) - _0x41afx3.width : 0 === _0x41afx4.offset[0] ? _0x41afx8.left - (_0x41afx3.width - _0x41afx6.outerWidth()) / 2 : _0x41afx8.left + _0x41afx6.outerWidth() + _0x41afx4.offset[0], _0x41afx4.offset[1] < 0 ? _0x41afx8.top - Math.abs(_0x41afx4.offset[1]) - _0x41afx3.height : 0 === _0x41afx4.offset[1] ? _0x41afx8.top - (_0x41afx3.height - _0x41afx3["$el"].outerHeight()) / 2 : _0x41afx8.top + _0x41afx3["$el"].outerHeight() + _0x41afx4.offset[1]]
            };
            _0x41afx5.css({
                top: _0x41afx9[1] + "px",
                left: _0x41afx9[0] + "px"
            }), _0x41afx3.settings.show(_0x41afx2, _0x41afx5.stop(!0, !0))
        },
        hide: function (_0x41afx1) {
            var _0x41afx2 = this;
            !1 !== _0x41afx2.ready && (_0x41afx1 && _0x41afx1.relatedTarget === _0x41afx2["$tip"][0] ? _0x41afx2["$tip"].bind("mouseleave", function (_0x41afx1) {
                _0x41afx1.relatedTarget !== _0x41afx2["$el"][0] && _0x41afx2.settings.hide(_0x41afx1, _0x41afx2["$tipsy"].stop(!0, !0))
            }) : _0x41afx2.settings.hide(_0x41afx1, _0x41afx2["$tipsy"].stop(!0, !0)))
        },
        readify: function () {
            this.ready = !0, this["$tipsy"] = _0x41afx1("<div id=\"tooltipsy" + this.random + "\" style=\"position:fixed;z-index:2147483647;display:none\">").appendTo("body"), this["$tip"] = _0x41afx1("<div class=\"" + this.settings.className + "\">").appendTo(this.$tipsy), this["$tip"].data("rootel", this.$el);
            var _0x41afx2 = this["$el"],
                _0x41afx3 = this["$tip"];
            this["$tip"].html("" != this.settings.content ? "string" == typeof this.settings.content ? this.settings.content : this.settings.content(_0x41afx2, _0x41afx3) : this.title)
        },
        offset: function (_0x41afx1) {
            return this["$el"][0].getBoundingClientRect()
        },
        destroy: function () {
            this["$tipsy"] && (this["$tipsy"].remove(), _0x41afx1.removeData(this.$el, "tooltipsy"))
        },
        update: function () {
            this.title = this["$el"].attr("title"), this["$tipsy"] && this["$tipsy"].remove(), this.ready = !1
        },
        defaults: {
            alignTo: "element",
            offset: [0, -1],
            content: "",
            show: function (_0x41afx1, _0x41afx2) {
                _0x41afx2.fadeIn()
            },
            hide: function (_0x41afx1, _0x41afx2) {
                _0x41afx2.fadeOut()
            },
            css: {},
            className: "tooltipsy",
            delay: 0,
            showEvent: "mouseenter",
            hideEvent: "mouseleave"
        }
    }, _0x41afx1.fn.tooltipsy = function (_0x41afx2) {
        return this.each(function () {
            new _0x41afx1.tooltipsy(this, _0x41afx2)
        })
    }
}(jQuery),
function (_0x41afx1) {
    _0x41afx1.tooltipsy2 = function (_0x41afx2, _0x41afx3) {
        this.options = _0x41afx3, this["$el"] = _0x41afx1(_0x41afx2), this.title = this["$el"].attr("title") || "", this["$el"].attr("title", ""), this.random = parseInt(1e4 * Math.random()), this.ready = !1, this.shown = !1, this.width = 0, this.height = 0, this.delaytimer = null, this["$el"].data("tooltipsy2", this), this.init()
    }, _0x41afx1.tooltipsy2.prototype = {
        init: function () {
            var _0x41afx2, _0x41afx3 = this,
                _0x41afx4 = _0x41afx3["$el"],
                _0x41afx5 = _0x41afx4[0];
            _0x41afx3.settings = _0x41afx2 = _0x41afx1.extend({}, _0x41afx3.defaults, _0x41afx3.options), _0x41afx2.delay = +_0x41afx2.delay, "function" == typeof _0x41afx2.content && _0x41afx3.readify(), _0x41afx2.showEvent === _0x41afx2.hideEvent && "click" === _0x41afx2.showEvent ? _0x41afx4.toggle(function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), _0x41afx2.delay > 0 ? _0x41afx3.delaytimer = window.setTimeout(function () {
                    _0x41afx3.show(_0x41afx1)
                }, _0x41afx2.delay) : _0x41afx3.show(_0x41afx1)
            }, function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), window.clearTimeout(_0x41afx3.delaytimer), _0x41afx3.delaytimer = null, _0x41afx3.hide(_0x41afx1)
            }) : _0x41afx4.bind(_0x41afx2.showEvent, function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), _0x41afx3.delaytimer = window.setTimeout(function () {
                    _0x41afx3.show(_0x41afx1)
                }, _0x41afx2.delay || 0)
            }).bind(_0x41afx2.hideEvent, function (_0x41afx1) {
                "click" === _0x41afx2.showEvent && "A" == _0x41afx5.tagName && _0x41afx1.preventDefault(), window.clearTimeout(_0x41afx3.delaytimer), _0x41afx3.delaytimer = null, _0x41afx3.hide(_0x41afx1)
            })
        },
        show: function (_0x41afx2) {
            !1 === this.ready && this.readify();
            var _0x41afx3 = this,
                _0x41afx4 = _0x41afx3.settings,
                _0x41afx5 = _0x41afx3["$tipsy"],
                _0x41afx6 = _0x41afx3["$el"],
                _0x41afx7 = _0x41afx6[0],
                _0x41afx8 = _0x41afx3.offset(_0x41afx7);
            if (!1 === _0x41afx3.shown && (function (_0x41afx1) {
                    var _0x41afx2, _0x41afx3 = 0;
                    for (_0x41afx2 in _0x41afx1) {
                        _0x41afx1.hasOwnProperty(_0x41afx2) && _0x41afx3++
                    };
                    return _0x41afx3
                }(_0x41afx4.css) > 0 && _0x41afx3["$tip"].css(_0x41afx4.css), _0x41afx3.width = _0x41afx5.outerWidth(), _0x41afx3.height = _0x41afx5.outerHeight()), "cursor" === _0x41afx4.alignTo && _0x41afx2) {
                if ((_0x41afx9 = [_0x41afx2.clientX + _0x41afx4.offset[0], _0x41afx2.clientY + _0x41afx4.offset[1]])[0] + _0x41afx3.width > _0x41afx1(window).width()) {
                    _0x41afx9[1], _0x41afx9[0]
                } else {
                    _0x41afx9[1], _0x41afx9[0]
                }
            } else {
                var _0x41afx9 = [_0x41afx4.offset[0] < 0 ? _0x41afx8.left - Math.abs(_0x41afx4.offset[0]) - _0x41afx3.width : 0 === _0x41afx4.offset[0] ? _0x41afx8.left - (_0x41afx3.width - _0x41afx6.outerWidth()) / 2 : _0x41afx8.left + _0x41afx6.outerWidth() + _0x41afx4.offset[0], _0x41afx4.offset[1] < 0 ? _0x41afx8.top - Math.abs(_0x41afx4.offset[1]) - _0x41afx3.height : 0 === _0x41afx4.offset[1] ? _0x41afx8.top - (_0x41afx3.height - _0x41afx3["$el"].outerHeight()) / 2 : _0x41afx8.top + _0x41afx3["$el"].outerHeight() + _0x41afx4.offset[1]]
            };
            _0x41afx5.css({
                top: _0x41afx9[1] + "px",
                left: _0x41afx9[0] + "px"
            }), _0x41afx3.settings.show(_0x41afx2, _0x41afx5.stop(!0, !0))
        },
        hide: function (_0x41afx1) {
            var _0x41afx2 = this;
            !1 !== _0x41afx2.ready && (_0x41afx1 && _0x41afx1.relatedTarget === _0x41afx2["$tip"][0] ? _0x41afx2["$tip"].bind("mouseleave", function (_0x41afx1) {
                _0x41afx1.relatedTarget !== _0x41afx2["$el"][0] && _0x41afx2.settings.hide(_0x41afx1, _0x41afx2["$tipsy"].stop(!0, !0))
            }) : _0x41afx2.settings.hide(_0x41afx1, _0x41afx2["$tipsy"].stop(!0, !0)))
        },
        readify: function () {
            this.ready = !0, this["$tipsy"] = _0x41afx1("<div id=\"tooltipsy2" + this.random + "\" style=\"position:fixed;z-index:2147483647;display:none\">").appendTo("body"), this["$tip"] = _0x41afx1("<div class=\"" + this.settings.className + "\">").appendTo(this.$tipsy), this["$tip"].data("rootel", this.$el);
            var _0x41afx2 = this["$el"],
                _0x41afx3 = this["$tip"];
            this["$tip"].html("" != this.settings.content ? "string" == typeof this.settings.content ? this.settings.content : this.settings.content(_0x41afx2, _0x41afx3) : this.title)
        },
        offset: function (_0x41afx1) {
            return this["$el"][0].getBoundingClientRect()
        },
        destroy: function () {
            this["$tipsy"] && (this["$tipsy"].remove(), _0x41afx1.removeData(this.$el, "tooltipsy2"))
        },
        update: function () {
            this.title = this["$el"].attr("title"), this["$tipsy"] && this["$tipsy"].remove(), this.ready = !1
        },
        defaults: {
            alignTo: "element",
            offset: [0, -1],
            content: "",
            show: function (_0x41afx1, _0x41afx2) {
                _0x41afx2.fadeIn()
            },
            hide: function (_0x41afx1, _0x41afx2) {
                _0x41afx2.fadeOut()
            },
            css: {},
            className: "tooltipsy2",
            delay: 0,
            showEvent: "mouseenter",
            hideEvent: "mouseleave"
        }
    }, _0x41afx1.fn.tooltipsy2 = function (_0x41afx2) {
        return this.each(function () {
            new _0x41afx1.tooltipsy2(this, _0x41afx2)
        })
    }
}(jQuery);
$(".bsw-tl").tooltipsy({
    offset: [0, 10],
    show: function (_0x41afx2, _0x41afx1) {
        _0x41afx1.css({
            left: parseInt(_0x41afx1[0].style.left.replace(/[a-z]/g, "")),
            display: "block"
        }).animate({
            left: parseInt(_0x41afx1[0].style.left.replace(/[a-z]/g, ""))
        }, 0)
    },
    hide: function (_0x41afx2, _0x41afx1) {
        _0x41afx1.hide()
    }
}), $(".bsw-tls").tooltipsy2({
    offset: [10, 0],
    show: function (_0x41afx2, _0x41afx1) {
        _0x41afx1.css({
            left: parseInt(_0x41afx1[0].style.left.replace(/[a-z]/g, "")),
            display: "block"
        }).animate({
            left: parseInt(_0x41afx1[0].style.left.replace(/[a-z]/g, ""))
        }, 0)
    },
    hide: function (_0x41afx2, _0x41afx1) {
        _0x41afx1.hide()
    }
})
//]]>