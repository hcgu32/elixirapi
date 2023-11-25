const fetch = require("node-fetch");
const eurl = `https://elixirapi.xyz`;
const apiy=`[ElixirAPI]`
const hata = `${apiy} Api kaynaklı bir hata oluştu. Sorunu Discord sunucumuza (https://discord.gg/3hYUsu3cFa) gelerek bildirebilirsiniz.`;

//mc sw bilgi
const mcsw= async function (ip) {
  try {
     if (!ip) throw new Error(`${apiy} Minecraft sunucu bilgilerine erişmek için bir sunucu adresi giriniz.`);
     const data = await fetch(
      `${eurl}/minecraftSunucuBilgi?sunucuAdresi=${encodeURI(ip.toLocaleLowerCase("tr"))}`)
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//tdk sozluk
const tdk = async function (kelime) {
  try {
    if (!kelime)
      throw new Error(`${apiy} Türk Dil Kurumu'nda arayacağınız kelimeyi giriniz.`);
    const data = await fetch(
      `${eurl}/tdk?metin=${encodeURI(kelime.toLocaleLowerCase("tr"))}`
    );
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas).sonuc;
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//link kontrol
const linkkontrol = async function (metin) {
  try {
    if (!metin)
      throw new Error(`${apiy} İçinde link olup olmadığını öğrenmek için bir metin giriniz.`);
    const data = await fetch(
      `${eurl}/linkSorgu?metin=${encodeURI(metin.toLocaleLowerCase("tr"))}`
    );
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//küfür kontrol
const kufurkontrol = async function (metin) {
  try {
    if (!metin)
      throw new Error(`${apiy} İçinde küfür olup olmadığını öğrenmek için bir metin giriniz.`);
    const data = await fetch(
      `${eurl}/kufurSorgu?metin=${encodeURI(metin.toLocaleLowerCase("tr"))}`
    );
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//ceviri
const ceviri = async function (metin,dil) {
  try {
    if (!metin) throw new Error(`${apiy} Çeviri yapabilmek için bir metin giriniz.`);
  if (!dil) throw new Error(`${apiy} Çeviri yapabilmek için bir dil giriniz.`);
    const data = await fetch(
      `${eurl}/ceviri?metin=${encodeURI(metin.toLocaleLowerCase("tr"))}&dil=${encodeURI(dil.toLocaleLowerCase("tr"))}`)
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//random gif
const randomgif = async function (filtre) {
  try {
    if (!filtre)
      throw new Error(`${apiy} Random gif görüntülemek için bir filtre belirtiniz.`);
    const data = await fetch(
      `${eurl}/randomGif?filtre=${encodeURI(filtre.toLocaleLowerCase("tr"))}`
    );
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//ip sorgu
const ipsorgu = async function (ip) {
  try {
    if (!ip)
      throw new Error(`${apiy} Ip sorgulamak için bir ip giriniz.`);
    const data = await fetch(
      `${eurl}/ipSorgu?ip=${encodeURI(ip.toLocaleLowerCase("tr"))}`
    );
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//qr
const qr = async function (format,bosluk,boyut,metin) {
  try {
 if (!format)
      throw new Error(`${apiy} QR kod oluşturmak için bir resim formatı giriniz. (Örneğin png)`);
 if (!bosluk)
      throw new Error(`${apiy} QR kod oluşturmak için bir boşluk miktarı giriniz.(Örneğin 10)`);
 if (!boyut)
      throw new Error(`${apiy} QR kod oluşturmak için bir resim boyutu giriniz. (Örneğin 250×250)`);
 if (!metin)
      throw new Error(`${apiy} QR kod oluşturmak için bir metin giriniz.`);
  const data = await fetch(
      `${eurl}/qrOlustur?format=${encodeURI(format.toLocaleLowerCase("tr"))}&bosluk=${encodeURI(bosluk.toLocaleLowerCase("tr"))}&boyut=${encodeURI(boyut.toLocaleLowerCase("tr"))}&metin=${encodeURI(metin.toLocaleLowerCase("tr"))}`
    );
    if (data.error) throw new Error(hata);
    return data;
  } catch (e) {
    throw new Error(hata);
  }
};

//sifre olustur
const sifreolustur = async function (uzunluk,karakterler) {
  try {
     if (!uzunluk) throw new Error(`${apiy} Şifre oluşturabilmek için bir uzunluk giriniz. (Örneğin 10)`);
   if (!karakterler) throw new Error(`${apiy} Şifre oluşturabilmek için birkaç karakter giriniz. (Örneğin AbCd123)`);
    const data = await fetch(
      `${eurl}/sifreOlustur?uzunluk=${encodeURI(uzunluk.toLocaleLowerCase("tr"))}&karakterler=${encodeURI(karakterler.toLocaleLowerCase("tr"))}`)
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//topgg
const topgg = async function (botId,kullaniciId,token) {
  try {
  if (!botId)
      throw new Error(`${apiy} Top.gg kontrol için bir Discord bot ID' si giriniz.`);
 if (!kullaniciId)
      throw new Error(`${apiy} Top.gg kontrol için bir Discord kullanıcı ID' si giriniz.`);
 if (!token)
      throw new Error(`${apiy} Top.gg kontrol için bir Top.gg tokeni giriniz.`);
      const data = await fetch(
      `${eurl}/topgg?botId=${encodeURI(botId.toLocaleLowerCase("tr"))}&kullaniciId=${encodeURI(kullaniciId.toLocaleLowerCase("tr"))}&token=${encodeURI(token.toLocaleLowerCase("tr"))}`)

    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//Discord kullanıcı bilgi
const discordIdBilgi = async function (id) {
  try {
     if (!id) throw new Error(`${apiy} Discord kullanıcı bilgilerine erişmek için bir Discord kullanıcı ID'si belirtiniz.`);
      const data = await fetch(
      `${eurl}/discordIdBilgi?kullaniciId=${encodeURI(id.toLocaleLowerCase("tr"))}`)
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//npm bilgi
const npm = async function (package) {
  try {
     if (!package) throw new Error(`${apiy} Bir NPM modülü belirtiniz.`);
      const data = await fetch(
      `${eurl}/npm?package=${encodeURI(package.toLocaleLowerCase("tr"))}`)
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//random espri
const randomEspri = async function () {
  try {
    const data = await fetch(
      `${eurl}/randomEspri`)
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//webscreenshot
const webScreenshot = async function (url) {
  try {
     if (!url) throw new Error(`${apiy} Bir websitesi (URL) belirtiniz.`);
      const data = await fetch(
      `${eurl}/webScreenshot?url=${encodeURI(url.toLocaleLowerCase("tr"))}`)
    if (data.error) throw new Error(hata);
    const datas = await data.text();
    const res = JSON.parse(datas)
    return res;
  } catch (e) {
    throw new Error(hata);
  }
};

//resimli ping
const ping = function (ping) {
  try {
  if (!ping) throw new Error(`${apiy} Resimli Ping için bir ping miktarı belirtiniz.`);
   const url=`${eurl}/ping?ping=${ping}`
   return url 
  } catch (e) {
    throw new Error("hata");
  }
};

module.exports = { tdk, linkkontrol, kufurkontrol,ceviri,randomgif,ipsorgu,qr,sifreolustur,topgg,mcsw,discordIdBilgi,npm,randomEspri,webScreenshot,ping};
