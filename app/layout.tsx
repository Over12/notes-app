import type { Metadata } from "next";
import '@/styles/globals.css';
import { outfit, rubik } from '@/styles/fonts'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: "NoteMe",
  description: "Aplicación para escribir notas, compartirlas y organizarlas.",
};

const STYLE_SCRIPT = `
(function () {
  try {
    const styles = ['verdant','lagoon','orchid','indigo','ember','crimson'];
    const savedStyle = localStorage.getItem('style');
    const root = document.documentElement;

    styles.forEach(s => root.classList.remove(s));

    if (savedStyle && styles.includes(savedStyle)) {
      root.classList.add(savedStyle);
    } else {
      root.classList.add('verdant');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${outfit.variable} ${rubik.variable} text-text bg-background transition-colors`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: STYLE_SCRIPT }} />
      </head>
      <body className='font-outfit antialiased'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
