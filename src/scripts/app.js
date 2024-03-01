document.addEventListener("DOMContentLoaded", function() {
    const InputText = document.querySelector('.main-inputdata-textarea textarea');
    const OutputText = document.querySelector('.main-outputdata-paragraph');
    const encryptButton = document.querySelector('.main-inputdata-button-encrypt');
    const hideImage = document.querySelector('.main-outputdata-img img');
    const hideText = document.querySelector('.main-outputdata-subtitle');

    encryptButton.addEventListener('click', function() {
        const originalText = InputText.value.trim();
        const textEncrypted = criptografarTexto(originalText);
        OutputText.textContent = textEncrypted;
        hideImage.style.display = 'none';
        hideText.style.display = 'none';
    });

    function criptografarTexto(text) {
        let textEncrypted = "";
        for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            if (letter === 'e') {
                textEncrypted += 'enter';
            } else if (letter === 'i') {
                textEncrypted += 'imes';
            } else if (letter === 'a') {
                textEncrypted += 'ai';
            } else if (letter === 'o') {
                textEncrypted += 'ober';
            } else if (letter === 'u') {
                textEncrypted += 'ufat';
            } else {
                textEncrypted += letter;
            }
        }
        return textEncrypted;
    }
});