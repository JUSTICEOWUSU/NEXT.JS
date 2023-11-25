export default function ProductId({params,}:{
    params: { productId:string };
}){
    return <h1>The current product has an id of {params.productId}</h1>
}