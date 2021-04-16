 /**
  * @desc InView callback
  *
  * @callback scrollCallback
  * @param {boolean} isInView - is in view
  * @param {object} data - scroll data
  * @param {number} data.windowScrollTop - scrolled amount
  * @param {number} data.elementOffsetTop - element top offset
  * @param {number} data.inViewHeight - height of visible area
  * @param {number} data.elementOffsetTopInViewHeight - element top offset relative to height of visible area
  */

 // if (typeof exports !== 'undefined') {
 //     if (typeof module !== 'undefined' && module.exports) {
 //         exports = module.exports = InView
 //     }
 //     exports.InView = InView
 // } else {
 //     window.InView = InView
 // }


 class InView {



     throttle = function (fn, threshhold, scope) {
         threshhold || (threshhold = 100)
         var last,
             deferTimer

         return function () {
             var context = scope || this

             var now = +(new Date())

             var args = arguments
             if (last && now < last + threshhold) {
                 clearTimeout(deferTimer)
                 deferTimer = setTimeout(function () {
                     last = now
                     fn.apply(context, args)
                 }, threshhold)
             } else {
                 last = now
                 fn.apply(context, args)
             }
         }
     };

     hasClass = function (el, name) {
         return new RegExp(' ' + name + ' ').test(' ' + el.className + ' ')
     }

     addClass = function (el, name) {
         if (!this.hasClass(el, name)) {
             el.className += ' ' + name
         }
         return el
     }

     removeClass = function (el, name) {
         var newClass = ' ' + el.className.replace(/[\t\r\n]/g, ' ') + ' '
         if (this.hasClass(el, name)) {
             while (newClass.indexOf(' ' + name + ' ') >= 0) {
                 newClass = newClass.replace(' ' + name + ' ', ' ')
             }
             el.className = newClass.replace(/^\s+|\s+$/g, '')
         }
         return el
     }

     removeEvent = function (el, name, fn) {
         if (el.removeEventListener) {
             return el.removeEventListener(name, fn)
         } else if (el.detachEvent) {
             return el.detachEvent('on' + name, fn)
         }
     }

     addEvent = function (el, name, fn) {
         if (el.addEventListener) {
             return el.addEventListener(name, fn, false)
         } else if (el.attachEvent) {
             return el.attachEvent('on' + name, fn)
         }
     }

     getScrollTop = function () {
         if (typeof window.pageYOffset !== 'undefined') {
             return window.pageYOffset
         } else {
             var b = document.body
             var d = document.documentElement
             d = d.clientHeight ? d : b
             return d.scrollTop
         }
     }

     isInView = function (obj, oT, oB) {
         var winTop = this.getScrollTop()

         var winBottom = winTop + window.innerHeight

         var objTop = obj.getBoundingClientRect().top + document.documentElement.scrollTop

         var objBottom = objTop + obj.offsetHeight

         var offset = 0

         winTop = winTop + oT;
         winBottom = winBottom - oB;

         if ((objTop <= winBottom + offset) && (objBottom >= winTop)) {
             return true
         }

         return false
     }

     /**
      * @desc Create an InView instance.
      *
      * @class
      * @func InView
      * @param {HTMLElement} element - element to detect when scrolled to view
      * @param {scrollCallback} scrollCallback - callback function fired on scroll event
      * @param {oT} oT - offest top
      * @return {HTMLElement} - element
      *
      * @example
      * var el = document.querySelector('.item');
      *
      * var InView = InView(el, function(isInView, data) {
      *   if (isInView) {
      *     console.log('in view');
      *   } else {
      *     if (data.windowScrollTop - (data.elementOffsetTop - data.inViewHeight) > data.inViewHeight) {
      *       console.log('not in view (scroll up)');
      *     } else {
      *       console.log('not in view (scroll down)');
      *     }
      *   }
      * },0);
      */
     helper = function (el, callback, oT, oB) {
         var _this = this
         if (!(_this instanceof InView)) {
             return new InView(el, callback, oT, oB)
         }
         _this.oT = oT
         _this.oB = oB
         _this.el = el
         _this.callback = callback.bind(_this)
         _this.destroy = function () {}

         if (!el) {
             return _this
         }

         var isDestroyed = false

         var check = function check(e) {
             if (isDestroyed) return false

             var params = {
                 windowScrollTop: _this.getScrollTop(),
                 elementOffsetTop: _this.el.offsetTop,
                 inViewHeight: window.innerHeight,
                 elementOffsetTopInViewHeight: window.innerHeight - (_this.getScrollTop() - (_this.el.offsetTop - window.innerHeight))
             }
             if (_this.isInView(_this.el, _this.oT, _this.oB)) {
                _this.addClass(_this.el, 'inview')
                 _this.callback.call(_this, true, params)
             } else {
                _this.removeClass(_this.el, 'inview')
                 _this.callback.call(_this, false, params)
             }
         }

         var throttledCheck = this.throttle(check, 100)

         this.addEvent(window, 'scroll', throttledCheck)

         _this.destroy = function () {
             isDestroyed = true
             this.removeEvent(window, 'scroll', throttledCheck)
         }

         throttledCheck()

         return _this
     }

     constructor(el, callback, oT, oB) {
        this.helper(el, callback, oT, oB);
     }

 }

 export default InView