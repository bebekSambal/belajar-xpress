const xpress = require('express');
const app = xpress();
const port = 3000;

app.get('/',(req,res)=>{ // routing ke beranda (root)
    res.send('hello world');
})
app.get('/about',(req,res)=>{ // routing ke about
    res.send('ini adalah halaman about rek');
})
app.get('*',(req,res)=>{ // routing ke selain route diatas
    res.send('nyasar lu njenk');
})

app.listen(port, ()=>{
    console.log(`app lagi nguping di http://localhost:${port}`);
})