import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../services/index";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Typed from "typed.js";
import dynamic from "next/dynamic";
import { createPopper } from "@popperjs/core";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import * as analytics from "../lib/analytics";

function Amplication({ Component, pageProps }) {
  const { asPath } = useRouter();
  const isBlogPage = Boolean(
    asPath.includes("/blog") || asPath.includes("/tags")
  );

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      analytics.page(url, { url });
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Scroll effects
    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
    });

    // Typing letter animation
    const typingAnimations = document.querySelectorAll(
      "#animated-header-typed"
    );
    if (typingAnimations.length) {
      let typed = new Typed("#animated-header-typed", {
        stringsElement: "#animated-header-content",
        typeSpeed: 60,
        backSpeed: 20,
        backDelay: 1700,
        startDelay: 0,
        smartBackspace: false,
        loop: true,
      });
    }

    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
      require("lity/dist/lity.min.js");
      require("lity/dist/lity.min.css");
      if (!isBlogPage) {
        require("../public/styles/style.css");
      }
    }
  }, [isBlogPage]);

  return (
    <ApolloProvider client={client}>
      {/*Facebook Pixel*/}
      <Script
        id={"facebook-pixel"}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,t,n,c,o,a,f){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=t.createElement(n)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(f=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,f))}(window,document,"script"),fbq("init","694076677979309"),fbq("track","PageView");
          `,
        }}
      />
      <Script
        id={"gtag"}
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-455018710"
      />
      <Script
        id={"gtag-manager"}
        strategy={"afterInteractive"}
        dangerouslySetInnerHTML={{
          __html: `
            function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","AW-455018710");
          `,
        }}
      />
      {/*Hotjar Tracking Code*/}
      <Script
        id={"hotjar"}
        strategy={"afterInteractive"}
        dangerouslySetInnerHTML={{
          __html: `
            !function(t,h,e,j,s,n){t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:2379815,hjsv:6},s=h.getElementsByTagName("head")[0],(n=h.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,s.appendChild(n)}(window,document);
          `,
        }}
      />
      <Script
        id={"gtag"}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', 'G-8PE8KXZY6J', {'code_branch': 'master'});
          `,
        }}
      />
      <Script
        id={"intercomSettings"}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.intercomSettings = {
              app_id: "rtlni1hg"
            };
          `,
        }}
      />
      <Script
        id={"intercom"}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/rtlni1hg';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `,
        }}
      />
      <Script
        id={"segment"}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="GpXLWZ8HnAhUuUfZBs6bE5IE87yHmBtu";analytics.SNIPPET_VERSION="4.13.2";
            analytics.load("GpXLWZ8HnAhUuUfZBs6bE5IE87yHmBtu");
            analytics.page();
            }}();
          `,
        }}
      />
      {/* Prevents HubSpot from loading form collector */}
      <hs id={"CollectedForms-25691669"} />
      <Script
        id={"hs-script-loader"}
        strategy="afterInteractive"
        src="//js-eu1.hs-scripts.com/25691669.js"
      />

      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default Amplication;
