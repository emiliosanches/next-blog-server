export interface ICreateBlogPostRequestDTO {
    title: string;
    imageURL: string;
    body: string;
    author?: string;
    date: string;
}