import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Basic Ecommerece",
  description: "Providing you the best tech at an amazing price!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
       
      <body>
        <Navbar/>
        {children}</body>
    </html>
  );
}
