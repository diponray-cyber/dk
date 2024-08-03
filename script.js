document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var iframe = document.getElementById('pdfViewer');
            iframe.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
