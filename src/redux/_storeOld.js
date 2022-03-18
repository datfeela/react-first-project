import chatReducer from "./chatPageReducer";
import profileReducer from "./profilePageReducer";


let store = {
    _state: {
        profilePage: {
            inputText: '',
            users: [
                {
                    id: 0,
                    name: 'Ivan Ivan',
                    birth: 'Jul 1, 2001',
                    education: 'Lorem Univ. \'17',
                    persInfo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iste quod, excepturi, voluptates reiciendis nesciunt ipsam iure fuga quasi possimus itaque deleniti mollitia cum nostrum, voluptatibus odio voluptate reiciendis aspernatur placeat. Tempora, omnis odit.'
                }
            ],
            posts: [
                {
                    authorId: 0,
                    author: 'Ivan Ivan',
                    date: 'Jul 17, 2022',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae nostrum provident cum, nemo itaque, distinctio excepturi molestiae repellat fuga ipsum ea voluptate temporibus, animi nam ducimus nulla placeat dignissimos!'
                },
                {
                    authorId: 2,
                    author: 'Ivan Ivan 2',
                    date: 'Jun 15, 2022',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, obcaecati.'

                }, {
                    authorId: 4,
                    author: 'Ivan Ivan 4',
                    date: 'Jun 14, 2022',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt ex laboriosam totam ipsa, nobis et sint dicta atque a harum amet maxime esse expedita saepe doloribus quo tempore quos quidem exercitationem modi architecto accusantium? Porro facere pariatur architecto suscipit ducimus perferendis, in voluptas veniam perspiciatis dolore accusamus sint quibusdam!'
                }, {
                    authorId: 5,
                    author: 'Ivan Ivan 5',
                    date: 'Jun 11, 2022',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem odit. Animi magni provident rerum veritatis nam iste illum dolor, neque blanditiis consectetur. Ducimus dicta facilis maxime esse incidunt, ut, excepturi ipsum sunt reiciendis similique ad sapiente exercitationem optio unde nulla sit possimus inventore rem aliquid accusantium cupiditate quos laborum pariatur! Doloribus esse facere perspiciatis veniam neque pariatur vitae iste eius fugiat nihil eos natus provident rerum, ducimus cum rem soluta quisquam aspernatur animi saepe non nisi culpa? Laudantium eius doloribus numquam repudiandae at aspernatur id distinctio vero voluptate reprehenderit deleniti, aliquid accusantium fugit dolorem! Maxime excepturi adipisci in. Odit.'
                }, {
                    authorId: 3,
                    author: 'Ivan Ivan 3',
                    date: 'Apr 1, 2022',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae nostrum provident cum, nemo itaque, distinctio excepturi molestiae repellat fuga ipsum ea voluptate temporibus, animi nam ducimus nulla placeat dignissimos!'
                },
            ]
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Ivan Ivan 1",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
                {
                    id: 2,
                    name: "Ivan Ivan 2",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
                {
                    id: 3,
                    name: "Ivan Ivan 3",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
                {
                    id: 4,
                    name: "Ivan Ivan 4",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
                {
                    id: 5,
                    name: "Ivan Ivan 5",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
                {
                    id: 6,
                    name: "Ivan Ivan 6",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
                {
                    id: 7,
                    name: "Ivan Ivan 7",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
                {
                    id: 8,
                    name: "Ivan Ivan 8",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quam?",
                },
            ]
        },
        friendsPage: {
            friends: [
                {
                    id: 1,
                    name: 'Ivan Ivan 1',
                },
                {
                    id: 2,
                    name: 'Ivan Ivan 2',
                },
                {
                    id: 3,
                    name: 'Ivan Ivan 3',
                },
                {
                    id: 4,
                    name: 'Ivan Ivan 4',
                },
                {
                    id: 5,
                    name: 'Ivan Ivan 5',
                },
            ]
        },
        chatPage: {
            messages: [
                {
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '
                },
                {
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt ex laboriosam totam ipsa.'
                },
                {
                    text: 'Lorem ipsum.'
                },
                {
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae nostrum provident cum, nemo itaque, distinctio excepturi molestiae repellat fuga ipsum ea voluptate temporibus.'
                },
            ],
            inputText: ''
        }
    },
    _renderEntireTree() {
        console.log("can't render");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.chatPage = chatReducer(this._state.chatPage, action);

        this._renderEntireTree(this._state);
    }
}

window.store = store; //!logging state

export default store;

// let renderEntireTree = () => {
//     console.log('aaaa');
// }

// window.state = state; //!logging state

// export const addPost = (postText) => {
//     let newPost = {
//         authorId: 4,
//         author: 'Ivan Ivan 4',
//         date: `${new Date().getMonth()} ${new Date().getDate()}, ${new Date().getFullYear()}`,
//         text: postText
//     }

//     state.profilePage.posts.push(newPost);
//     renderEntireTree(state, addPost);
// }

// export const subscribe = (observer) => {
//     renderEntireTree = observer;
// }

// export default state;