import ProductCard from "./components/ProductCard";
import productImageDesktop from './assets/image-product-desktop.jpg'
import productImageMobile from './assets/image-product-mobile.jpg'

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-cream">
      <div className="w-[90vw] max-h-[95vh] px-5 md:max-w-[35rem] md:max-h-[60vh]">
        <ProductCard 
        pType='PERFUME'
        pName='Gabrielle Essence Eau De Parfum'
        pDescription='A floral, solar and voulptuos interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANNEL'
        pNewPrice='149.99'
        pOldPrice='169.99' 
        pImageMobile={productImageMobile}
        pImageDesktop={productImageDesktop}
        />
      </div>
    </div>
  );
}
