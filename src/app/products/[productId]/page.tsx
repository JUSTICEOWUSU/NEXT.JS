import { Metadata } from "next";
type Params ={
    params: { productId:string };
}

export const generateMetadata = ( {params} : Params ) : Metadata =>{
    return {
        title: `product iphone ${params.productId}`,
    }
}

export default function ProductId({params,}: Params ){

    return <h1>The current product has an id of {params.productId}</h1>
}