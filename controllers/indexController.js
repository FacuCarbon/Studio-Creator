module.exports = {
    index: (req, res) =>{
        res.render('index', {
        title: 'home',
        css: 'style.css'
    })
    }
}