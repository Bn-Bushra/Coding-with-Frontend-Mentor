    //slider var used to target the slider
    //storage used -- displays the slider input value
    //storage left var --displays the slider input value minus 100
    //progressBar var -- linear slider value
    const slider = document.getElementById('storageSlider');
    const usedStorage = document.getElementById('used');
    const leftStorage = document.getElementById('left');
    const progressBar = document.querySelector('.progress-bar');

    
    slider.oninput = function(){
    
        usedStorage.innerHTML = this.value;
        leftStorage.innerHTML = 1000 - this.value;
        //convert this.value to percent (/1000)
        var width = ((this.value / 1000) * 100) + 2.5;

        if (width <= 50) {
            // width = width + 0.5;
            progressBar.style.width = width + "%";
            console.log(width)
        }else if (width >= 98)
        {
            width = width - 2.0;
            progressBar.style.width = width + "%";
        }
        
        else {
            progressBar.style.width = width + "%";
        }  
    }
