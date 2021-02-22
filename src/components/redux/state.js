let state = {
    profilePage : {
        posts:  [
            {id: 1, message:'It\'s my first post', likesCount: 10},
            {id: 2, message:'Salo only dlya UKRAINE', likesCount: 6},
            {id: 3, message:'Хочу чтобы тут было пусто', likesCount: 17}
        ]
    },
    
    messagesPage : {
        messageData : [
            {id:1, message:'Hi bro'},
            {id:2, message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, perspiciatis recusandae minima\
            harum repellat praesentium deleniti architecto neque repudiandae, obcaecati sequi in\
            nobis corrupti reprehenderit nulla sed repellendus exercitationem? Dicta.'}
        ],
        
        dialogsData : [
            {id:1, name:'Rusik'},
            {id:2, name:'Cheburec'},
            {id:3, name:'Uzbek'},
            {id:4, name:'CatBoris'}
        ]
    }
    
}

export const addPost = postMessage => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 12
    }
    state.profilePage.posts.push(newPost)
}
export default state;