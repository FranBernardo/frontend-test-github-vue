export default interface IRepositorio {
    
    name: string,
    owner: {
        login: string,
        avatar_url: string,
        id: number
    },
    commits_url: string,
}