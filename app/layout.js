export const metadata = {
  title: "Task Manager",
  description: "Next.js Task Manager App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
