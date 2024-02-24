const xpress = require('express');
const app = xpress();
const port = 3000;

app.get('/',(req,res)=>{ // routing ke beranda (root)
    res.send('hello world');
})

app.listen(port, ()=>{
    console.log(`app lagi nguping di http://localhost:${port}`);
})