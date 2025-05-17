export default function Product({productImage, productTitle, productPrice, children}) {
  return (
    <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12   flex items-center justify-center mr-3">
          <img src={productImage} alt={productTitle} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{productTitle}</h3>
          <p className="text-xs text-gray-400">BDT {productPrice}</p>
        </div>
      </div>
      <button className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
        {children}
      </button>
    </div>
  );
}
