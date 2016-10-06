(function($__exports__, $isBackend) {
        var __local__ = {};
        var define = function(n, d, f) {
            __local__[n] = { d: d, f: f }
        };
        var __resolve__ = function(name) {
            var m = __local__[name];
            if (m === undefined) {
                if ($isBackend) {
                    return require(name);
                } else {
                    $__exports__.__npm__ = $__exports__.__npm__ || {};
                    return $__exports__.__npm__[name];
                }
            }
            if (m.r) { return m.r; }
            m.r = {};
            var z = [__resolve__, m.r];
            for (var i = 2; i < m.d.length; i++) {
                z.push(__resolve__(m.d[i]));
            }
            m.f.apply(null, z);
            return m.r;
        };