interface Post {
    title: string;
    content: string | string[];
    uid: string;
    
}
interface PostWithId extends Post{
    _id: string;
}