M.AutoInit();
        // slider
        const slider = document.querySelector('.slider');
        M.Slider.init(slider,{
            height: 600,
            transition: 500,
            interval: 6000,
            indicators: false
        });