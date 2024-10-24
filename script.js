let canvas = document.getElementById('image-canvas');
let ctx = canvas.getContext('2d');
let image = new Image();

// Upload Photo
document.getElementById('upload-image').onchange = function (e) {
    let reader = new FileReader();
    reader.onload = function(event) {
        image.src = event.target.result;
        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        };
    };
    reader.readAsDataURL(e.target.files[0]);
};

// Apply Filter
function applyFilter(filter) {
    ctx.filter = filter;
    ctx.drawImage(image, 0, 0);
}

// Download Image
function downloadImage() {
    let link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
}

// Display Logo
function displayLogo() {
    let logoInput = document.getElementById('upload-logo');
    let logoPreview = document.getElementById('logo-preview');

    if (logoInput.files && logoInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function(event) {
            logoPreview.src = event.target.result;
            logoPreview.style.display = 'block';
        };
        reader.readAsDataURL(logoInput.files[0]);
    }
}