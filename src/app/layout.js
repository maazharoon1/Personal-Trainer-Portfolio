import { ThemeProvider } from "next-themes";
import "./globals.css";
import MotionWrapper from "@/lib/motion-wrapper";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Hamza Haroon | Certified Gym Trainer & Fitness Coach", description: "Hamza Haroon is a certified gym trainer based in Karachi, Pakistan. Specializing in personalized workout plans, nutrition guidance, and fitness transformation coaching.",
  icons: { icon: "/favicon.png" },
}

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
     suppressHydrationWarning
    >
      
      <body className=" antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"

          disableTransitionOnChange
        >
          <MotionWrapper>
                     {children}
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  color: 'hsl(var(--card-foreground))',
                },
              }}
            />
          </MotionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
