export default interface IRepositorio {
    
    name: string,
    full_name: string,
    language: string,
    pushed_at: Date,
    owner: {
        login: string,
        avatar_url: string,
        id: number
    },
    commits_url: string,
}