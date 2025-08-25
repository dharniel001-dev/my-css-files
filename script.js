const winamp = new Webamp({
  initialTracks: [
    {
      metaData: {
        artist: "Rae",
        title: "Broadcast 001"
      },
      url: "https://cdn.shopify.com/s/files/1/0665/5849/2822/files/Bad_-_DELACOUR.mp3?v=1750888328",
      duration: 180
    }
  ],
  initialSkin: {
    url: "https://cdn.shopify.com/s/files/1/0665/5849/2822/files/leftamprae_e75663a3-c0e8-46e4-82be-4be9c05da9a8.wsz?v=1752067389"
  }
});

winamp.renderWhenReady(document.getElementById("winamp-player"));