$('.addButton')
    .on('click', () => {
        let url = window.prompt('请输入要添加的网址')
        if(url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        console.log(url)
    })