import {utilsBundle} from '@hundh/contao-utils-bundle';

function ScrollToggle(selector) {
    this.selector = selector;
    this.registerEvents();
}

ScrollToggle.prototype.registerEvents = function (event) {
    let self = this;

    utilsBundle.event.addDynamicEventListener('scroll', this.selector, function (target, event) {
        self.toggle(target, event);
    }, window);

    utilsBundle.event.addDynamicEventListener('load', this.selector, function (target, event) {
        self.offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
        self.toggle(target, event);
    }, window);
};

ScrollToggle.prototype.toggle = function (element, event) {
    let offsetTopElement = element.getAttribute('data-offset') || element.offsetHeight;
    let offsetTopWindow = document.documentElement.scrollTop || document.body.scrollTop;
    let bodyClass = element.getAttribute('data-body-class');
    let initShow = String(element.getAttribute('data-init-show') || true);

    if (typeof offsetTopElement === 'string') {
        let offsetTopRelatedElement = document.querySelector(offsetTopElement);
        offsetTopElement = offsetTopRelatedElement.length ? offsetTopRelatedElement.offsetHeight : element.offsetHeight;
    }

    if (initShow === 'true' && offsetTopWindow === this.offsetTop) {
        this.offsetTop = offsetTopWindow;
        return;
    }


    if (offsetTopWindow < this.offsetTop) {
        element.classList.remove('scroll-hide');
        if (typeof bodyClass === 'string') {
            document.body.classList.remove(bodyClass);
        }
    } else if (offsetTopWindow >= offsetTopElement) {
        element.classList.add('scroll-hide');
        if (typeof bodyClass === 'string') {
            document.body.classList.add(bodyClass);
        }
    }

    this.offsetTop = offsetTopWindow;
};

document.addEventListener("DOMContentLoaded", function () {
    new ScrollToggle('.scroll-toggle');
});

export default ScrollToggle;