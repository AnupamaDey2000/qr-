document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const qrText = document.getElementById('qrText').value;
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    
    // Clear previous QR code
    qrCodeContainer.innerHTML = '';
  
    // Generate QR code
    QRCode.toCanvas(qrText, { errorCorrectionLevel: 'H' }, function(err, canvas) {
      if (err) {
        console.error(err);
        return;
      }
      qrCodeContainer.appendChild(canvas);
    });
  });
  