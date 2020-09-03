export interface ICreateBlogPostRequestDTO {
    title: string;
    image_url: string;
    body: string;
    author?: string;
    created_at: string;
}