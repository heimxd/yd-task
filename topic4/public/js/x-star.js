import { Thumb } from './thumb.js'
import xtag from 'x-tag';
import '../css/star.css';

xtag.register('x-star', {
    content: `<div class="star-wrap">
                <div class="star">
                    ✨
                </div>
            </div>`,
    lifecycle: {
        created: function () {
            let thumb = new Thumb();
            thumb.init();
        },
        inserted: function () { },
        removed: function () { },
        attributeChanged: function () { }
    },
    methods: {
        someMethod: function () { }
    },
    accessors: {
        someAccessor: {
            // links to the 'some-accessor' attribute
            attribute: {},
            set: function () { },
            get: function () { }
        }
    },
    events: {
        tap: function () { },
        focus: function () { }
    }
});