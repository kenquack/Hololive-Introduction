import { userKeys as usersHash } from "./users";
import { userIcons } from "./users";
import { userTwitter } from "./users";
import { userYoutube } from "./users";
import { userPhotos } from "./users";

export function createElements() {

    function createButtons() {
        let users = Object.keys(usersHash);
        let profile = document.createElement('div');
        profile.setAttribute('id', 'profiles');
        document.body.appendChild(profile);

        for(let i = 0; i < users.length; i++) {
            let container = document.createElement("div");
            let pic = document.createElement("img");
            profile.appendChild(container);
            container.appendChild(pic);
            container.setAttribute('class', 'icons')
            pic.setAttribute('class', 'profile-icon');
            pic.setAttribute('id', `${users[i]}-icon`);

            setSrc(users[i]);
        };
    };

    function setSrc(user) {
        let btn = document.getElementById(`${user}-icon`);
        btn.src = userIcons[user];
    };

    let currentChar;

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
        
        toggleBlur(); //doesn't keep blur when clicking on another pic
        div.toggleAttribute('hidden');

    };
    
    
    function toggleBlur() {
        let bg = document.getElementById('canvas');
        if (bg.hasAttribute('class', 'blur')) {
            bg.removeAttribute('class', 'blur');
        } else {
            bg.setAttribute('class', 'blur')
        };
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
        a.setAttribute('class', 'link')
        user.appendChild(a);
    };

    function addYoutube(user){
        let a = document.createElement('a');
        a.innerHTML = "Youtube";
        a.href = userYoutube[user.id];
        a.setAttribute('target', '_blank');
        a.setAttribute('class', 'link')
        user.appendChild(a);
    };

    function addPhotos() {
        let users = Object.keys(usersHash);

        for(let i = 0; i < users.length; i++) {
            let userDiv = document.getElementById(`${users[i]}`);
            let container = document.createElement('div');
            let pic = document.createElement('img');

            container.setAttribute('class', 'photo');
            userDiv.appendChild(container);
            container.appendChild(pic);
            pic.setAttribute('class', 'char-photo');
            pic.setAttribute('id', `${users[i]}-pic`);

            setSrc2(users[i]);
        };
    };

    function setSrc2(user) {
        let btn = document.getElementById(`${user}-pic`);
        btn.src = userPhotos[user];
    }

    
    createButtons();
    addListeners();
    addLinks();
    addPhotos();
};