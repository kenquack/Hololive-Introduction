export function loadYoutubeStats() {

    const youtubeKey = 'AIzaSyCAs8UrQqjxDI8-lP2gUh-iq0pyhUmQnZw';
    const userKeys = {Kafu: 'UCQ1U65-CQdIoZ2_NA4Z4F7A', 
        Suisei: 'UC5CwaMl1eIgY8h02uZw7u8A'
    };

    function setupHTML(usersKeys) {
        let users = Object.keys(usersKeys);

        for(let i = 0; i < users.length; i++) {
            // maybe create div to hold all the divs?
            let user = document.createElement('div');
            let userList = document.createElement('ul');

            user.setAttribute('id', `${users[i]}`);
            userList.setAttribute('id', `${users[i]}-list`);
            document.body.appendChild(user);
            user.appendChild(userList);

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
            userLI.innerHTML = `${user}'s Subscribers: ` + (data["items"][0].statistics.subscriberCount);
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
            userLI.innerHTML = `${user}'s Total Views: ` + (data["items"][0].statistics.viewCount);
            userUL.appendChild(userLI);
        });
    };

    setupHTML(userKeys);
};
