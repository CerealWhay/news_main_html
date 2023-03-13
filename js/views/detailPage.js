import {commentsComponent} from "../components/comments.js"

export default new Vue({
    components: {
        'comments': commentsComponent,
    },
    data: {
        message: 'Привет, Vue!'
    },
    template: "<div>{{message}} <comments/></div>"
})