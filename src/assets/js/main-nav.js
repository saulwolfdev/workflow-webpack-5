// Sticky menu, with mobile slide-in from right
module.exports = {
    hamburgerIsClosed: false,
    overlay: document.querySelector('.overlay'),
    trigger: document.querySelectorAll('.hamburger'),
    wrapper: document.querySelector('#wrapper'),
    dropdown: document.querySelectorAll('.dropdown'),
    isAdmin: false,

    initiateNav: function(isAdmin) {
        this.isAdmin = isAdmin; 
        let self = this;
        this.initiateStickyMenu();
        this.trigger.forEach(function(trigger) {
                window.addEventListener('resize',  (e) => {
                    self.closeMenu(trigger);
                });
                trigger.addEventListener('click', (e) => {
                    self.toggleMenu(trigger);
                },
            self);
        });
        if (null != this.dropdown) {     //innecesario si se modulariza bien
            this.initSubmenu();
        }
    },
    toggleMenu: function(trigger) {
        if (this.wrapper.classList.contains('toggled')) {
            this.closeMenu(trigger);
        } else {
            this.openMenu(trigger);
        }
    },
    openMenu: function(trigger) {
        this.wrapper.classList.add('toggled');
        trigger.classList.remove('is-closed');
        trigger.classList.add('is-open');
        this.hamburgerIsClosed = true;
    },
    closeMenu: function(trigger) {
        this.wrapper.classList.remove('toggled');
        trigger.classList.remove('is-open');
        trigger.classList.add('is-closed');
        this.hamburgerIsClosed = false;
    },
    initiateStickyMenu: function() {
        window.addEventListener('scroll', function() {
            var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (150 <= scroll) {
                document.querySelector('.fixed-top').classList.add('sticky');
            } else {
                document.querySelector('.fixed-top').classList.remove('sticky');
            }
        });
    },
    initSubmenu: function() {
        this.dropdown.forEach((dropdown) => {
            dropdown.addEventListener('mouseenter', (e) => {
                if (dropdown.classList.contains('closed')) {
                    dropdown.classList.remove('closed');
                }
            });
            dropdown.addEventListener('mouseleave', (e) => {
                if (! dropdown.classList.contains('closed')) {
                    dropdown.classList.add('closed');
                }
            });
            dropdown.addEventListener('click', (e) => {
                
            });
        })
        
    }, 
    toggleSubmenu: function() {
        if (this.classList.contains('closed')) {
            this.classList.remove('closed');
        } else {
            this.classList.remove('closed');
        }

    }
};
