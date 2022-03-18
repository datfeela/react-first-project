const ADD_POST = 'ADD-POST',
    INPUT_CHANGE = 'INPUT-CHANGE';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                authorId: 4,
                author: 'Ivan Ivan 4',
                date: `${new Date().getMonth()} ${new Date().getDate()}, ${new Date().getFullYear()}`,
                text: state.inputText
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                inputText: ''
            }
        case INPUT_CHANGE:
            return {
                ...state,
                inputText: action.inputText
            }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const newPostInputChangeActionCreator = (text) => ({
    type: INPUT_CHANGE,
    inputText: text
})

