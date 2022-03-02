import { userKeys as usersHash } from "./users";
import { userIcons } from "./users";
import { userTwitter } from "./users";
import { userYoutube } from "./users";
import { userPhotos } from "./users";
import { userDescription } from "./users";

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

    function addLinks() {
        let users = Object.keys(usersHash);

        for(let i = 0; i < users.length; i++) {
            let userDiv = document.getElementById(`${users[i]}`);
            addDescription(userDiv);
            addTwitter(userDiv);
            addYoutube(userDiv);
        };
    };

    function addDescription(user) {
        let p = document.createElement('p');
        let label = document.createElement('label');

        label.innerHTML = 'Description'
        label.setAttribute('class', 'label');
        label.setAttribute('id', `${user.id}-description-label`)
        p.setAttribute('class', 'description');
        p.setAttribute('id', `${user.id}-description`);

        p.innerHTML = userDescription[user.id];
        user.appendChild(label);
        label.appendChild(p);
    }

    function addTwitter(user){
        let a = document.createElement('a');
        let image = document.createElement('img');

        image.setAttribute('src', 'assets/logos/Twitter-Logo-Square.png');
        image.setAttribute('class', 'img')

        // a.innerHTML = "Twitter";
        a.appendChild(image);
        a.href = userTwitter[user.id];
        a.setAttribute('target', '_blank');
        a.setAttribute('class', 'link');
        
        user.appendChild(a);
    };

    function addYoutube(user){
        let a = document.createElement('a');
        let image = document.createElement('img');

        image.setAttribute('src', 'assets/logos/youtube-logo.png');
        image.setAttribute('class', 'img')

        // a.innerHTML = "Youtube";
        a.appendChild(image);
        a.href = userYoutube[user.id];
        a.setAttribute('target', '_blank');
        a.setAttribute('class', 'link');
    
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
    addLinks();
    addPhotos();
};