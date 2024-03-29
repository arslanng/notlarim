const http = require('http')

const server = http.createServer((req, res)=>{

    const url = req.url;
    
    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>İndex Sayfası</h1>');
    } else if (url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hakkımda Sayfası');
    } else if (url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('İletişim Sayfası');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Sayfa Bulunamadı</h1>');
    }

    res.end();
});

const port = 3000;

server.listen(port, ()=>{
    console.log(`Sunucu Port ${port} de başlatıldı.`);
});

