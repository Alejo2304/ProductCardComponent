import cartIcon from '../assets/icon-cart.svg';

function Price({newPrice, oldPrice}){
    return(
        <div class="inline-flex py-2 px-8 items-center justify-center space-x-3">
            <h1 class="text-green-700 font-headings text-2xl flex-2/3">
                ${newPrice}
            </h1>
            <h3 class="text-grey line-through text-xs flex-1/3">
                ${oldPrice}
            </h3>
        </div>
    );
}


function AddToCartButton({iconPath}){
    return (
        <button class="bg-green-500 text-white  text-xs font-bold py-4 px-8 rounded inline-flex items-center justify-center space-x-2">
                    <img src={iconPath} alt="Cart Icon" class="w-3 h-3"></img>
                    <p> Add to Cart </p>
        </button>
    );
}


export default function ProductCard(){
    return(
        <div class="inline-flex">
            <Price newPrice="149.99" oldPrice="169.99"></Price>
            <AddToCartButton iconPath={cartIcon} />
        </div>
    );
}