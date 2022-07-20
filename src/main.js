const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const urlName = localStorage.getItem('urlName')
const urlNameObject = JSON.parse(urlName)
const hashMap = urlNameObject || [    //用hash map保存初始的网站和后续添加的网站
    {logo: 'G', url: 'https://www.google.com'},
    {logo: 'C', url: 'https://www.caniuse.com'},
    {logo: 'M', url: 'https://www.developer.mozilla.org'},
    {logo: 'W', url: 'https://www.wandoc.com'},
    {logo: 'Z', url: 'https://www.zhangxinxu.com'}
]
const simplifyUrl = (url) => {    //格式化网址
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')
}

const render = () => {    //点击卡片跳转网页，点击X按钮删除卡片
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
                <div class="site">
                    <div class="logo">${node.logo}</div>
                    <div class="link">${simplifyUrl(node.url)}</div>
                    <div class="close">
                        <svg class="closeImg"><use href="#close"></use></svg>
                    </div>
                </div>
            </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url, '_self')
        })
        $li.on('click', '.close', (event) => {
            event.stopPropagation()
            hashMap.splice(index, 1)
            render()
        })
    })
}

render()

$('.addButton').on('click', () => {    //添加网址功能
    let url = window.prompt('请输入要添加的网址')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    hashMap.push(
        {
            logo: simplifyUrl(url)[0].toUpperCase(),
            url: url
        }
    )
    render()
})

window.onbeforeunload = () => {    //保存功能
    const string = JSON.stringify(hashMap)
    localStorage.setItem('urlName', string)
}

$(document).on('keypress', (event) => {    //按键盘开网页
    const {key} = event
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url, '_blank')
        }else if (hashMap[i].logo.toUpperCase() === key) {
            window.open(hashMap[i].url, '_blank')
        }
    }
})