var __expose__ = function(n, m, w, c) {
    var e = __resolve__(n);
    var bc;
    if (!$isBackend) { var npm = $__exports__.__npm__ = $__exports__.__npm__ || {}; if (m) { bc = npm[m] } }
    var cs = c.split(",")
    for (var ln in __local__) { for (var i = 0; i < cs.length; i++) { if (ln.indexOf(cs[i]) === 0) { __resolve__(ln) } } }
    for (var k in e) {
        $isBackend || w ? $__exports__[k] = e[k] : null;
        bc ? bc[e] = e[k] : null;
    }
};
__expose__("$__exposed__", "$__module_name__", $__exposed2window__, "$__consume__");
})(typeof exports !== "undefined" ? exports : this, typeof exports !== "undefined");