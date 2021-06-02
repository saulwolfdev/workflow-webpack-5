// Sticky menu, with mobile slide-in from right
module.exports = {
    urlParams: false,

    init: function() {

       let queryString = window.location.search;
        this.urlParams = new URLSearchParams(queryString);

        bodyClass = this.urlParams.get('bodyclass');
        this.addClasses(bodyClass, document.body);

        clwClass = this.urlParams.get('clwclass');
        let wizard = document.querySelector('.clean-wizard');
        if (null != wizard) {
            this.addClasses(clwClass, wizard);
        }
    },
    addClasses: function(classes, element) {
        if (null != classes) {
           let classList = classes.split(/[\s,]+/);
           classList.forEach(function(singleClass) {
                element.classList.add(singleClass);
           });
        }
    }
};
