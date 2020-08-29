import { uuid } from 'uuidv4';

export class BlogPost {
    public readonly id: string;

    public title: string;
    public imageURL: string;
    public body: string;
    public author?: string;

    constructor(props: Omit<BlogPost, 'id'>, id?: string) {
        Object.assign(this, props);

        if (id) this.id = id;
        else this.id = uuid();
    }
}