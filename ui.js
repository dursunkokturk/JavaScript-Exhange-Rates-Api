class UI
{
    // Döviz Kuru Çevirisi İçin Girilen Rakama Ait Olan Para Birimini ve
    // Çeviri Yapılacak Para Birimini Seçiyoruz
    constructor(FirstSelect,SecondSelect)
    {
        // Arayüz İşlemlerinde Select List'leri Seçerken 
        // Select List'in ID'sini Kullanmadan 
        // 'ID' Değerinin Atandığı Değişkenin Adını Seçebiliriz
        
        // Arayüzde Yapılan Girilen Para Birimine Ait Olan 
        // Para Birimi Seçim İşlemlerinin 
        // Direk Arayüzde Güncelleme Durumu İle Görünmesini Sağlıyor
        this.FirstSelect = FirstSelect;

        // Arayüzde Yapılan Çeviri Yapılacak Para Birimine Ait Olan 
        // Para Birimi Seçim İşlemlerinin 
        // Direk Arayüzde Güncelleme Durumu İle Görünmesini Sağlıyor
        this.SecondSelect = SecondSelect;

        // Girilen Rakam Ait Olan Para Birmini Seçiminin 
        // En Altta Yazıldığı Kısmı Seçiyoruz
        this.OutputFirst = document.getElementById("outputFirst");

        // Çeviri Yapılacak Para Biriminin Seçiminin 
        // En Altta Yazıldığı Kısmı Seçiyoruz
        this.OutputSecond = document.getElementById("outputSecond");

        // Çeviri İçin Seçim Sonuçlarının Yansıyacağı En Alttaki Kısım
        this.OutputResult = document.getElementById("outputResult");
    }

    ChangeFirst()
    {
        // Döviz Kuru Çevirisinde Girilen Rakama Ait Olan Para Birimi 
        // Seçiminde Para Birimi Seçildikten Sonra
        // Bunu En Alttaki Kısma Yazdırıyoruz
        this.OutputFirst.textContent = this.FirstSelect.options[this.FirstSelect.selectedIndex].textContent;
    }

    ChangeSecond()
    {
        // Döviz Kuru Çevirisinde Çeviri Yapılacak Para Birimine 
        // Ait Olan Para Birimi Seçiminde Para Birimi Seçildikten Sonra
        // Bunu En Alttaki Kısma Yazdırıyoruz
        this.OutputSecond.textContent = this.SecondSelect.options[this.SecondSelect.selectedIndex].textContent;
    }

    // 'currency.js' Sayfasında 'Exchange' Metodunda 
    // 'return' İle Dönen Değeri
    // 'app.js' Sayfasında 'Result' Altında 
    // 'DisplayResult' Metodunu Kullanarak Alıyoruz
    DisplayResult(Result)
    {
        // Seçilen Para Birimi Değerlerini Ekrana Yazdırıyoruz
        // Yazdırma İşlemini Yaptıktan Sonra 
        // Bunu Ekranın En Altındaki Kısmına Yazdırıyoruz
        this.OutputResult.value = Result;
    }
}