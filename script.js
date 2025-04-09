window.onload = function() {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  // Ak je čas po 18:00 a pred 6:00, aktivujeme tmavý režim
  if (hour >= 18 || hour < 6) {
      document.body.classList.add('dark-mode');
  }
};

window.onload = function() {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  // Ak je čas po 18:00 a pred 6:00, aktivujeme tmavý režim
  if (hour >= 18 || hour < 6) {
      document.body.classList.add('dark-mode');
  }
};

function pridajObrazok() {
  const fileInput = document.getElementById('imageUpload');
  const gallery = document.getElementById('gallery');

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = "Pridaný obrázok";
      gallery.appendChild(img);
    }
    reader.readAsDataURL(fileInput.files[0]);
  }
}
