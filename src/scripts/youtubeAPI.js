import { userKeys } from "./users";



export function loadYoutubeStats() {

    const youtubeKey = 'AIzaSyCAs8UrQqjxDI8-lP2gUh-iq0pyhUmQnZw'; //API key

    function setupHTML() {
        let users = Object.keys(userKeys);
        let container = document.createElement('div');
        container.setAttribute('id', 'characters');

        for(let i = 0; i < users.length; i++) {
            let header = document.createElement('h2');
            let user = document.createElement('div');
            let userList = document.createElement('ul');
            let label = document.createElement('label');

            //label
            label.setAttribute('class', 'label');
            label.setAttribute('id', `${users[i]}-stats-label`);
            label.innerHTML = "Stats"
            
            //user div
            header.innerHTML = users[i];
            user.appendChild(header);
            user.setAttribute('id', `${users[i]}`);
            user.setAttribute('class', 'character');
            user.setAttribute('hidden', true);

            //user ul
            userList.setAttribute('id', `${users[i]}-list`);
            document.body.appendChild(container);
            container.appendChild(user);
            user.appendChild(label);
            label.appendChild(userList);

            getViewcount(users[i]);
            getSubscribers(users[i]);
        };
    }

    function getSubscribers(user) {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${userKeys[user]}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let userUL = document.getElementById(`${user}-list`);
            let userLI = document.createElement('li');
            userLI.innerHTML = `Subscribers: ` + (data["items"][0].statistics.subscriberCount);
            userUL.appendChild(userLI);
        });
    };

    // maybe add getSubscribers and getViewcount into one function?
    function getViewcount(user) {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${userKeys[user]}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let userUL = document.getElementById(`${user}-list`);
            let userLI = document.createElement('li');
            userLI.innerHTML = `Total Views: ` + (data["items"][0].statistics.viewCount);
            userUL.appendChild(userLI);
        });
    };

    setupHTML();
};
