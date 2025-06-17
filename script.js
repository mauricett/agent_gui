const resizeHandle = document.querySelector('.resize-handle');
const sidebar = document.querySelector('.sidebar');

resizeHandle.addEventListener('mousedown', (e) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    e.preventDefault();
});

function handleMouseMove(e) {
    const newWidth = e.clientX;
    if (newWidth >= 200 && newWidth <= 600) {
        sidebar.style.width = newWidth + 'px';
    }
}

function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}
