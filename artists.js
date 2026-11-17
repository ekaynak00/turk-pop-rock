/* Her tür için öne çıkan sanatçılar: "Sanatçı|şarkı|şarkı|şarkı". Albüm adları (albüm) diye işaretlidir.
   İlk taslak: yayımlamadan önce şarkı adlarını ve sanatçı seçimlerini elle kontrol et. */
const ART = {
ilkrnr:["Erkin Koray|Bir Eylül Akşamı|Anma Arkadaş|Kızları da Alın Askere","Erol Büyükburç|Little Lucy|Gençlik Şarkısı"],
aranjman:["İlham Gencer|Bak Bir Varmış Bir Yokmuş","Ajda Pekkan|Hoş Gör Sen"],

altinmikrofon:["Mavi Işıklar|Helvacı|Çayır Çimen Geze Geze|İyi Düşün Taşın","Silüetler|Kaşık Havası|Lorke Lorke","Cem Karaca & Apaşlar|Emrah","Tülay German|Burçak Tarlası","Haramiler|Arpa Buğday Daneler|Fabrika Kızı"],
anadolupop:["Moğollar|Ilgaz|Garip Çoban|Bir Şey Yapmalı","Barış Manço|Kol Düğmeleri|Dağlar Dağlar|Gülpembe","Cem Karaca|Resimdeki Gözyaşları|Namus Belası|Bu Son Olsun","Fikret Kızılok|Bu Kalp Seni Unutur mu?|Gönül","Edip Akbayram|Aldırma Gönül|Hasretinle Yandı Gönlüm|Anam Ağlar Başucumda Oturur"],
anadolupsych:["Erkin Koray|Cemalim|Şaşkın|Akrebin Gözleri","3 Hürel|Sevenler Ağlarmış","Barış Manço|Dönence","Mustafa Özkent Orkestrası|Gençlik ile Elele (albüm)"],
anadoluprog:["Barış Manço & Kurtalan Ekspres|Lambaya Püf De|2023 (albüm)","Erkin Koray|Elektronik Türküler (albüm)|Estarabim","Cem Karaca & Dervişan|Tamirci Çırağı"],
anadolurev:["Altın Gün|Goca Dünya|Tatlı Diller Güler Yüze|Yüce Dağ Başında","Gaye Su Akyol|Develerle Yaşıyorum|Hepsi Kafamda Memur Bey|Bu Izdırabın Panzehiri","Lalalar|Kötüye Bişey Olmaz"],

protest:["Cem Karaca|İhtarname|Tamirci Çırağı","Selda Bağcan|Yaz Gazeteci Yaz|İnce İnce Bir Kar Yağar","Edip Akbayram|Aldırma Gönül|Nice Yıllara","Timur Selçuk|Dönek Türküsü","Zülfü Livaneli|Yiğidim Aslanım|Leylim Ley"],
sarkiyazar:["Bülent Ortaçgil|Benimle Oynar mısın|Bu Su Hiç Durmaz","Ezginin Günlüğü|Sabah Türküsü|Düşler Sokağı|Dargın Mıyız","Fikret Kızılok|Bu Kalp Seni Unutur mu?","Feridun Düzağaç|Alev Alev"],
ozgun:["Ahmet Kaya|Kum Gibi|Başım Belada|Hani Benim Gençliğim","Zülfü Livaneli|Karlı Kayın Ormanı|Yiğidim Aslanım","Grup Yorum|Cemo|Bize Ölüm Yok","Edip Akbayram|Hasretinle Yandı Gönlüm"],
yenisarkiyazar:["Pinhani|Dön Bak Dünyaya|Ne Güzel Güldün","Emir Can İğrek|Nalan","Kalben|Sadece","Melike Şahin|Diva Yorgun|Durma Yürüsene"],

akdeniz:["Yeni Türkü|Olmasa Mektubun|Aşk Yeniden","Ezginin Günlüğü|Ebruli|Gemi"],
etnikpop:["Kardeş Türküler|Kırık Zurna","Yeni Türkü|Aşk Yeniden"],
karadeniz:["Kazım Koyuncu|Didou Nana|Hayde|İşte Gidiyorum","Zuğaşi Berepe|Va Mişkunan (albüm)","Şevval Sam|Gelevera Deresi"],
sufielektro:["Mercan Dede|Nar (albüm)|Su (albüm)","BaBa ZuLa|Tabutta Rövaşata (albüm)|Duble Oryantal (albüm)"],

arabeskpop:["Orhan Gencebay|Batsın Bu Dünya|Bir Teselli Ver|Hatasız Kul Olmaz","Ferdi Tayfur|Bana Da Söyle|Emmioğlu|Yaktı Beni","Gülden Karaböcek|Sevsen Ne Olur|Dilek Taşı"],
fantezi:["Ferdi Özbeğen|Gündüzüm Seninle|Büklüm Büklüm|Dilek Taşı","Ümit Besen|Nikah Masası","Coşkun Sabah|Aşığım Sana|Hatıram Olsun|Baharı Bekleyen Kumrular Gibi","Cengiz Kurtoğlu|Unutulan|Yorgun Yıllarım|Resmini Öptüm de Yattım","İbrahim Erkal|Sen Aldırma"],
poparabesk:["Yıldız Tilbe|Delikanlım|Aşkın Kanunu|Vazgeçemem","Mahsun Kırmızıgül|Alem Buysa|Belalım","Ebru Gündeş|Fırtınalar|Araftayım|Senin Olmaya Geldim","Sibel Can|Padişah","Hakan Altun|Hani Bekleyecektin"],
yeniarabeskpop:["Semicenk|Pişman Değilim|Yana Yana|Biz Babadan Böyle Gördük","Sefo|Bilmem Mi?|Tutsak","Mehmet Elmas|Bu Aşkta Zararım Var","Tuğçe Kandemir|Sakın Ola"],

hafif:["Ajda Pekkan|Bambaşka Biri|Kimler Geldi Kimler Geçti|Uykusuz Her Gece","Timur Selçuk|Ayrılanlar İçin","Tanju Okan|Kadınım|Deniz ve Mehtap","Nilüfer|Göreceksin Kendini|Haram Geceler","Sezen Aksu|Allahaısmarladık|Kaç Yıl Geçti Aradan"],
pop80:["Sezen Aksu|Firuze|Sen Ağlama|Gülümse","MFÖ|Ele Güne Karşı Yapayalnız|Sufi|Diday Diday Day","Kayahan|Yemin Ettim|Odalarda Işıksızım","Nükhet Duru|Ben Sana Vurgunum"],
danspop:["Yonca Evcimik|Abone|Bandıra Bandıra","Hakan Peker|Karam|Ateşini Yolla Bana","Mirkelam|Her Gece"],
pop90:["Tarkan|Şımarık|Şıkıdım|Kuzu Kuzu","Mustafa Sandal|Aya Benzer|Araba|Jest Oldu","Sertab Erener|Zor Kadın|Lal","Levent Yüksel|Medcezir|Zalim","Nazan Öncel|Gidelim Buralardan|Gitme Kal Bu Şehirde|Erkekler de Yanar"],
pop2000:["Hande Yener|Kelepçe|Romeo","Gülşen|Be Adam|Ne Kavgam Bitti Ne Sevdam|Bangır Bangır","Murat Boz|Aşkı Bulamam Ben|Uçurum","Demet Akalın|Afedersin","Kenan Doğulu|Yaparım Bilirsin|Tutamıyorum Zamanı"],
altpop:["Mabel Matiz|Boyalı Da Saçların|Ya Bu İşler Ne|Öyle Kolaysa","Melike Şahin|Diva Yorgun|Durma Yürüsene","Can Bonomo|Love Me Back"],
pop2010:["Simge|Aşkın Olayım","Edis|Benim Ol|Çok Çok","Aleyna Tilki|Cevapsız Çınlama|Yalnız Çiçek","KÖFN|Bi' Tek Ben Anlarım","Hadise|Düm Tek Tek|Ara Beni"],
yenidalga:["Bade Karakoç|Fragile|300 texts|eta","Dedublüman|Belki|Sakladığın Bir Şeyler Var","Mert Demir|Antidepresan"],

rock80:["Bulutsuzluk Özlemi|Sözlerimi Geri Alamam|Yaşamaya Mecbursun|Tepedeki Çimenlik","Kesmeşeker|Ey Başını Eğeceksen"],
rock90:["Şebnem Ferah|Sigara|Vazgeçtim Dünyadan|Bu Aşk Fazla Sana","Teoman|Paramparça|İstanbul'da Sonbahar|Renkli Rüyalar Oteli","Haluk Levent|Elfida|Anlasana","Kargo|Yıldızların Altında|Sevmedim Deme"],
alt2000:["Duman|Bu Akşam|Senden Daha Güzel|Köprüaltı","Mor ve Ötesi|Bir Derdim Var|Cambaz|Deli","Athena|Holigan|For Real"],
poprock:["Gripin|Böyle Kahpedir Dünya|Durma Yağmur Durma|Elbet Bir Gün Buluşacağız","Yüksek Sadakat|Belki Üstümüzden Bir Kuş Geçer|Haydi Gel İçelim","Emre Aydın|Belki Bir Gün Özlersin|Afili Yalnızlık","Model|Değmesin Ellerimiz|Pembe Mezarlık|Mey"],
indie:["Yüzyüzeyken Konuşuruz|Boş Gemiler|Dinle Beni Bi'|Bodrum","Adamlar|Koca Yaşlı Şişko Dünya|Rüya","Büyük Ev Ablukada|Tayyar Ahmet'in Sonsuz Sayılı Günleri|Full Faça (albüm)","Dolu Kadehi Ters Tut|Gitme|Anamız Babamız Yok Deriz","Yok Öyle Kararlı Şeyler|Bir Sherlock Değilsin"],
postpunk:["She Past Away|Sonbahar|Girdap|Ağıt","Jakuzi|Sana Göre Bir Şey Yok|Geriye Dönemiyor","Lalalar|Kötüye Bişey Olmaz","Ductape|Ölüm Günüm"],

metal86:["Pentagram (Mezarkabul)|Lions in a Cage|Anatolia","Dr. Skull|Herşey Yolunda"],
oryantalmetal:["Pentagram (Mezarkabul)|Anatolia|Gündüz Gece","Hayko Cepkin|Yarası Saklı|Paranoya|Sakin Olmam Lazım (albüm)"],
numetal:["maNga|Bir Kadın Çizeceksin|Cevapsız Sorular|Dursun Zaman","Hayko Cepkin|Tanışma Bitti (albüm)"],

almanyarap:["King Size Terror|Bir Yabancının Hayatı","Cartel|Cartel","Erci E.|Türk Olduğum İçin","Karakan|Defol Dazlak"],
yeralti:["Nefret|Meclis-i Ala İstanbul (albüm)","Ceza|Holocaust|Rapstar|Yerli Plaka","Sagopa Kajmer|Baytar|Vasiyet","Sultana|Kuşu Kalkmaz"],
arabeskrap:["Sagopa Kajmer|Bir Pesimistin Gözyaşları (albüm)|Romantizma (albüm)","Taladro|Rüzgar Hiç Ağlar Mı?|Deniz Kızı|17 Ay","Rahdan|Farkedersin Belki","Musa|Yoksun Yanımda","Zahriyan|Anneme Söylemeyin"],
yeniokul:["Ezhel|Geceler|İmkansızım|Müptezhel (albüm)","Norm Ender|Mekanın Sahibi","Gazapizm|Heyecanı Yok|Perişan","Şanışer|Susamam","Ben Fero|Demet Akalın"],
trap:["UZI|Paparazzi|Senin Uğruna","Lvbel C5|COOOK PARDON","cakal|İmdat","BLOK3|Kusura Bakma|Sebebi Yar","Murda|Bi Sonraki Hayatımda Gel|Pahalı|Eh Baba"]
};

/* Doğrulanmış doğrudan bağlantılar: "Sanatçı|Şarkı" -> YouTube video id + Spotify track id. Diğer şarkılar arama bağlantısı alır. */
const LINKS = {};
