# Interview-Task

## Description

Temel seviyede kullanıcı üyeligi yapilabilen, oturum acma ve kapatma ozelliklerine sahip basit bir web projesi. Oturum açan kullanıcılar anasayfada bir takvim
görmektedir. Takvimde kullanıcının kendi eklediği etkinlikler gösterilmesi ve takvime tıklayarak ekleme ve etkinlik silme işlemleri başarıyla gerçekleşmesi hedeflenmektedir.

#### Özel anahtar kodu
gAAAAABia81VWkNua1t5eXysWu4iEfuTKcGV3g1MD-ohMfevX3qdxsozVK99sLzF4wfksG1tGAnGgvpeYfx_IIXCSuIQKXa404FsM8O61jxk2VfLHttNc0bQyEpeKoP91l7q5ZO1yclzLZC59RXL4OOnisrIc8LFTG8UCbOfWWzgnXO_Ua-HhhNgjI8lmpTNIfHkfy2TVGSJuyUL2MlHrU0I_GXt2_e2thV-kWtAZenpZVvJfJJcOKA=

## Install

npm 8.1.1 ve diğer kütüphaneler server ve client dosyalarında bulunan package.json dosyasında sürümleriyle beraber bulunmaktadır.


* Bu repoyu bilgisayarınıza kopyalayın 

`git clone https://github.com/MuhammetTurkan/Interview-Task.git`

![01](https://user-images.githubusercontent.com/83230346/167271441-aafcac1f-4d25-46e6-8502-e2739c58a92c.PNG)


* Proje klasöründe client klasörüne `cd client` yazarak geçmeliyiz

![02](https://user-images.githubusercontent.com/83230346/167271474-c483e44e-76e1-40d8-b8f3-7f84307f3089.PNG)

* Client dosyasında projeyi çalıştırmak için `npmm start` yazmalıyız.

![04](https://user-images.githubusercontent.com/83230346/167271540-a7d1351c-ee8b-4c21-83af-3ae60cf24185.PNG)

* Daha sonra başka bir cmd ekranında proje dosyasının içindeki server klasörüne `cd server` komutu ile geçelim

![03](https://user-images.githubusercontent.com/83230346/167271637-4722e8f4-9366-462e-a0ef-7021ececfdc3.PNG)

* Client klasöründe de projeyi çalıştırmak için `npm start` yazalım.

![05](https://user-images.githubusercontent.com/83230346/167271739-e43ddae2-2264-4ccc-8a52-b834539718b1.PNG)


## Yapabildiklerim

* Kayıt ekranı ve giriş ekranı. Kayıt olan kullanıcıların bilgileri redis ve aynı zamanda mongoDb veri tabanına kaydediliyor.
* Kayıt olurken kayıtlı email ile bir daha kayıt olunmuyor. Giriş ekranında ise sorgu çalışıyor doğru veya yanlış girildiğinde geri dönüş alınıyor.
* Kayıt olurken, başarılı kayıtta giriş ekranına, aynı zamanda giriş yaparken; başarılı girişte kullanıcı anasayfaya yönlendirme(routerlama) işlemi ancak sayfayı yenileyince oluyor
