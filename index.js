// var http = require('http');
// var fs = require('fs');

// var server = http.createServer((req, res) => {
//     //req -> kullanıcının uygulamaya yapmış olduğu talep
//     console.log(req.url);


//     if (req.url == "/") {
//         fs.readFile('index.html', (err, html) => {
//             res.write(html);
//             res.end();
//             // res.write('<h1>Ana Sayfa</h1>');
//         });


//     } else if (req.url == "/products") {
//         fs.readFile('urunler.html', (err, html) => {
//             res.write(html);
//             res.end();
//             // res.write('<h1>Ana Sayfa</h1>');
//         })
//     } else {
//         fs.readFile('404.html', (err, html) => {
//             res.write(html);
//             res.end();
//             // res.write('<h1>Ana Sayfa</h1>');
//         })
//     }

//     //kullanıcıya gönderilen cevap


// });


// server.listen(3000, () => {
//     console.log('node.js server at port 3000');
// });




/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('node_modules'));

const data = [
    { id: 1, name: 'iphone 14', price: 30000, isActive: true, imageUrl: "38519.jpg" },
    { id: 2, name: 'iphone 15', price: 40000, isActive: false, imageUrl: "maxresdefault.jpg" },
    { id: 3, name: 'iphone 16', price: 50000, isActive: true, imageUrl: "FGvVjfbVkAMwugy.jpg" },
];




app.use("/products/:id", function (req, res) {
    const urun = data.find(u => u.id == req.params.id);
    res.render('products-detail', urun);
});


app.use("/products", function (req, res) {
    res.render("products", { urunListe: data });
});

app.use("/", function (req, res) {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
