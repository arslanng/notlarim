/*
import * as fs from 'node:fs';
// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
fs.writeFile('../employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err)=>{
    if (err) console.log(err);
    else console.log('dosya başarılı bir şekilde oluşturuldu') });
// Bu veriyi okuyalım. (READ)
fs.readFile('../employees.json', 'utf8', (err, data)=>{
    if (err) console.log(err);
    else 
    console.log(data);
    console.log('dosya başarılı bir şekilde okundu');
});
// Bu veriyi güncelleyelim.
fs.writeFile('../employees.json', '{"name": "Employee 2 Name", "salary": 4000}', 'utf8', (err)=>{
    if (err) console.log(err);
    else
    console.log('veri güncellendi') });

// Dosyayı silelim.
fs.unlink('../employees.json', (err)=>{
    if(err) console.log('silemedim:(');
    else console.log('DOSYA SİLİNDİ'); });
*/