const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const urlName = localStorage.getItem('urlName')
const urlNameObject = JSON.parse(urlName)
const hashMap = urlNameObject || [    //用hash map保存初始的网站和后续添加的网站
    {logo: 'G', url: 'https://google.com'},
    {logo: 'C', url: 'https://caniuse.com'},
    {logo: 'M', url: 'https://developer.mozilla.org'},
    {logo: 'W', url: 'https://wandoc.com'},
    {logo: 'Z', url: 'https://zhangxinxu.com'}
]
const simplifyUrl = (url) => {    //格式化要显示的网址
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')
}

const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
                <div class="site">
                    <div class="logo">${node.logo}</div>
                    <div class="link">${simplifyUrl(node.url)}</div>
                    <div class="close">
                        <img class="closeImg" src="images/close.png" alt="close">
                    </div>
                </div>
            </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (event) => {
            event.stopPropagation()
            hashMap.splice(index, 1)
            render()
        })
    })
}

render()

