import Slider from "@/components/Slider";
import Scrolleffect from "@/components/Scrolleffect";
import Middlecard from "@/components/Middlecard";
import ProductsSection from "@/components/ProductsSection"; // Import the client component

// This is the server component
const Page = async () => {
  // Fetch data on the server side
  const cards = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp",
      price: 59.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp",
      price: 59.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp",
      price: 59.99,
    },
    {
      id: 4,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp",
      price: 59.99,
    },
    {
      id: 5,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp",
      price: 59.99,
    },
    {
      id: 6,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp",
      price: 59.99,
    },
    {
      id: 7,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp",
      price: 59.99,
    },
    {
      id: 8,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-8.jpg.webp",
      price: 59.99,
    },
     
    

  ];

  const bestsellers = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp",
      price: 59.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp",
      price: 79.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp",
      price: 89.99,
    },
    {
      id: 4,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp",
      price: 99.99,
    },
  ];

  const newarrivals = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp",
      price: 119.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp",
      price: 129.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp",
      price: 159.99,
    },
  ];

  const hotsales = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp",
      price: 89.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp",
      price: 99.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp",
      price: 109.99,
    },
    {
      id: 4,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp",
      price: 119.99,
    },
  ];
  
  return (
    <div>
      <Slider />
      <Scrolleffect />
      <Middlecard />
      
      {/* Pass the fetched data to the client-side component */}
      <ProductsSection 
        cards={cards} 
        bestsellers={bestsellers} 
        newarrivals={newarrivals} 
        hotsales={hotsales}
      />
    </div>
  );
};

export default Page;
