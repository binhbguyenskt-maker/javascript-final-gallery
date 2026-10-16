// Final project: accessible interactive photo gallery.
function upDate(previewPic) {
    console.log('Preview event fired');
    console.log('alt:', previewPic.alt);
    console.log('src:', previewPic.src);

    const preview = document.getElementById('image');
    preview.textContent = previewPic.alt;
    preview.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    const preview = document.getElementById('image');
    preview.style.backgroundImage = "url('')";
    preview.textContent = 'Hover over an image below to display here.';
}

// Runs on page load. Figures are keyboard-focusable without hardcoded tabindex in HTML.
function addTabFocus() {
    console.log('Page loaded: adding tabindex to gallery figures');
    const figures = document.querySelectorAll('.gallery figure');
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute('tabindex', '0');
        console.log('Added tabindex to figure', i + 1);
    }
}
