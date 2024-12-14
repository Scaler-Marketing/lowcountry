 Fancybox.bind('[data-fancybox="gallery"]', {
   compact: false,
   contentClick: "iterateZoom",
   Thumbs: {
     type: "classic"
   },
   Images: {
     Panzoom: {
       maxScale: 1.75,
     },
   },
   Toolbar: {
     display: {
       left: [
         "infobar",
       ],
       middle: [],
       right: [
         "iterateZoom",
         "slideshow",
         "thumbs",
         "close",
       ],
     }
   }
 });
