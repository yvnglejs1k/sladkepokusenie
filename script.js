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
