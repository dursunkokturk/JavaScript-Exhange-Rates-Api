// Bu Projede ES6 Kullanarak Kod Yazacağız
// Arayüz Elemanı Bu Sayfada Kullanılmayacak
// DOM Elementi Bulunmayacak



class Currency 
{
    // 'app.js' Sayfasından Girilen Rakamın Ait Olduğu Para Birimi Değerini 
    // ve Çeviri Yapılacak Para Birimi Değerlerini Gönderiyoruz
    constructor(firstCurrency,secondCurrency)
    {
        // Girilen Rakamın Ait Olduğu Para Birimi Değeri
        this.firstCurrency = firstCurrency;

        // Çeviri Yapılacak Para Birimi Değeri
        this.secondCurrency = secondCurrency;

        // 'URL' Ekleme İşlemi Dinamik Olarak Yapılacak
        this.url = "https://api.exchangeratesapi.io/latest?base=";

        // 'Amount' Değeri Döviz Kuru Çavirisi İçin 
        // Rakam Girilme Yada 
        // Rakam Değiştirilme Durumları Olacağı İçin 
        // Değişken Bir Değer Olacağından Dolayı
        // İlk Olarak 'null' Değerini Veriyoruz
        this.amount = null;
    }

    // 'Exchange' Metodu İle Veri Alışveri Yapılacak
    Exchange()
    {
        return new Promise((resolve,reject)=>
        {
            // 'this.url' İle 'URL' den Gelen Döviz Kuru Çevirisi 
            // İçin Girilen Linki Alıyoruz

            // 'this.firstCurrency' İle Girilen Rakama Ait Olan 
            // Para Birimi İle Linkten Gelen Para Biriminin de Aynı Olması İçin
            fetch(this.url + this.firstCurrency)

            // Elde Edilen 'Response Objesi' İçindeki Veriyi 
            // 'JSON' Tipinde Veriye Çeviriyoruz
            .then(Response => Response.json())

            // 'JSON' Veri Tipine Çevirdiğimiz Veriyi Yazdırıyoruz
            .then(Data => 
                {
                    // 'Response.json' İle Gelen ve 
                    // 'Data' Değişkenine Atanan 'JSON' Objesi İçinden
                    // 'rates' Özelliğini Kullanarak 
                    // Para Birimini Alıyoruz
                    const Parity = Data.rates[this.secondCurrency];

                    // Girilen Rakamın Veri Tipi String Olarak Geliyor 
                    // Bu Veri Tipini Sayıya Çeviriyoruz
                    const amount2 = Number(this.amount)

                    // Çeviri İçin Girilen Rakam İle 
                    // Çevirilecek Para Biriminin Sayısal Karşılığını Çarpıyoruz
                    let Total = Parity * amount2;
                    resolve(Total);
                })

            // Hata Varsa Yazdırıyoruz
            .catch(Error => console.log(Error));
        });
    }

    // İlk Olarak Sabit Olarak Tanımlanan Girilen Para Birimi Değerini 
    ChangeAmount(amount)
    {
        // Rakam Girildikçe Yada Değiştikçe Güncellemek Gerekiyor
        this.amount = amount;
    }

    // Rakam Girildiğinde Girilen Rakama Ait Olan Para Birimi Değeri Değiştiğinde
    ChangeFirstCurrency(NewFirstCurrency)
    {
        // Bu Değişen Değeri Artık Yeni Değerimiz Olarak Alıyoruz
        this.firstCurrency = NewFirstCurrency;
    }

    // Çevirilecek Para Birimi Seçildiğinde 
    ChangeSecondCurrency(NewSecondCurrency)
    {
        // Bu Değişen Değeri Alıyoruz
        this.secondCurrency = NewSecondCurrency;
    }
}