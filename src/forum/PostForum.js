import {makeAutoObservable} from "mobx"

export default class PostForum {
    constructor() {
        this._categories = [
            {
                id: 0,
                category: 'jopa'
            },
            {
                id: 1,
                category: 'hhohohasrdasfddfdfdf'
            },
            {
                id: 2,
                category: 'kek'
            },
            {
                id: 3,
                category: 'he'
            },
            {
                id: 4,
                category: 'hhohoh'
            },
            {
                id: 5,
                category: 'hhohohasr'
            },
            {
                id: 6,
                category: 'hhohohasrdas'
            },
            {
                id: 7,
                category: 'hhohohasrdasfd'
            },
            {
                id: 8,
                category: 'hhohohasrdasfddf'
            },
            {
                id: 9,
                category: 'hhohohasrdasfddfdfdf'
            }
        ]
        this._posts = [
            {
                id: 0,
                userId: 0,
                title: 'HAhAHAHA',
                content: 'hahahahahahahaha',
                photoUrl: 'some url',
                category: 'jopa',
                publicationStatus: 'new',
                shipDate: '0.0.0.0.0.0.0.',
                likes: '100'
            },
            {
                id: 1,
                userId: 0,
                title: 'bomba',
                content: 'hahahahahahahaha',
                photoUrl: 'some url',
                category: 'jopa1',
                publicationStatus: 'new',
                shipDate: '0.0.0.0.0.0.0.',
                likes: '100'
            },
            {
                id: 2,
                userId: 0,
                title: 'HAHAHAHA',
                content: 'hahahahahahahaha',
                photoUrl: 'some url',
                category: 'jopa3',
                publicationStatus: 'new',
                shipDate: '0.0.0.0.0.0.0.',
                likes: '100'
            }
        ]
        makeAutoObservable(this)
    }

    setPost(posts) {
        this._posts = posts
    }

    setCategories(categories){
        this._categories = categories
    }

    get posts() {
        return this._posts
    }

    get categories(){
        return this._categories
    }
}