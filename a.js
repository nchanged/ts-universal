(function(____env___) {

})(function(s, i) {
   return {
      i: i,
      s: s,
      e: function(e) {
         var useAmd = !i && typeof define == 'function' && define.amd;
         for (var key in e) {
            var value = e[key];
            if (useAmd) {
               define(key, [], function() {
                  return value;
               });
            } else {
               s[key] = value
            }
         }
      }
   }
}(typeof exports !== "undefined" ? exports : this, typeof exports !== "undefined"));
