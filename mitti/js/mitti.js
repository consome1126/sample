document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const schoolImage = document.getElementById('school-image');

    toggleButton.addEventListener('click', function() {
        if (schoolImage.style.display === 'none') {
            schoolImage.style.display = 'block';
            toggleButton.textContent = '画像を非表示にする';
        } else {
            schoolImage.style.display = 'none';
            toggleButton.textContent = '画像を表示する';
        }
    });
});
