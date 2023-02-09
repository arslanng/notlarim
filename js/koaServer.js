const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    const url = ctx.url;
    console.log(url)
    if(url==='/'){
        ctx.body = '<h1>İndex sayfama hoşgeldiniz</h1>';
    } else if(url==='/about'){ 
        ctx.body = '<h1>hakkımda sayfama hoşgeldiniz</h1>';
    } else if(url==='/contact'){
        ctx.body = '<h1>hakkımda sayfama hoşgeldiniz</h1>';
    }else{
        ctx.response.status = 404;
        ctx.body = '<h1>404: Sayfa Bulunamadı</h1>';
    }
});

app.listen(3000);