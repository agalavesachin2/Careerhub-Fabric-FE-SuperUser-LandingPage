<head>
  <meta name="description" content="Take part in our community contests and show off your skills. Whether you're a pro or a beginner, there's a contest for everyone." />
  
  <!-- Updated Favicon (initial, may be overridden by Lithium) -->
  <link rel="icon" type="image/svg+xml" href="${asset.get('/html/assets/favicon.svg')}" />

  <style>
    html {
      scroll-behavior: smooth;
    }

    body {
      overflow-y: scroll;
      background-color: #ffffff !important;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  </style>
  
  <link rel="stylesheet" href="${asset.get('/html/assets/superuserlanding.css')}" />
</head>

<main id="careerhub_root"></main>

<script>
  document.title = "Super User | Fabric Community";

  // Force-update favicon at runtime to prevent override
  (function updateFavicon() {
    const faviconURL = "${asset.get('/html/assets/favicon.svg')}";
    const existingIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    
    // Remove all existing favicon links
    existingIcons.forEach(icon => icon.parentNode.removeChild(icon));
    
    // Append new favicon
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.type = 'image/svg+xml';
    newFavicon.href = faviconURL + '?v=' + Date.now(); // Prevent cache
    document.head.appendChild(newFavicon);
  })();
</script>

<script src="${asset.get('/html/assets/superuserlandingapp.js')}"></script>
