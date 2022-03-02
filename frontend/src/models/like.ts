export class Like{
    constructor(
        private id : string,
        private idUser : string,
        private idPost : string,
    ){}

    public getId() : string{
        return this.id;
    }
    
    public getIdUser() : string{
        return this.idUser;
    }

    public getIdPost() : string{
        return this.idPost;
    }
}