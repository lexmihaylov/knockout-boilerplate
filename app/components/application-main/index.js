define([
    'ko',
    'text!components/application-main/template.html',
    'services/signal',
    'less!components/application-main/style.less',

    // load components
    // TODO: add references to required components
], function(ko, template, Signal) {
    ko.components.register('application-main', {
        viewModel: (function() {
            var ApplicationMain = function() {

            };

            return ApplicationMain;
        }()),

        template: template
    });
});
