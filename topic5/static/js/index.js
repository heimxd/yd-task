(function () {
    var css3d = {
        startX: 0,
        x: 0,
        endX: 0,
        flag: true,
        init() {
            this.box = $('#box');
            var radius = this.calculateRadius(129, 20);
            var arr = $('#box div');
            arr.each(function (index) {
                $(this).css('background', 'url("./static/img/p' + (index + 1) + '.png") no-repeat');
                $(this).css('transform', "rotateY(" + 360 / arr.length * index + 'deg) translatez(' + radius + 'px)')
            });
            this.bind();
        },
        bind() {
            $('#box').on('touchstart', this.touchstart.bind(this));
            $('#box').on('touchmove', this.touchmove.bind(this));
            $('#music').on('tap', this.music.bind(this));
            window.addEventListener('deviceorientation', this.deviceorientation.bind(this));
        },
        calculateRadius(length, totalNum) {
            return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
        },
        touchstart(e) {
            e.preventDefault();
            var touch = e.targetTouches[0];
            this.startX = touch.pageX - this.x;
        },
        touchmove(e) {
            if (this.flag) {
                e.preventDefault();
                var touch = e.targetTouches[0];
                this.endX = touch.pageX;
                this.x = this.endX - this.startX;
                this.box.css('transform', 'rotateY(' + (-this.x) + 'deg)');
            } else {
                return false;
            }

        },
        deviceorientation(e) {
            var gamma = e.gamma;
            if (Math.abs(gamma) > 1) {
                this.flag = false;
                this.box.css('transform', 'rotateY(' + gamma * 3 + 'deg)');
            } else {
                this.flag = true;
            }

        },
        music(e) {
            var audio = $('#audio')[0];
            if (audio.paused) {
                audio.play();
                $('#music').text('播放');
            } else {
                audio.pause();
                $('#music').text('暂停');
            }
        }
    }
    css3d.init();
})()