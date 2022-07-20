$(".addButton").on("click", ()=>{
    let url = window.prompt("\u8BF7\u8F93\u5165\u8981\u6DFB\u52A0\u7684\u7F51\u5740");
    if (url.indexOf("http") !== 0) url = "https://" + url;
    console.log(url);
});

//# sourceMappingURL=index.de158e3a.js.map
