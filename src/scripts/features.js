export function features() {
    
    function onClick() {
        let icons = Array.from( document.getElementsByClassName('character') );
        let toggle = Array.from( document.getElementsByClassName('icons') );
        let id = this.id.split("-")[0];
        let div = document.getElementById(id);
        let skipIndex = icons.indexOf(div);

        
        for(let i = 0; i < icons.length; i++) {
            if (i !== skipIndex) {
                icons[i].setAttribute('hidden', true);
            };  
        };

        if (!toggle[skipIndex].hasAttribute('selected')) {
            turnOnBlur();
            unselectPics();
            toggle[skipIndex].setAttribute('selected', 'selected');
        } else {
            turnOffBlur();
            unselectPics();
        };
        
        div.toggleAttribute('hidden');

    };

    function unselectPics() {
        let icons = Array.from( document.getElementsByClassName('icons') );
        for (let i = 0; i < icons.length; i++) {
            icons[i].removeAttribute('selected', 'selected');
        };
    };
    
    
    function turnOnBlur() {
        let bg = document.getElementById('canvas');
        bg.setAttribute('class', 'blur');
    };

    function turnOffBlur() {
        let bg = document.getElementById('canvas');
        bg.removeAttribute('class', 'blur');
    }

    function addListeners(){
        let icon = document.getElementsByClassName('profile-icon');
        for(let i = 0; i < icon.length; i++) {
            icon[i].addEventListener("click", onClick); 
        };
    };

    addListeners();
};