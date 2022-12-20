/*
import { readFile } from 'node:fs';

// Dosya okumak
readFile('../password.txt','utf8', (err, data) => {
     if (err) console.log(err); 
     console.log(data);
     console.log('dosya okundu') 
    });
    // Dosya Yazmak
    import { writeFile } from 'node:fs';
    
    writeFile('../example.json', 'kodluyoruzzz', 'utf8', (err)=>{
        if (err) console.log(err); 
        console.log('dosya başarılı bir şekilde oluşturuldu')
    });
//  Veri Eklemek

import { appendFile } from 'node:fs';

appendFile('../example.txt', '\nkodluyoruz 2222', 'utf8', (err)=>{
    if (err) console.log(err); 
    console.log('yeni veri eklendi')
});

// Dosya silmek
import { unlink } from 'node:fs';

unlink('../example.json', (err)=>{
    if(err) console.log('silemedim:(');
    else console.log('DOSYA SİLİNDİ');
});

// Klasörler Oluşturmak
import { mkdir } from 'node:fs';

mkdir('../uploads/json', { recursive: true }, (err)=>{
    if(err) console.log(err);
    else console.log('Klasörler Oluşturuldu');
});

// Klasörler silmek
import { rmdir } from 'node:fs';

rmdir('../uploads', { recursive: true }, (err)=>{
    if(err) console.log(err);
    else console.log('Klasörler silindi');
});
*/
global.console.log('log');
// console.log(__dirname);
// Prints: /Users/mjr
// console.log(path.dirname(__filename));
// Prints: /Users/mjr

import * as fs from 'node:fs';
fs.appendFile('../example.txt', '\nkodluyoruz 2222', 'utf8', (err)=>{
    if (err) console.log(err); 
    console.log('yeni veri eklendi')
});