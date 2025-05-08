// This function shows the selected image and hides others
function showImage(id) {
    // Hide all images
    const images = document.querySelectorAll('.landmark-img');
    images.forEach(function(image) {
      image.style.display = 'none';
    });
  
    // Show the image that matches the button
    document.getElementById(id).style.display = 'block';
  }
  