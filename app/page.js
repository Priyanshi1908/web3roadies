"use client";

import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Function to load external scripts
    const loadScripts = () => {
      const script1 = document.createElement('script');
      script1.src = '/emoji-squeeze/jquery-2.1.1.min.js';
      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = '/emoji-squeeze/c2runtime.js';
        script2.onload = () => {
          // Initialize game after scripts are loaded
          if (typeof window !== 'undefined' && window.cr_createRuntime) {
            window.cr_createRuntime('c2canvas');
          }
        };
        document.body.appendChild(script2);
      };
      document.body.appendChild(script1);
    };

    // Load scripts and initialize game
    loadScripts();

    // Resize canvas to fit the window
    const resizeCanvas = () => {
      if (typeof window !== 'undefined' && window.cr_sizeCanvas) {
        window.cr_sizeCanvas(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial call to set the size

    // Visibility change listener
    const onVisibilityChanged = () => {
      if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) {
        if (typeof window !== 'undefined' && window.cr_setSuspended) {
          window.cr_setSuspended(true);
        }
      } else {
        if (typeof window !== 'undefined' && window.cr_setSuspended) {
          window.cr_setSuspended(false);
        }
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChanged, false);
    document.addEventListener('mozvisibilitychange', onVisibilityChanged, false);
    document.addEventListener('webkitvisibilitychange', onVisibilityChanged, false);
    document.addEventListener('msvisibilitychange', onVisibilityChanged, false);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/emoji-squeeze/sw.js', { scope: '/emoji-squeeze/' })
        .then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(function(error) {
          console.log('ServiceWorker registration failed: ', error);
        });
    }
    
    


    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', onVisibilityChanged);
      document.removeEventListener('mozvisibilitychange', onVisibilityChanged);
      document.removeEventListener('webkitvisibilitychange', onVisibilityChanged);
      document.removeEventListener('msvisibilitychange', onVisibilityChanged);
      document.querySelectorAll('[src^="/emoji-squeeze/"]').forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Emoji Squeeze</title>
        <link rel="manifest" href="/appmanifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icon-256.png" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="shortcut icon" sizes="256x256" href="/icon-256.png" />
        <style>
          {`
            * {
              padding: 0;
              margin: 0;
            }
            html, body {
              background: #000;
              color: #fff;
              overflow: hidden;
              touch-action: none;
              -ms-touch-action: none;
            }
            canvas {
              touch-action-delay: none;
              touch-action: none;
              -ms-touch-action: none;
            }
          `}
        </style>
      </Head>
      <div id="fb-root"></div>
      <div id="c2canvasdiv">
        <canvas id="c2canvas" width="540" height="960">
          Your browser does not appear to support HTML5. Try upgrading your browser to the latest version. <a href="http://www.whatbrowser.org">What is a browser?</a><br /><br />
          <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx">Microsoft Internet Explorer</a><br />
          <a href="http://www.mozilla.com/firefox/">Mozilla Firefox</a><br />
          <a href="http://www.google.com/chrome/">Google Chrome</a><br />
          <a href="http://www.apple.com/safari/download/">Apple Safari</a><br />
          <a href="http://www.google.com/chromeframe">Google Chrome Frame for Internet Explorer</a><br />
        </canvas>
      </div>
    </>
  );
}
