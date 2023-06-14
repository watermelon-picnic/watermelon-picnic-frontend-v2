import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });
export const metadata = {
  title: "수박나들이",
  description: "수도권 밖으로 나가볼까요?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Corben:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
