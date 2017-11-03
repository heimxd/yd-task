'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Thumb = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _praiseButton = require('./praiseButton.js');

var _praiseButton2 = _interopRequireDefault(_praiseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb() {
        _classCallCheck(this, Thumb);

        var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

        _this.playing = false;
        return _this;
    }

    _createClass(Thumb, [{
        key: 'init',
        value: function init() {
            this.render();
            this.bind();
        }
    }, {
        key: 'render',
        value: function render() {
            var thumbWrap = document.querySelector('.praise-thumb-wrap');
            if (thumbWrap) {
                var thumbChildren = '<div class="praise-thumb">\n                    <div class="sw"></div>\n                    <div class="finger1"></div>\n                    <div class="finger2"></div>\n                    <div class="finger3"></div>\n                    <div class="finger4"></div>\n                    <div class="finger5"></div>\n                </div>';
                thumbWrap.innerHTML = thumbChildren;
            }
        }
    }, {
        key: 'animation',
        value: function animation() {
            var element = document.querySelector('.praise-thumb');
            if (element) {
                element.classList.add('animation');
                setTimeout(function () {
                    element.classList.remove('animation');
                }, 1500);
            }
        }
    }, {
        key: 'bind',
        value: function bind() {
            var _this2 = this;

            var element = document.querySelector('.praise-thumb');
            if (element) {
                element.addEventListener('click', function () {
                    if (!_this2.playing) {
                        _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'add', _this2).call(_this2);
                        _this2.animation();
                        _this2.playing = true;
                        setTimeout(function () {
                            _this2.playing = false;
                        }, 1500);
                    }
                });
            }
        }
    }]);

    return Thumb;
}(_praiseButton2.default);

exports.Thumb = Thumb;