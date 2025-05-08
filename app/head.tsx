// app/head.tsx
export default function Head() {
    return (
      <>
        {/* Primary Meta Tags */}
        <title>Barny’s Web Builders | Portfolio & Services</title>
        <meta name="description" content="Barny’s Web Builders – Custom web design, SEO, automation & more. Crafting unique online presences for small businesses in WV." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
  
       {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVRNC71CW2"
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZVRNC71CW2', { send_page_view: true });
          `,
        }}
      />
    </>
  );
}
  