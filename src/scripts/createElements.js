import { userKeys as usersHash } from "./users";
import { userPictures } from "./users";

export function createElements() {

    function createButtons() {
        let users = Object.keys(usersHash);

        for(let i = 0; i < users.length; i++) {
            let pic = document.createElement("img");
            document.body.appendChild(pic);
            pic.setAttribute('class', 'profile-icon');
            pic.setAttribute('id', `${users[i]}-icon`);

            setSrc(users[i]);
        };
    };

    function setSrc(user) {
        let btn = document.getElementById(`${user}-icon`);
        btn.src = userPictures[user];
    };

    function onClick() {
        let icons = Array.from( document.getElementsByClassName('character') );
        let id = this.id.split("-")[0];
        let div = document.getElementById(id)
        let skipIndex = icons.indexOf(div)
        for(let i = 0; i < icons.length; i++) {
            if (i !== skipIndex) {
                icons[i].setAttribute('hidden', true);
            };
        };

        div.toggleAttribute('hidden');
    };

    function addListeners(){
        let icon = document.getElementsByClassName('profile-icon');
        for(let i = 0; i < icon.length; i++) {
            icon[i].addEventListener("click", onClick);
        };
    };

    
    createButtons();
    addListeners();
};