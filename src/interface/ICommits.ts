export default interface ICommits {
    commit: {
        author: {
            name: string,
            email: string,
            date: Date
        },
        message: string
    },
}