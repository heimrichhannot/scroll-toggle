function ScrollToggle(selector) {
    this.enhancedElements = [];
    this.elements = document.querySelectorAll(selector);
    this.offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
    window.addEventListener("load", this.registerEvents.bind(this));
}

ScrollToggle.prototype.registerEvents = function () {
    let self = this;

    scrollHandler = function (event, element) {
        self.toggle(element, event);
    };

    this.elements.forEach(element => {
        eventType = 'scroll';
        self.enhancedElements.push({
            element, eventType, handler(event) {
                scrollHandler(event, element)
            }
        });
    });

    // add listeners
    self.enhancedElements.forEach(ee => {
        window.addEventListener(ee.eventType, ee.handler);
    });
};

ScrollToggle.prototype.toggle = function (element, event) {
    let offsetTopElement = element.getAttribute('data-offset') || element.scrollHeight || element.offsetHeight;
    let offsetTopWindow = document.documentElement.scrollTop || document.body.scrollTop;
    let bodyClass = element.getAttribute('data-body-class');

    if (typeof offsetTopElement === 'string') {
        let offsetTopRelatedElement = document.querySelector(offsetTopElement);
        offsetTopElement = offsetTopRelatedElement.length ? (offsetTopRelatedElement.scrollHeight || offsetTopRelatedElement.offsetHeight) : (element.scrollHeight || element.offsetHeight);
    }

    if (offsetTopWindow < this.offsetTop) {
        element.classList.remove('scroll-hide');
        if (typeof bodyClass === 'string') {
            document.body.classList.remove(bodyClass);
        }
    } else if (offsetTopWindow > offsetTopElement) {
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

module.exports = ScrollToggle;
