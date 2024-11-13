const http = require('http')

const server = http.createServer((req,res) =>{
if (req.url ==='/'){
    res.end('Home page')
}
if (req.url ==='/about'){
    for (let j = 0; j < 1000; j++){
        console.log(`${i} ${j}`)
    }
    res.end('About Page')
}


})
server.listen(5000,() => {
    console.log('Server Listening on port 5000...')
})  