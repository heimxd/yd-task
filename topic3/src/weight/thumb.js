xtag.register('x-thumb', {
    content: `<div class="praise-thumb-wrap">
                <div class="praise-thumb">
                    <div class="sw"></div>
                    <div class="finger1"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                </div>
            </div>`,
    lifecycle: {
        created: function () { },
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