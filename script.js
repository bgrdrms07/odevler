document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ufcSiparisForm');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            
            const data = {
                ad: document.getElementById('adSoyad').value,
                eposta: document.getElementById('email').value,
                kategori: document.getElementById('kategori').value,
                biletAdedi: document.getElementById('adet').value
            };

            console.log("--- YENİ SİPARİŞ ALINDI ---");
            console.log("Müşteri:", data.ad);
            console.log("İletişim:", data.eposta);
            console.log("Seçilen Paket:", data.kategori);
            console.log("Adet:", data.biletAdedi);
            console.log("---------------------------");

            alert("Sipariş verileri konsola başarıyla yazdırıldı!");
            form.reset(); 
        });
    }
});