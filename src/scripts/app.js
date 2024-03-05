document.addEventListener("DOMContentLoaded", function() {
    const InputText = document.querySelector('.main-inputdata-text textarea');
    const OutputText = document.querySelector('.main-outputdata-outputText');
    const encryptButton = document.querySelector('.main-inputdata-button-encrypt');
    const decryptButton = document.querySelector('.main-inputdata-button-decrypt');
    const hideImage = document.querySelector('.main-outputdata-img img');
    const hideText = document.querySelector('.main-outputdata-subtitle');
    const hideParagraph = document.querySelector('.main-outputdata-paragraph');

    encryptButton.addEventListener('click', function() {
        const originalText = InputText.value.trim();
        const textEncrypted = criptografarTexto(originalText);
        OutputText.textContent = textEncrypted;
        hideImage.style.display = 'none';
        hideText.style.display = 'none';
        hideParagraph.style.display = 'none';
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

    decryptButton.addEventListener('click', function() {
        const  originalText = InputText.value.trim();
        const textDecrypted =  originalText.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
        OutputText.textContent = textDecrypted;
        hideImage.style.display = 'none';
        hideText.style.display = 'none';
        hideParagraph.style.display = 'none';
    });
});