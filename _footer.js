__ts__.expose(__scope__, "$_exposed_");})
(function($scope, $isBackend) {
   var npmName = "$_npm_";
   if (!$isBackend && npmName){
      $scope.__npm__ = $scope.__npm__ || {};
      $scope.__npm__[npmName] = $scope.__npm__[npmName] || {};
   };
   var ts = {
      register: {},
      pathJoin: function() {
         var parts = [];
         for (var i = 0, l = arguments.length; i < l; i++) {
            parts = parts.concat(arguments[i].split("/"));
         }
         var newParts = [];
         for (i = 0, l = parts.length; i < l; i++) {
            var part = parts[i];
            if (!part || part === ".") {
               continue
            }
            if (part === "..") {
               newParts.pop();
            } else {
               newParts.push(part);
            }
         }
         if (parts[0] === "") {
            newParts.unshift("")
         }
         return newParts.join("/") || (newParts.length ? "/" : ".");
      },
      module: function(name, fn) {
         var _exports = {};
         var relative = "./";
         var rel = name.match(/^(.*)\/[\w]+\.js$/);
         if (rel) {
            relative = rel[1];
         }
         fn(_exports, this.require.bind({
            self: this,
            path: name,
            relative: relative
         }));
         this.register[name] = _exports;
      },
      require: function(name) {
         var self = this.self;
         var path = this.path;
         var relative = this.relative;
         if (name[0] === ".") {
            var target = ts.pathJoin(relative, name) + ".js";
            if (self.register[target]) {
               return self.register[target];
            }
         } else {
            if( $isBackend ){
               return require(name);
            }
         }
      },
      expose: function(scope, path) {
         path = path.match(/\.js^/) ? path : path + ".js";
         var e = this.register[path];
         var npmExpose  = !$isBackend && npmName;
         if (e !== undefined) {

            var useAmd = !$isBackend && typeof define == 'function' && define.amd;
            for (var key in e) {
               var value = e[key];
               if (useAmd) {
                  define(key, [], function() {
                     return value;
                  });
               } else {
                  if( npmName ){
                     $scope.__npm__[npmName][key] = value;
                  };
                  $scope[key] = value;
               }
            }
         } else {
            throw new Error('Module "' + path + '" Cannot be exposed! Make sure you export variables correctly and the module is present');
         }
      }
   };
   return {
      isBackend: $isBackend,
      scope: $scope,
      ts : ts
   }
}(typeof exports !== "undefined" ? exports : this, typeof exports !== "undefined"));
