import { userKeys as usersHash } from "./users";
import { userPictures } from "./users";
import { userTwitter } from "./users";
import { userYoutube } from "./users";

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

    function addLinks() {
        let users = Object.keys(usersHash);

        for(let i = 0; i < users.length; i++) {
            let userDiv = document.getElementById(`${users[i]}`);
            addTwitter(userDiv);
            addYoutube(userDiv);
        }
    }

    function addTwitter(user){
        let a = document.createElement('a');
        a.innerHTML = "Twitter";
        a.href = userTwitter[user.id];
        a.setAttribute('target', '_blank');
        user.appendChild(a);
    };

    function addYoutube(user){
        let a = document.createElement('a');
        a.innerHTML = "Youtube";
        a.href = userYoutube[user.id];
        a.setAttribute('target', '_blank');
        user.appendChild(a);
    };

    
    createButtons();
    addListeners();
    addLinks();
};