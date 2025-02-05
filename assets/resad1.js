// Load the AdSense script dynamically
document.addEventListener("DOMContentLoaded", function () {
  let adScript = document.createElement("script");
  adScript.async = true;
  adScript.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7606032375161967";
  adScript.crossOrigin = "anonymous";
  document.head.appendChild(adScript);
});

// Function to insert AdSense ad where needed
function insertAd(containerId) {
  let adContainer = document.getElementById(containerId);
  if (adContainer) {
    let adElement = document.createElement("ins");
    adElement.className = "adsbygoogle";
    adElement.style.display = "block";
    adElement.setAttribute("data-ad-client", "ca-pub-7606032375161967");
    adElement.setAttribute("data-ad-slot", "9034177093");
    adElement.setAttribute("data-ad-format", "auto");
    adElement.setAttribute("data-full-width-responsive", "true");

    adContainer.appendChild(adElement);

    // Initialize AdSense
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
}
