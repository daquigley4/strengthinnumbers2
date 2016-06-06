(function() {
  'use strict';

  angular
    .module('strengthInNumbers')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
