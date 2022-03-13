import { Article } from "./article"

export interface Sale {
    name_client:string,
    nit_cliente:number,
    articles: Article[],
    total:number,
    database:string,
    sale_channel:string,
    payment_method:string
}
