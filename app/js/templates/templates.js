angular.module("evaluon.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/auth/login.tpl.html","<div layout=\"horizontal\" layout-padding layout-align=\"center\" >\n  <div flex=\"30\">\n    <md-toolbar class=\"md-whiteframe-z3\">\n      <div class=\"md-toolbar-tools\">\n        <span>Evaluon</span>\n        <span flex>Login</span>\n      </div>\n    </md-toolbar>\n    <md-content class=\"md-padding md-whiteframe-z5\" md-theme=\"light-blue-dark\" layout-padding layout-align=\"center\">\n      <form layout=\"vertical\" layout-align=\"center center\" ng-submit=\"login($event)\">\n        <md-text-float label=\"Correo\" type=\"email\" ng-model=\"user.email\" ng-required=\"true\"> </md-text-float>\n        <md-text-float label=\"Contraseña\" type=\"password\" ng-model=\"user.password\" ng-required=\"true\"> </md-text-float>\n        <md-button type=\"submit\" aria-label=\"Iniciar Sesion\" md-theme=\"light-blue-dark\" class=\"md-primary\">\n           Iniciar Sesion\n        </md-button>\n      </form>\n   </md-content>\n  </div>\n</div>\n");}]);