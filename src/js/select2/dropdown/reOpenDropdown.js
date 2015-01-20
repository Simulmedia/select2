define([

], function () {
  function ReOpenDropdown () { }
  this.lastParams = {};

  ReOpenDropdown.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      if (self.lastParams == params){
        params.skipQuery = true;
        params.skipLoading = true;
      }
      self.lastParams = params;
      self.loading = true;
    });

    container.on('select', function () {
      window.setTimeout(function () {
        self.trigger('query', self.lastParams);
        self.trigger('open');
      }, 0);
    });

    container.on('unselect', function () {
      window.setTimeout(function () {
        self.trigger('query', self.lastParams);
        self.trigger('open');
      }, 0);
    });
  };

  return ReOpenDropdown;
});