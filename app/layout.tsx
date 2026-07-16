import type { Metadata } from "next";
import { Editable, StiloProvider, loadContent } from "@stilodev/react";

export async function generateMetadata(): Promise<Metadata> {
  const c = loadContent("_shared");
  return { title: c.text("site.name") };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StiloProvider>
          <header>
            <Editable id="_shared/site.name" as="strong" />
          </header>
          <main>{children}</main>
        </StiloProvider>
      </body>
    </html>
  );
}
