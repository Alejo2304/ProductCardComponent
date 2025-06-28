import cartIcon from '../assets/icon-cart.svg';

function ProductImage({pMobileImage, pDesktopImage, altText}){
    return(    
        <div className="md:w-full md:h-full">
        {/* Imagen para móviles: visible por defecto, oculta en md y superior */}
        <img
            src={pMobileImage}
            alt={altText}
            className="w-full h-full object-cover md:hidden"
        />
        {/* Imagen para escritorio: oculta por defecto, visible en md y superior */}
        <img
            src={pDesktopImage}
            alt={altText}
            className="w-full h-full object-cover hidden md:block"
        />
        </div>
    );
}

function ProductDetails({productType, productName, productDescription}){
    return (
        <div className="flex-col px-5" >
            <header>
                <p className="text-grey text-md  tracking-wider">{productType}</p>
                <h1 className="text-black font-headings text-3xl py-3">{productName}</h1>
            </header>
            <section>
                <p className="text-grey font-body text-sm">{productDescription}</p>
            </section>
        </div>
    );
}

function Price({newPrice, oldPrice}){
    return(
        <div className="inline-flex flex-nowrap py-4 px-15 items-center justify-center space-x-5">
            <h1 className="text-green-500 font-headings text-3xl flex-2/3">
                ${newPrice}
            </h1>
            <h3 className="text-grey line-through text-xs flex-1/3">
                ${oldPrice}
            </h3>
        </div>
    );
}


function AddToCartButton({iconPath}){
    return (
        <div className="flex-col justify-center items-center">
            <button className="bg-green-500 text-white  text-xs font-bold py-3 px-18 rounded inline-flex items-center justify-center space-x-2">
                        <img src={iconPath} alt="Cart Icon" className="w-3 h-3"></img>
                        <p> Add to Cart </p>
            </button>
        </div>
    );
}


export default function ProductCard({pType, pName, pDescription, pNewPrice, pOldPrice, pImageMobile, pImageDesktop}){
    return(
        <article className="flex md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className = 'flex-1/2 border'>
                <ProductImage pMobileImage={pImageMobile} pDesktopImage={pImageDesktop} altText={pName} />
            </div>
            <div className='flex flex-1/2 flex-col justify-center items-center border py-2'>
                <ProductDetails productType={pType} productName={pName} productDescription={pDescription} />
                <Price newPrice={pNewPrice} oldPrice={pOldPrice} />
                <AddToCartButton iconPath={cartIcon} />
            </div>
        </article>
    );
}