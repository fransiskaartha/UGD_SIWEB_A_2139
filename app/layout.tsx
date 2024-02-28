import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
//jjjjj

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <style>
//           {`
//             .logo_hero.png {
//               position: absolute;
//               top: 20px; /* Sesuaikan posisi vertikal */
//               left: 20px; /* Sesuaikan posisi horizontal */
//               z-index: 1000; /* Pastikan z-index lebih tinggi dari background */
//             }
//           `}
//         </style>
//       </head>
//       <body className={`${inter.className} antialiased`}>
//         <img
//           src="/logo_hero.png" // Ganti dengan path gambar logo Anda
//           alt="logo_hero.png" // Ganti dengan deskripsi logo jika diperlukan
//           className="logo_hero.png"
//         />
//         {children}
//       </body>
//     </html>
//   );
// }
