const serverHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const responseDate = {
        name: '叼毛',
        age: 18
    }
    
    res.end(
        JSON.stringify(responseDate)
    )
}

module.exports = serverHandler