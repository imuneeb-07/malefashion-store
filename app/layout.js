import "./globals.css";
import Navbar from "@/components/Navbar";
import Context from "@/Context/Context";

export const metadata = {
  title: "Basic Ecommerece",
  description: "Providing you the best tech at an amazing price!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>

      <body>
        <Context>
          <Navbar />
          {children}
        </Context>
      </body>
    </html>
  );
}
