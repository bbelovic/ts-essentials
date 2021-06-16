interface Comment {
    text: string;
}

class CommentService {
    constructor(private comments: Comment[]) {}

    getAll() {
        return this.comments;
    }
}