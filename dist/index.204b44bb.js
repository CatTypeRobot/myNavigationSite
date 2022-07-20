!function() {
    "use strict";
    function e1(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    function t1(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }
    var n1 = t1(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = 1;
        t.default = function() {
            return "" + n++;
        }, e.exports = t.default;
    });
    e1(n1);
    var o1 = t1(function(e2, t2) {
        Object.defineProperty(t2, "__esModule", {
            value: !0
        }), t2.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30, n = null;
            return function() {
                for(var o = this, i = arguments.length, r = Array(i), a = 0; a < i; a++)r[a] = arguments[a];
                clearTimeout(n), n = setTimeout(function() {
                    e.apply(o, r);
                }, t);
            };
        }, e2.exports = t2.default;
    });
    e1(o1);
    var i1 = t1(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.SizeSensorId = "size-sensor-id", t.SensorStyle = "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0", t.SensorClassName = "size-sensor-object";
    });
    e1(i1);
    i1.SizeSensorId, i1.SensorStyle, i1.SensorClassName;
    var r1 = t1(function(e3, t3) {
        Object.defineProperty(t3, "__esModule", {
            value: !0
        }), t3.createSensor = void 0;
        var n2, r2 = (n2 = o1) && n2.__esModule ? n2 : {
            default: n2
        };
        t3.createSensor = function(e4) {
            var t4 = void 0, n = [], o2 = (0, r2.default)(function() {
                n.forEach(function(t) {
                    t(e4);
                });
            }), a = function() {
                t4 && t4.parentNode && (t4.contentDocument.defaultView.removeEventListener("resize", o2), t4.parentNode.removeChild(t4), t4 = void 0, n = []);
            };
            return {
                element: e4,
                bind: function(r) {
                    t4 || (t4 = function() {
                        "static" === getComputedStyle(e4).position && (e4.style.position = "relative");
                        var t = document.createElement("object");
                        return t.onload = function() {
                            t.contentDocument.defaultView.addEventListener("resize", o2), o2();
                        }, t.setAttribute("style", i1.SensorStyle), t.setAttribute("class", i1.SensorClassName), t.type = "text/html", e4.appendChild(t), t.data = "about:blank", t;
                    }()), -1 === n.indexOf(r) && n.push(r);
                },
                destroy: a,
                unbind: function(e) {
                    var o = n.indexOf(e);
                    -1 !== o && n.splice(o, 1), 0 === n.length && t4 && a();
                }
            };
        };
    });
    e1(r1);
    r1.createSensor;
    var a1 = t1(function(e5, t5) {
        Object.defineProperty(t5, "__esModule", {
            value: !0
        }), t5.createSensor = void 0;
        var n3, i2 = (n3 = o1) && n3.__esModule ? n3 : {
            default: n3
        };
        t5.createSensor = function(e6) {
            var t6 = void 0, n = [], o3 = (0, i2.default)(function() {
                n.forEach(function(t) {
                    t(e6);
                });
            }), r = function() {
                t6.disconnect(), n = [], t6 = void 0;
            };
            return {
                element: e6,
                bind: function(i) {
                    t6 || (t6 = function() {
                        var t = new ResizeObserver(o3);
                        return t.observe(e6), o3(), t;
                    }()), -1 === n.indexOf(i) && n.push(i);
                },
                destroy: r,
                unbind: function(e) {
                    var o = n.indexOf(e);
                    -1 !== o && n.splice(o, 1), 0 === n.length && t6 && r();
                }
            };
        };
    });
    e1(a1);
    a1.createSensor;
    var s1 = t1(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createSensor = void 0;
        t.createSensor = "undefined" != typeof ResizeObserver ? a1.createSensor : r1.createSensor;
    });
    e1(s1);
    s1.createSensor;
    var u1 = t1(function(e7, t7) {
        Object.defineProperty(t7, "__esModule", {
            value: !0
        }), t7.removeSensor = t7.getSensor = void 0;
        var o4, r = (o4 = n1) && o4.__esModule ? o4 : {
            default: o4
        };
        var a = {};
        t7.getSensor = function(e) {
            var t = e.getAttribute(i1.SizeSensorId);
            if (t && a[t]) return a[t];
            var n = (0, r.default)();
            e.setAttribute(i1.SizeSensorId, n);
            var o = (0, s1.createSensor)(e);
            return a[n] = o, o;
        }, t7.removeSensor = function(e) {
            var t = e.element.getAttribute(i1.SizeSensorId);
            e.element.removeAttribute(i1.SizeSensorId), e.destroy(), t && a[t] && delete a[t];
        };
    });
    e1(u1);
    u1.removeSensor, u1.getSensor;
    var c1 = t1(function(e8, t8) {
        Object.defineProperty(t8, "__esModule", {
            value: !0
        }), t8.clear = t8.bind = void 0;
        t8.bind = function(e, t) {
            var n = (0, u1.getSensor)(e);
            return n.bind(t), function() {
                n.unbind(t);
            };
        }, t8.clear = function(e) {
            var t = (0, u1.getSensor)(e);
            (0, u1.removeSensor)(t);
        };
    });
    e1(c1);
    var l1 = c1.clear, d1 = c1.bind, v1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
        return window.setTimeout(e, 1e3 / 60);
    }, f1 = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || window.clearTimeout, m = function(e) {
        return new Array(e).fill(0).map(function(e, t) {
            return t;
        });
    }, h = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    }, p = function() {
        function e9(e, t) {
            for(var n = 0; n < t.length; n++){
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e9(t.prototype, n), o && e9(t, o), t;
        };
    }();
    var y = function() {
        function e10(t9, n) {
            var o = this;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e10), this.randomPoints = function() {
                return m(o.c.count).map(function() {
                    return {
                        x: Math.random() * o.canvas.width,
                        y: Math.random() * o.canvas.height,
                        xa: 2 * Math.random() - 1,
                        ya: 2 * Math.random() - 1,
                        max: 6e3
                    };
                });
            }, this.el = t9, this.c = h({
                zIndex: -1,
                opacity: .5,
                color: "0,0,0",
                pointColor: "0,0,0",
                count: 99
            }, n), this.canvas = this.newCanvas(), this.context = this.canvas.getContext("2d"), this.points = this.randomPoints(), this.current = {
                x: null,
                y: null,
                max: 2e4
            }, this.all = this.points.concat([
                this.current
            ]), this.bindEvent(), this.requestFrame(this.drawCanvas);
        }
        return p(e10, [
            {
                key: "bindEvent",
                value: function() {
                    var e = this;
                    d1(this.el, function() {
                        e.canvas.width = e.el.clientWidth, e.canvas.height = e.el.clientHeight;
                    }), this.onmousemove = window.onmousemove, window.onmousemove = function(t) {
                        e.current.x = t.clientX - e.el.offsetLeft + document.scrollingElement.scrollLeft, e.current.y = t.clientY - e.el.offsetTop + document.scrollingElement.scrollTop, e.onmousemove && e.onmousemove(t);
                    }, this.onmouseout = window.onmouseout, window.onmouseout = function() {
                        e.current.x = null, e.current.y = null, e.onmouseout && e.onmouseout();
                    };
                }
            },
            {
                key: "newCanvas",
                value: function() {
                    "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
                    var e, t = document.createElement("canvas");
                    return t.style.cssText = "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:" + (e = this.c).zIndex + ";opacity:" + e.opacity, t.width = this.el.clientWidth, t.height = this.el.clientHeight, this.el.appendChild(t), t;
                }
            },
            {
                key: "requestFrame",
                value: function(e) {
                    var t = this;
                    this.tid = v1(function() {
                        return e.call(t);
                    });
                }
            },
            {
                key: "drawCanvas",
                value: function() {
                    var e = this, t = this.context, n = this.canvas.width, o = this.canvas.height, i = this.current, r3 = this.points, a = this.all;
                    t.clearRect(0, 0, n, o);
                    var s = void 0, u = void 0, c = void 0, l = void 0, d = void 0, v = void 0;
                    r3.forEach(function(r, f) {
                        for(r.x += r.xa, r.y += r.ya, r.xa *= r.x > n || r.x < 0 ? -1 : 1, r.ya *= r.y > o || r.y < 0 ? -1 : 1, t.fillStyle = "rgba(" + e.c.pointColor + ")", t.fillRect(r.x - .5, r.y - .5, 1, 1), u = f + 1; u < a.length; u++)null !== (s = a[u]).x && null !== s.y && (l = r.x - s.x, d = r.y - s.y, (v = l * l + d * d) < s.max && (s === i && v >= s.max / 2 && (r.x -= .03 * l, r.y -= .03 * d), c = (s.max - v) / s.max, t.beginPath(), t.lineWidth = c / 2, t.strokeStyle = "rgba(" + e.c.color + "," + (c + .2) + ")", t.moveTo(r.x, r.y), t.lineTo(s.x, s.y), t.stroke()));
                    }), this.requestFrame(this.drawCanvas);
                }
            },
            {
                key: "destroy",
                value: function() {
                    l1(this.el), window.onmousemove = this.onmousemove, window.onmouseout = this.onmouseout, f1(this.tid), this.canvas.parentNode.removeChild(this.canvas);
                }
            }
        ]), e10;
    }();
    y.version = "2.0.4";
    var w, b;
    new y(document.body, (w = document.getElementsByTagName("script"), {
        zIndex: (b = w[w.length - 1]).getAttribute("zIndex"),
        opacity: b.getAttribute("opacity"),
        color: b.getAttribute("color"),
        pointColor: b.getAttribute("pointColor"),
        count: Number(b.getAttribute("count")) || 99
    }));
}();

//# sourceMappingURL=index.204b44bb.js.map
