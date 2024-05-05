const downloadFile = () => {
  fetch('https://portafolio-jose-enrique-mendo-huapayas-projects.vercel.app/src/assets/cv.pdf')
    .then((response) => response.blob())
    .then((blob) => {
      const downloadInstance = document.createElement('a');
      downloadInstance.href = URL.createObjectURL(blob);
      downloadInstance.download = 'JOSE ENRIQUE MH CV.pdf';
      downloadInstance.style.display = 'none';
      document.body.appendChild(downloadInstance);
      downloadInstance.click();
      document.body.removeChild(downloadInstance);
    })
    .catch((error) => {
      console.error('Error al descargar el archivo:', error);
    });
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Error al copiar el texto:', err);
  }
};

function openEmail(email) {
  const emailInstance = `mailto:${email}`;
  window.location.href = emailInstance;
}
export { downloadFile, copyText, openEmail };
