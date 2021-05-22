class Profile {
    constructor() {
        this.clientid = '',
            this.clientSecret = ''
    }

    async getProfile(username) {
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json();

        const imageResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?=${profile[0].id}`) ;

        const image = await imageResponse.json();

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)

        const todo = await todoResponse.json();

        return {
            profile,
            todo,
            image
        }

    }

}