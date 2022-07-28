// Döviz Kuru Çeviri İşlemi İçin Rakam Yazılan Yeri Seçiyoruz
// '#' Kullanılmasının Sebebi CSS Selector Kullanıldığın Dolayı
const AmountElement = document.querySelector("#amount");

// Döviz Kuru Çevirisi İçin Girdiğimiz Rakam 
// Hangi Para Birimine Aitse Onu Seçiyoruz
const FirstSelect = document.querySelector("#firstCurrency");

// Döviz Kuru Çevirisi İçin Girdiğimiz Rakam 
// Hangi Para Birimine Çevirilecekse Onu Seçiyoruz
const SecondSelect = document.querySelector("#secondCurrency");

// Döviz Kuru Çevirisi İçin Arayüzde Görünen Kısımların 
// İşlem Yapılma İhtimaline Karşın Çalışır Duruma Getirilmesi Gerekiyor
// Bunun İçin 'currency.js' Sayfasındaki 'Currency' Class'ını 
// 'app.js' Sayfasında Başlatıyoruz
const NewCurrency = new Currency("USD","TRY");

// Döviz Kuru Çevirisi İçin Girilen Rakam Ait Olan Para Birimi Seçiminin
// ve Çevirilecek Para Birimi Seçiminin Değerlerinin 
// En Alttaki Kısma Yazılması İçin 'Obje' Oluşturuyoruz
const ui = new UI(FirstSelect,SecondSelect);

EventListeners();

function EventListeners()
{
    // Döviz Kuru Çevirisi İçin Rakam Değeri Girildiğine Yada 
    // Girilen Değer Değiştirildiğinde Çeviri Sonucunun Direk Yazılmasını İstiyoruz

    // 'input' Rakam Girildiğinde Yada Değiştirildiğinde Oluşacak Olan Durumdur
   
    // 'ExchandeCurrency' Fonksiyonu İse Rakam Girildiğinde Yada Değiştirildiğinde
    // Bu Durumu Algılayıp Girilen Değer Rakam İse Sonucu Yazdıracak
    // Rakam Değil İse Hata Verecek
    AmountElement.addEventListener("input",ExchangeCurrency);

    // Döviz Kuru Çevirisi İçin Girdiğimiz Rakam 
    // Hangi Para Birimine Aitse Onu Seçtikten Sonra Yapılacak İşlem
    FirstSelect.onchange = function()
    {
        // Döviz Kuru Çevirisi İçin Girilen Rakama Ait 
        // Para Birimi Seçildiğinde Bunu Değişikliği Alıyoruz
        // Değişikliği Alırken Alt Kademeye Geçiş İçin 
        // 'options' Özelliğini Kullanıyoruz
        // Alt Kademede İse Seçilen Para Birimine Tam Erişim İçin 
        // 'indis' Numarasını Kullanıyoruz
        // 'indis' Numarası Üzerinden 'indis' İçeriğini Görmek İçin 
        // 'textContent' Özelliğini Kullanıyoruz
        NewCurrency.ChangeFirstCurrency(FirstSelect.options[FirstSelect.selectedIndex].textContent);

        // Döviz Kuru Çevirisinde Girilen Rakama Ait Olan 
        // Para Birimi Seçimi Yapıldığında
        // Bu Seçimi Ekrana Yazdırıyoruz
        ui.ChangeFirst();
    };

    // Döviz Kuru Çevirisi İçin Girdiğimiz Rakam 
    // Hangi Para Birimine Çevirilecekse Onu Seçtikten Sonra Yapılacak İşlem
    SecondSelect.onchange = function()
    {
        // Döviz Kurunun Çevirileceği Para Birimi 
        // Seçildiğinde Bunu Değişikliği Alıyoruz
        // Değişikliği Alırken Alt Kademeye Geçiş İçin 
        // 'options' Özelliğini Kullanıyoruz
        // Alt Kademede İse Seçilen Para Birimine Tam Erişim İçin 
        // 'indis' Numarasını Kullanıyoruz
        // 'indis' Numarası Üzerinden 'indis' İçeriğini Görmek İçin 
        // 'textContent' Özelliğini Kullanıyoruz
        NewCurrency.ChangeSecondCurrency(SecondSelect.options[SecondSelect.selectedIndex].textContent);

        // Döviz Kuru Çevirisinde Çevirilecek Para Birimine Ait Olan 
        // Para Birimi Seçimi Yapıldığında
        // Bu Seçimi Ekrana Yazdırıyoruz
        ui.ChangeSecond();
    };
}

// Döviz Kuru Çevirisi İçin Rakam Girildiğinde Yada 
// Değiştirildiğinde Çalışacak Fonksiyon
function ExchangeCurrency()
{
    // Çeviri İçin Rakam Girildiğinde Yada Değiştirildiğinde 
    // Bu Güncellemenin Sürekli Olarak Takip Edilmesi Gerekiyor
    NewCurrency.ChangeAmount(AmountElement.value);


    // 'currency.js' Sayfasındaki 'Exchange' Metodu İle 
    // Elde Edilen Veriyi 'NewCurrency' nin Alt Özelliği Olarak
    // Çağırıp Kullanıyoruz

    // Döviz Kuru Çevirisi İçin 'currency.js' Sayfasında 
    // 'Exchande' Metodunda Girilen Değerin Sonuç ve 
    // Hata Durumlarının Olduğu 'JSON' Objesini Alıyoruz
    NewCurrency.Exchange()

    // 'Exchange' Metodunda Return İle Dönen Değeri 
    // En Alttaki Kısma Yazdırıyoruz
    .then(Result => 
        {
            ui.DisplayResult(Result);
        })

    // Hata Varsa Yazdırıyoruz
    .catch(Error => console.log(Error));
}