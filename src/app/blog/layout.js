import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog page",
  description: "this is a blog layout",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <h1>Blog Layout</h1>
      {children}
    </div>
  );
}
