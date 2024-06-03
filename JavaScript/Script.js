var currentImageIndex = 0;
var images = document.querySelectorAll("#banner img");

// 自動切換圖片
setInterval(function() {
  // 隱藏當前圖片
  images[currentImageIndex].style.opacity = 0;
  // 切換到下一張圖片
  currentImageIndex = (currentImageIndex + 1) % images.length;
  // 顯示下一張圖片
  images[currentImageIndex].style.opacity = 1;
}, 2000);

