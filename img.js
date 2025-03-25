// image.js - Portfolio Image Loader with embedded data
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio data embedded directly in the JS file
    const portfolioData = [
        {
            src: "https://data.terabox.com/thumbnail/3c642535f8b35dbf29330f2e49fe700d?fid=4401195374697-250528-1123286415611235&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-71wo3JKBEQzGcUKDaynrbf2DZuI%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850411963226837656&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink: "https://pay4fans.com/videoShare?surl=O8pAiZveYr2AYXmXXqhkjQ"
        },
        {
            src: "https://data.terabox.com/thumbnail/65ba88ec492329337052b5221b899ccb?fid=4401195374697-250528-479780927965962&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-taiHf4hfrO3jivMRz0FldYVChq8%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850411963226837656&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink: "https://pay4fans.com/videoShare?surl=DZdFOpvGIQ0vxBHdEoEpFA"
        },
        {
            src: "https://data.terabox.com/thumbnail/f5f0b92e45b159d655ab6ffe41dcd039?fid=4401195374697-250528-384976288375626&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ez1Igq8GKK3PS9EaPMambvkMry0%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850411963226837656&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink: " https://pay4fans.com/videoShare?surl=A2iNDIxwu34UySoeYOiPOg "
        },
        {
            src: "https://data.terabox.com/thumbnail/a711726b730c710c38e923d09a1da7ab?fid=4401195374697-250528-592395269471711&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-zONE3hto4%2B7sFJFMCutyLOONNEM%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850411963226837656&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink: " https://pay4fans.com/videoShare?surl=OWKMpKWcpz1XyxNNl89HXw "
        },
        {
            src: " https://data.terabox.com/thumbnail/c81227ab6c4898068a6b26f46627ddab?fid=4401195374697-250528-409533632280096&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-F3FqlFWhSJ5K24sW9cIQ7lJ9yE8%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850411963226837656&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink: " https://pay4fans.com/videoShare?surl=nydmYHtUl5dUB2608pzbug "
        },
        {
            src: " https://data.terabox.com/thumbnail/81b3076a998c76252ba94fc5ec5b550d?fid=4401195374697-250528-462069502879665&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-fke0JBBGyH2H%2F%2Fvjhov%2B%2FsihkWI%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850411963226837656&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink: "https://pay4fans.com/videoShare?surl=a0vDRBgOGa5YjbgKlSEI_g "
        },
        {
            src: " https://data.terabox.com/thumbnail/9781952d9ecf9a9b991c65ac73cc22b2?fid=4401195374697-250528-5594458261501&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-86r8O41Z4NXKF2p5pCiiTQJ8p%2F8%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850411963226837656&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink: "  https://pay4fans.com/videoShare?surl=xvmndOsMnqLmEnM5cKlZ7A"
        },
        {
            src:"https://data.terabox.com/thumbnail/56c05192175a472d798fa6f45f5ba091?fid=4401195374697-250528-458355836130505&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-nrlu%2Fumryg43X6mUh%2FpHEuZsMcw%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=-lOd91XadX3d2OXgwJ5SsQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/030ec082237cf6c88c972ba9deb35475?fid=4401195374697-250528-545376276713823&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Q%2BeuhbbXS0NHE9sIG6rZeTxx3Wc%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=zbaoz8e2kWM4EtV6lPXnQw",
        },
        {
            src:"https://data.terabox.com/thumbnail/01218ca08176467a6898c81dc7431bb5?fid=4401195374697-250528-927579135377476&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-mu%2BN%2B3KOBaLVbLenvLzOQT5LGUE%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=j0IwCf7mDBcYCRsYZxK8xA",
        },
        {
            src:"https://data.terabox.com/thumbnail/2ce5195e4de722d32de0f98a2a418a9d?fid=4401195374697-250528-954022475195298&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-kYniJ02xYHDARkMfs5q8PmgT0AU%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=xWwcKrZGmZmsQ3YXDb6qEQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/55967498a4b8f75d7c48e15473515209?fid=4401195374697-250528-859231903938092&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-5cTHrwvoVju8a9h1dT8oNAjPWKg%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=5uKy4KNEBNueVi7hUWf2wA",
        },
        {
            src:"https://data.terabox.com/thumbnail/d04ad80b399e6831f3fc145b2b204929?fid=4401195374697-250528-531199000540954&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-93723Bdl%2BQMtMLtDlgllmvYPWqg%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=YSiBiQgOmuGRuj5cRdjk9Q",
        },
        {
            src:"https://data.terabox.com/thumbnail/82d14d354ac2caf07c99efec485b1e89?fid=4401195374697-250528-334231674896381&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-acqfu%2BTpHsA98VIvtZa734wRkxY%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=0wHvQnPA9CeJKTQdf63ENQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/2b2dbc43a7896d1e8cd27eced5040376?fid=4401195374697-250528-299827378992859&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-OVmEAKIiKfkbYMnXMum1Fa6mmf8%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=est71bf7n_izW5aTckjl0Q",
        },
        {
            src:"https://data.terabox.com/thumbnail/bb5b6b6923f88119e96853c81fd786d7?fid=4401195374697-250528-441310351221955&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-gbBkukwfCxptU6fOiN5uXLryL28%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=RV4H4r30p3IEpiIg7VOzFQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/c34f1ed36a2005d6711fec8de214feb4?fid=4401195374697-250528-712955259925084&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-giHZ7TXCVw0Se1mx38aU8NA0zk4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=UE4xkmZWyqIzUqdiHXsI5g",
        },
        {
            src:"https://data.terabox.com/thumbnail/df880f54279da421316bd49020e254c2?fid=4401195374697-250528-69505992902306&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KRgAdxlfowXnLQizkIetAeIoTqU%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=AjLG_c84kxgMzdJz3HEsEw",
        },
        {
            src:"https://data.terabox.com/thumbnail/0beda7852de7b6848e63a13cd4d7b515?fid=4401195374697-250528-108979559088127&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-MFlv4tpXq34Plu91l5a8ezvgVk4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=2mR5qgmnGyASQZtpBTsLJQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/62934145a56d485f04c1af5616d3148f?fid=4401195374697-250528-121930710230648&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KoosrVdkOKb1DPe2OZWG4Oy4HEY%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=rj8KDQwlZzUBck75FmJ7Hg",
        },
        {
            src:"https://data.terabox.com/thumbnail/22153527dea103254186c4bc25104067?fid=4401195374697-250528-712081087288271&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-lWRR5nAKDzvOTIBDUsbcIfrhRoo%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=7Ndkmj3N8hXHiBa25ufdTQ",
        },

        {
            src:"https://data.terabox.com/thumbnail/b40d910a43528c76c7e927751c152873?fid=4401195374697-250528-431188151144624&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Dph%2FOs5bL30pIbQ6o0cm3U5mV7c%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=wOiqmJ7wE09FuPtkUunzfw",
        },
        {
            src:"https://data.terabox.com/thumbnail/602b0b7b7443f6a0bdb0ba6875d6b1cf?fid=4401195374697-250528-302745044139416&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-yVe8dYbEWlcj7rsF%2BmX8wmD3RU4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=rap0XK6BVe_GKajpFj4DwA",
        },
        {
            src:"https://data.terabox.com/thumbnail/7794ced6bf3bc1806ca49af24ee31bf9?fid=4401195374697-250528-267843280601278&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-QiGSiG4gxnu%2BEDEfL9qSYUKFKaw%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=VNF8DuANI15OzO0AMzWPrw",
        },
        {
            src:"https://data.terabox.com/thumbnail/ecc558361fb73659b4a104cfc1cc1f67?fid=4401195374697-250528-957590019259282&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-0hrbbl0AAr3xj5xqn46Jw0l4f%2Bk%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=iZB92NPsxD_gTRmH5ZEBHA",
        },
        {
            src:"https://data.terabox.com/thumbnail/406629b616613176e2006b26c99dc071?fid=4401195374697-250528-370275676227821&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-IabpC%2FNUQ0aqRbuK8uuQL8Rl6Y4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=docCYBxDfMQev7ZZg5yYjw",
        },
        {
            src:"https://data.terabox.com/thumbnail/be750324b04ee0917a8fd900236aec85?fid=4401195374697-250528-629489007794442&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rE3bQe7%2FX36pJun%2Bje94UX%2BIzxI%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=M1YYOAGT5FacCMRzSUBifw",
        },

        {
            src:"https://data.terabox.com/thumbnail/77b9c20f6800c47e168eea945df3e8c2?fid=4401195374697-250528-68635533111283&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-iZ2ImJhE0evd6AiadjVFtumz53o%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=L9YcdFDGHlO2v6gXr6fi-Q",
        },
        {
            src:"https://data.terabox.com/thumbnail/924085020162ec959979528c78bf9a75?fid=4401195374697-250528-59182565184354&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jYjr8AE%2FiVziIG3YgxoWXo3dqtE%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=KKzmo99nk0IGdbMG1tyteg",
        },
        {
            src:"https://data.terabox.com/thumbnail/197a9b1bf91b3cf19c61c7a2b4ef5a4d?fid=4401195374697-250528-80618204210859&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-9E4Jne%2Br%2BE4ZF1lxIJHsr05JSCo%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8850669785664502281&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=G0tjbI4FV-hAx-6drJfdKA",
        },
        {
            src:"https://data.terabox.com/thumbnail/7302ddb9223ffdb41dbf3c4395eeb28b?fid=4401195374697-250528-1074938279693927&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-y2%2FX7Ty5BrNQlEXPNF9yRTaNBqE%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=9vKw73lsQat5ZCeFsWQsWQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/007528c278dd04a881663b3bfd3c5ec6?fid=4401195374697-250528-1103895960266454&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-eHWNuCtoIz988QRRDBOodaevlr0%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=rNuIfxaoAK1Kn3Y2NObk7Q",
        }, {
            src:"https://data.terabox.com/thumbnail/77b9bed273c931d00ede032e56128af7?fid=4401195374697-250528-952523828592925&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-RstUFSgIoff7YzKnNaYqaX2oXIE%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=yj9IT6_fMLfa3aDEFIe04Q",
        },
        {
            src:"https://data.terabox.com/thumbnail/82dd77bd19e921214ad004d316729f54?fid=4401195374697-250528-834701510480608&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-V32m610DPiv157Np9RWGbCgfJ5c%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=Vaqj3A7vDsIm7IzvNaoA0A",
        },
        {
            src:"https://data.terabox.com/thumbnail/41a1a1b20346d01f3a46d629032a5153?fid=4401195374697-250528-874268164449617&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-PLwtX41I5jlS9y0gWZcY0BUYvP4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=5AyzVmTAnBmxWQvUlFA0cw",
        },


        {
            src:"https://data.terabox.com/thumbnail/92d2bfb07153c291a5751a43aac0d055?fid=4401195374697-250528-945400815227470&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-iuRqtuHOmXhqQwTkAvy2ljDliGU%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=2jYN-Jadu7yS-z3xRtcZKQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/b11a8d09fa60bcba628b40a8e8e04d72?fid=4401195374697-250528-1033412425212413&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Z3%2BULOU8EFv1j2MsEFExV9Rgies%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=VXm9SETcvfRMnkdp8b7TDw",
        },
        {
            src:"https://data.terabox.com/thumbnail/92f9b2ba32706eed1c327c95e448acb0?fid=4401195374697-250528-860627051821184&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-wYJOeCd81VPFAfH%2BAd3QSzd9OZs%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=OKJk_MIqiAfqa6il97y8nw",
        },
        {
            src:"https://data.terabox.com/thumbnail/dd380351514bee6b2a1f7e5e167010ab?fid=4401195374697-250528-161556845065302&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-FdyRSsiVkVCQoAi0J8%2BE0boSoHo%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=wbqI3yxMDpIfIncITATyEg",
        },
        {
            src:"https://data.terabox.com/thumbnail/617c4e5c026e7c11c8f54461f7160805?fid=4401195374697-250528-801616458619135&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-mDER%2BV4LwAMiVaPGmQ%2FOoSuD8A4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=B0rxaPaKSr0yRDdl_BPDRg",
        },
        {
            src:"https://data.terabox.com/thumbnail/c01020ef790ab896280bf069824c2dc3?fid=4401195374697-250528-136585668181219&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-kX3cxctC%2BoeUcRNQvC2uO%2BAM9Rw%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=bx0g2moDMjs8B5awgPRC3g",
        },
        {
            src:"https://data.terabox.com/thumbnail/04113d86eef9d635ad973bee90c2a95b?fid=4401195374697-250528-538778293565127&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-pgA3SiMzdB6GAZjrcmuvJfrnIbg%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=jXOE6NGeQWdgomfkyIg3tA",
        },
        {
            src:"https://data.terabox.com/thumbnail/7595769a480ddb9e86403209e9657e74?fid=4401195374697-250528-287867088397889&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Jt0k58d7eqXmS4oRcoy9%2BDY6FVo%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=PsU2mcEwRUhVlzfatxtHdg",
        },
        {
            src:"https://data.terabox.com/thumbnail/9c41b9160b46e2b1906c378c2bbfc423?fid=4401195374697-250528-253929454254169&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-I5J%2FeVlFiJG%2B8MYQFkWhGJOVIFM%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=wuNTDalCaKTzFGrOOQJprg",
        },
        {
            src:"https://data.terabox.com/thumbnail/7db2b1d7d79616292f10e1bec610512a?fid=4401195374697-250528-92279430872010&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-iEqWieqb2r6KWg0fUeyOhhvmfF4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=ANMm3BMtn61Jgl4JTw__FQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/ee3bf15c60a943bd20291d7f58d7d0ff?fid=4401195374697-250528-900999545718737&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-cHg9kz5LdRyEpHgV8EgJ89%2F4A8A%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=fGE1qKh0R---w1rC-7GtRw",
        },

        {
            src:"https://data.terabox.com/thumbnail/2e2f2b7d1b6b842d5fa4e193481c6a14?fid=4401195374697-250528-1040658569138354&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ZyjULeob2FlX8GLL3jXKa5nyKZ4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=c792d6Y51SwJ9KyIKhKAFQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/0c91a26132ac4cac44880a4020b0e2de?fid=4401195374697-250528-147405403233531&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ilOc22H0RHH%2Bg%2FGEoyDk3Cravys%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=DCCby-bpBvbGZoYW7mX_oA",
        },

        {
            src:"https://data.terabox.com/thumbnail/babf0d340bb4bee213c02203e89cfdff?fid=4401195374697-250528-76285646972743&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-FgNjxbDUoS5ZG1EvDcJ%2FFuPYfpM%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=EDmj5-NaHfzB0QtDRb5Wyw",
        },


        {
            src:"https://data.terabox.com/thumbnail/1d4d3f2b1818937a25cfe8e754e3e531?fid=4401195374697-250528-232770101058160&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KqyidiGTwq2YZsN7O8Z4Rj4RqtA%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=v_6MEmBbmQInns8lYyeb9g",
        },
        {
            src:"https://data.terabox.com/thumbnail/7a14ae32a4a7b79fbd0b5a180b1027b2?fid=4401195374697-250528-388635524311452&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-AzxSHgCtzFgqoPoOJRrDLxv7rKU%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=GK4YfOZIjWN-LDV_t16K-A",
        },
        {
            src:"https://data.terabox.com/thumbnail/7dc38699ab3f89e94506a78d351be7d9?fid=4401195374697-250528-384975378487193&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-vKtYuxmBG%2Flv0zCio71MHhMIgy0%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=SZM9kVfksKhLwQe58A5GIQ",
        },
        {
            src:"https://data.terabox.com/thumbnail/d8e90dd74685d2ee87aec649f9990fc7?fid=4401195374697-250528-657194408481025&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Jst4lseRJuh3CC60H2%2FEEVcjT%2BU%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:"https://pay4fans.com/videoShare?surl=Jkte97IFukYC0iaute_I-w",
        },
        {
            src:" https://data.terabox.com/thumbnail/ddbe4faa078a94f6c5057275b6c27f94?fid=4401195374697-250528-645803960392819&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-H34uSaVLB14LhuW7w3PZIXJ2BCc%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:" https://pay4fans.com/videoShare?surl=VQZjDWdczFBSr62TsnZyog",
        },
        {
            src:"https://data.terabox.com/thumbnail/0bc8d5e4fd92bd19d32c81c60bb5c532?fid=4401195374697-250528-280536220740122&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-2ljjlqR8P9nc44CSf06CZRu1Xmg%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink:"https://pay4fans.com/videoShare?surl=iloaII2GyyVSSOEYUOLxLg ",
        },
        {
            src:"https://data.terabox.com/thumbnail/65b40c831dfbc3e35779336afc97871f?fid=4401195374697-250528-66317379117674&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-dN%2BQTZu43sfLWZT37jn6Ay8Jrm4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink:"https://pay4fans.com/videoShare?surl=A-KeLjw0zw33WXVRsuyF8w ",
        },
        {
            src:"https://data.terabox.com/thumbnail/74452a9b5858b375d54c9238c4215e4d?fid=4401195374697-250528-98672811527325&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-izXmPTD4kDFpZRceEXy8DC6Mz4Y%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink:"https://pay4fans.com/videoShare?surl=COTARJ3jhp3dPaFnXm0omw ",
        },
        {
            src:"https://data.terabox.com/thumbnail/a16bf30052020c25a27828d80a3ea78a?fid=4401195374697-250528-130411034051125&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-92j0nB2LLqAwK%2BcH%2BrlNaZAIJ34%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink:"https://pay4fans.com/videoShare?surl=yvWmJhTUkiq3gJqH9ACKsQ ",
        },
        {
            src:" https://data.terabox.com/thumbnail/2f686b2a88d3f9908b474ee92cd28464?fid=4401195374697-250528-201764256974513&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-JFao3wIreDbuR8Ac6KbGdrrc8NE%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video",
            downloadLink:" https://pay4fans.com/videoShare?surl=vX3qYdNWC651R24EEOm2vg",
        },
        {
            src:"https://data.terabox.com/thumbnail/34f20a5f6b2c9957fd3211df66d0918c?fid=4401195374697-250528-724668072640453&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-QseAT0CyPOzt9CkOVoV74G7kNvY%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink:"https://pay4fans.com/videoShare?surl=bbWNzBI263o-lrDqaB1Apw ",
        },
        {
            src:"https://data.terabox.com/thumbnail/a3469a267a4b76d600c06a38e3378df0?fid=4401195374697-250528-613018814464537&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-F6vXtn5plDxZtdAyyu7w%2BwCX4q4%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink:"https://pay4fans.com/videoShare?surl=r0wYp6Z4N5kznTOxt_FYjg ",
        },
        {
            src:"https://data.terabox.com/thumbnail/4dba7cbb22afcd007f9349368f3ec8e9?fid=4401195374697-250528-196211269767217&time=1742860800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-gViFAJKjFTkKTEqsPAo9tZ1L5MM%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=8851070627508730044&dp-callid=0&size=c850_u580&quality=100&vuk=4401195374697&ft=video ",
            downloadLink:"https://pay4fans.com/videoShare?surl=MdUQIIQxt07U263n7CsVhw ",
        },

        {
            src:" ",
            downloadLink:" ",
        },
        {
            src:" ",
            downloadLink:" ",
        },
        {
            src:" ",
            downloadLink:" ",
        },
        {
            src:" ",
            downloadLink:" ",
        },
        



        // ... (keep your other valid items, remove empty ones)
    ].filter(item => item.src.trim() !== "");

    // Function to get a daily random seed (changes every 24 hours)
    function getDailySeed() {
        const today = new Date();
        const dateString = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
        return dateString;
    }

    // Function to shuffle array with daily seed
    function shuffleArrayWithSeed(array, seed) {
        const shuffled = [...array];
        let random = createRandom(seed);
        
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Seedable random number generator
    function createRandom(seed) {
        let value = hashString(seed);
        return function() {
            value = value * 1664525 + 1013904223;
            return (value >>> 0) / 4294967296;
        };
    }

    // Simple string hashing
    function hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    // Get shuffled portfolio items
    const dailySeed = getDailySeed();
    const shuffledItems = shuffleArrayWithSeed(portfolioData, dailySeed);

    // Render portfolio
    const portfolioContainer = document.getElementById('posts');
    if (portfolioContainer) {
        portfolioContainer.innerHTML = '';
        
        shuffledItems.forEach((image, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2';
            
            const link = document.createElement('a');
            link.href = image.downloadLink;
            link.className = 'portfolio-item isotope-item gsap-reveal-img';
            link.setAttribute('data-id', index + 1);
            link.setAttribute('target', '_blank');
            
            link.onclick = function(e) {
                if (this.href.startsWith('http')) {
                    e.stopPropagation();
                    window.open(this.href, '_blank');
                    return false;
                }
            };
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            
            const icon = document.createElement('span');
            icon.className = 'wrap-icon icon-link2';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.className = 'lazyload img-fluid';
            
            overlay.appendChild(icon);
            link.appendChild(overlay);
            link.appendChild(img);
            portfolioItem.appendChild(link);
            
            portfolioContainer.appendChild(portfolioItem);
        });
    }
});