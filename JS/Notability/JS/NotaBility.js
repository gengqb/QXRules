/*************************************

项目名称：Notability:笔记,PDF
下载地址：https://t.cn/A6Cgjtei
更新日期：2025-02-24
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Notability.js

[mitm]
hostname = notability.com

*************************************/


;var encode_version = 'jsjiami.com.v5', aabeh = '__0x124601',  __0x124601=['X3MMaVB2w5ZeXMO2wosjw4TDsQ==','CcK6EsKL','Y8Oww6I=','wqY0Gg==','wrzCmsOrw78=','4puS77i0w5johaXmnpLlv7Tlu6/ltYznu5nmrZbovpboo4c=','5qOD5raW5YuV6Ia15p+t5b6y5Yaq5p+h5b6i5ZKl','8LOQtQDjgb99wqArwoEvXumHt+e9jeaOq+WPreOBusKCwqrvu7TigafCiOmHiue/jOWeseWeje+/qMO2c8Oywqtlwq/DhMK4MBFMP8OOw77CksKow6fDo3HDpcKRw4wmRwN8JRNxwpfDi8Kpw6TCsUbDiMOvIsKnw6bvuq3igJDCiuivhemYmemRhuaNj++8vW7Djx5iw5IQw59Iw7Y7wrdqw53Dsh9AJMKpwrwkPMOZwobDv8Ofw5jCusOkw4cQw5fDl8K1Y0vDsMKRwrFTOsOGw5t8VcK4w4fCmATCscK6VB7DsAjDjMKUwp7DpMOOfiMhw6R7DWsiXsKyw7csORXCncOIel3ClvCYo7PCoeOCj+S/teeXluivpuaYlOOAnMOKw67vu6jig71v5reh5Yum6K2F6ZmJ6ZGI5o+B5YiKCMKsw4rDsMOfwrhMwp7vuoDig6QW5ZC+55aAEF/ohpvmn7LlvZflhrEvw7Dlu4nkvY/lrKDor7znvLcsHuKZhu+7tsOC44Cw5rKI5oez5LmA6aOO44Khw7rClcK65byi5YWg55aT5Lqd6Ziw5qy66Z245rKd5ZeB5Y2Y6Iav5p+IbztA5Lmn5L2s5a+A5Lqz5Lyb6aiu77yo6K2h5YqO5L6e5pOb5omG5rmX55etw4ELw5LluZDorIcowrjCh8OM5bKd5peU5YeQ5YuQ6Zun77yM6YC65YeT5Lif5b2x6Kah6ZSP6aKvcsKd8J2LogjmhpHosrTnk4DopIrkuJ7mlpfmjZLvvZw=','YMKywojCgcKmw5vCt8Ksw4fDuMKBBFbClmLCokI+F8KYakrDrDfCrA3CpsODwozCkiUbGQfChCbDumJ0wpo3G3vDgMOgwqs=','S8KPCynDolHClsKnwpwaw6hTw5Eiwro=','S8OGSGTCnkMA','L2Asw7V0w5jDmXjDvAtlfhPChWR4wofDnivDk0XCk8OAw5E=','QTDDsiXCjRZuwqNLcCLCoUDChcO5JQ/DiBHCmA==','E1jCjBbDiMKT','w7/CjcKSIMOsKVfCtsK+UnbChFDCuUjCgm7CgA==','AQZa','MsKQw4zCm0bChcOQIcKC','UWQLLlBrw48vTMOuwo95w5HCrA==','w7rCv28=','EMKwMjLDtFPCiyk=','wqXCuMOs','KcONWEjCnA==','eifCsw==','4puP77mAwpXorrTlja7DlHnCjcKfOMOuw7Tphrbnv7vlp4LotIrvvY0=','BRQSwpbDu1dl','w5XCi1Q=','dCPCpiM/','w5gzEiLDvg==','w6HCoFIMXg==','T2UCN0E=','ZBx9wpkP','wpvCuMOpcg==','esOrw6jDuMOq','8KSmjArmiZPli7zor67ljYXCksK4wo06wqrDgMOX5YK6776Nw4DCilZZLMKSW0l8JQ89w4TDigop77yJ77yt','HcKZCQ==','w4/CkQhdHQ==','PgrDqcKXGR7Co3M=','8JGVuMOr5omW5YuZ6K6+5Y2Qw7lfWsKNSUQF5YCI772bbsOKwok7QUjvv77vvqQ=','wozDhcOQ','4pmA77qKw6nml7LmsazmoqLmt5TliYPljoHnl6bnmovDv8OKQMKEGcOVcOeOueWjjO+/ow==','54qF5p695Y+s77+8w4vCiOS+m+Wuj+adsuW/jOeqme++tui8meivjOaUpeaPleaKqOS5jOeanOW3juS+tw==','dwhWwo40','w6jCshfDiRLCpcOuw4PCmA==','csOgw6fCqcOfU1sl','AsOHwpc=','4puT77qGw6fmlKzmsoPmoqzmtoblib7ljLfnla/nmaFCwolFeilYeeeNguWjme+/pQ==','EEbCpl9X','w6HCkS1CDw==','TMORbsKGw68=','VBZC','HjzDtsK+Pw==','JsOQQSEq','wrXDuHxQwp4=','wozDqsKu','8JymksKl5ouY5Yqq6K6o5Y2ewrkKwqt3PFAR5YGz77+aA1JVwpxbwqcUw4c3LVTDmk1Ww4ZT77yy776Q','w6pmXQ==','CVVJw6Jq','wrvCusO5wq/DrQ==','SMOmw6bDgcOXLcOIw7NZw6s1','w7s9JSDDpQ==','GcOgRjYGU8O8w4DCscKHOw==','EnrCtA==','8Ki3pgnmiq3lipLor5bljKjDuMOZwqNBw7HCkMOa5YCq77yXWTV0wprCtcKT77+37762','VjwG','woHCiSE=','4puB77iowqDorYnljYvChALDt0TDqMOrK+mHuue/p+WntOi0mu+/pw=='];(function(_0x4b7dae,_0xdc4845){var _0x2d9258=function(_0x1b2980){while(--_0x1b2980){_0x4b7dae['push'](_0x4b7dae['shift']());}};_0x2d9258(++_0xdc4845);}(__0x124601,0xae));var _0x3934=function(_0x5486a5,_0x3d1798){_0x5486a5=_0x5486a5-0x0;var _0x78cf55=__0x124601[_0x5486a5];if(_0x3934['initialized']===undefined){(function(){var _0x5b3356=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x6eaeb6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5b3356['atob']||(_0x5b3356['atob']=function(_0x3a68c8){var _0x3ec49e=String(_0x3a68c8)['replace'](/=+$/,'');for(var _0x2173a9=0x0,_0x5749f2,_0x238837,_0x378e32=0x0,_0x11f745='';_0x238837=_0x3ec49e['charAt'](_0x378e32++);~_0x238837&&(_0x5749f2=_0x2173a9%0x4?_0x5749f2*0x40+_0x238837:_0x238837,_0x2173a9++%0x4)?_0x11f745+=String['fromCharCode'](0xff&_0x5749f2>>(-0x2*_0x2173a9&0x6)):0x0){_0x238837=_0x6eaeb6['indexOf'](_0x238837);}return _0x11f745;});}());var _0xe8cd0b=function(_0x2389a2,_0x21c886){var _0x35e7e3=[],_0x44f846=0x0,_0x699297,_0x1aeb6a='',_0x51b250='';_0x2389a2=atob(_0x2389a2);for(var _0x8f9fdd=0x0,_0x764bb6=_0x2389a2['length'];_0x8f9fdd<_0x764bb6;_0x8f9fdd++){_0x51b250+='%'+('00'+_0x2389a2['charCodeAt'](_0x8f9fdd)['toString'](0x10))['slice'](-0x2);}_0x2389a2=decodeURIComponent(_0x51b250);for(var _0x2ea203=0x0;_0x2ea203<0x100;_0x2ea203++){_0x35e7e3[_0x2ea203]=_0x2ea203;}for(_0x2ea203=0x0;_0x2ea203<0x100;_0x2ea203++){_0x44f846=(_0x44f846+_0x35e7e3[_0x2ea203]+_0x21c886['charCodeAt'](_0x2ea203%_0x21c886['length']))%0x100;_0x699297=_0x35e7e3[_0x2ea203];_0x35e7e3[_0x2ea203]=_0x35e7e3[_0x44f846];_0x35e7e3[_0x44f846]=_0x699297;}_0x2ea203=0x0;_0x44f846=0x0;for(var _0x4b1477=0x0;_0x4b1477<_0x2389a2['length'];_0x4b1477++){_0x2ea203=(_0x2ea203+0x1)%0x100;_0x44f846=(_0x44f846+_0x35e7e3[_0x2ea203])%0x100;_0x699297=_0x35e7e3[_0x2ea203];_0x35e7e3[_0x2ea203]=_0x35e7e3[_0x44f846];_0x35e7e3[_0x44f846]=_0x699297;_0x1aeb6a+=String['fromCharCode'](_0x2389a2['charCodeAt'](_0x4b1477)^_0x35e7e3[(_0x35e7e3[_0x2ea203]+_0x35e7e3[_0x44f846])%0x100]);}return _0x1aeb6a;};_0x3934['rc4']=_0xe8cd0b;_0x3934['data']={};_0x3934['initialized']=!![];}var _0x1c3ed3=_0x3934['data'][_0x5486a5];if(_0x1c3ed3===undefined){if(_0x3934['once']===undefined){_0x3934['once']=!![];}_0x78cf55=_0x3934['rc4'](_0x78cf55,_0x3d1798);_0x3934['data'][_0x5486a5]=_0x78cf55;}else{_0x78cf55=_0x1c3ed3;}return _0x78cf55;};if(typeof $rocket!==_0x3934('0x0','%&O*')){function getBoxJSValue(_0x39a6c4){var _0x25b306={'nSuuz':function _0x14d995(_0x33208e,_0x1b66fe){return _0x33208e!==_0x1b66fe;},'DHgov':'undefined','ISCZk':function _0x319428(_0x5cb03c,_0x21e59b){return _0x5cb03c===_0x21e59b;},'WASZq':_0x3934('0x1','L3b$'),'FCqJR':_0x3934('0x2','ynBV'),'IQkbI':function _0x22d622(_0x33a058,_0x211f5d){return _0x33a058+_0x211f5d;},'JIpqo':'版本号，js会定期弹窗，还请支持我们的工作','tEYye':_0x3934('0x3','ynBV')};try{if(_0x25b306[_0x3934('0x4','OKOr')](typeof $persistentStore,_0x25b306[_0x3934('0x5','eaq!')])&&_0x25b306['ISCZk'](typeof $persistentStore['read'],_0x25b306[_0x3934('0x6','ZZ$7')])){if(_0x25b306['ISCZk'](_0x3934('0x7','(o#k'),_0x25b306[_0x3934('0x8','!ywS')])){w[c](_0x25b306[_0x3934('0x9','@GLx')]('删除',_0x25b306[_0x3934('0xa','wZGl')]));}else{const _0x53f0cd=$persistentStore['read'](_0x39a6c4);console[_0x3934('0xb','uwvT')](_0x3934('0xc','f*nM')+_0x39a6c4+_0x3934('0xd','69n7')+_0x53f0cd);return _0x53f0cd;}}else if(_0x25b306[_0x3934('0xe','[^DW')](typeof $prefs,_0x25b306['DHgov'])&&_0x25b306[_0x3934('0xf','g4cY')](typeof $prefs[_0x3934('0x10','8)VO')],_0x25b306[_0x3934('0x11','P]Gj')])){const _0x491a43=$prefs[_0x3934('0x12','@GLx')](_0x39a6c4);console[_0x3934('0x13','OKOr')](_0x3934('0x14','aKPW')+_0x39a6c4+_0x3934('0x15','ul7b')+_0x491a43);return _0x491a43;}else{console['log'](_0x25b306['tEYye']);}}catch(_0x52e498){console[_0x3934('0x16','N8Q]')](_0x3934('0x17','xL9o')+_0x52e498['message']);}return null;}const scriptSwitch=getBoxJSValue(_0x3934('0x18','cl0O'));const isScriptEnabled=scriptSwitch===_0x3934('0x19','Uo59')||scriptSwitch===!![];console[_0x3934('0x1a','f*nM')]('BoxJS\x20配置读取：ddm.app_switch\x20=\x20'+scriptSwitch);if(!isScriptEnabled){console[_0x3934('0x1b','69n7')]('⛔️\x20BoxJS\x20配置禁用脚本，脚本停止运行');$notification[_0x3934('0x1c','(F4h')](_0x3934('0x1d','L6SH'),_0x3934('0x1e','M6zF'),_0x3934('0x1f','9^r('));$done();}};var ddm={'data':{'processAppleReceipt':{'error':0x0,'subscription':{'productId':_0x3934('0x20','M6zF'),'originalTransactionId':_0x3934('0x21','YXoS'),'tier':_0x3934('0x22','Vu0r'),'refundedDate':null,'refundedReason':null,'isInBillingRetryPeriod':![],'expirationDate':_0x3934('0x23','(o#k'),'gracePeriodExpiresAt':null,'overDeviceLimit':![],'expirationIntent':null,'__typename':_0x3934('0x24','G0WV'),'user':null,'status':_0x3934('0x25','L6SH'),'originalPurchaseDate':'2024-09-09T09:09:09.000Z'},'isClassic':![],'__typename':_0x3934('0x26','GlHD')}}};$done({'body':JSON['stringify'](ddm)});;(function(_0x586890,_0x578736,_0x367098){var _0x340573={'WucQN':_0x3934('0x27','1N**'),'trcpp':_0x3934('0x28','k[E8'),'LVmey':_0x3934('0x29','cl0O'),'tOdXj':function _0x20c39f(_0x40cad9,_0x579c29){return _0x40cad9===_0x579c29;},'QYrca':_0x3934('0x2a','9^r('),'PAcjX':function _0x3d3aed(_0xf064fe,_0x2145f3){return _0xf064fe!==_0x2145f3;},'rEhUV':function _0x1fbe9d(_0x4232c8,_0x369a56){return _0x4232c8===_0x369a56;},'DlbLX':_0x3934('0x2b','d4Vp'),'jHBpd':function _0x1ace61(_0x4586ea,_0x223483){return _0x4586ea!==_0x223483;},'hTCgA':function _0x553e24(_0x56e0af,_0xdc8cc2){return _0x56e0af===_0xdc8cc2;},'aQCBm':'删除版本号，js会定期弹窗'};_0x367098='al';try{if(_0x3934('0x2c','Qt^q')!==_0x340573[_0x3934('0x2d','YXoS')]){console[_0x3934('0x2e','O^aT')](_0x3934('0x2f','S&ST')+e[_0x3934('0x30','F[Bq')]);}else{_0x367098+=_0x3934('0x31','9^r(');_0x578736=encode_version;if(!(typeof _0x578736!==_0x340573['trcpp']&&_0x578736===_0x340573[_0x3934('0x32','jJAc')])){if(_0x340573[_0x3934('0x33','P]Gj')]('BwA',_0x340573[_0x3934('0x34','9^r(')])){if(_0x340573['PAcjX'](typeof $persistentStore,_0x340573[_0x3934('0x35','cl0O')])&&_0x340573[_0x3934('0x36','(o#k')](typeof $persistentStore[_0x3934('0x37','BO84')],_0x340573[_0x3934('0x38','8)VO')])){const _0x39934f=$persistentStore['read'](key);console['log'](_0x3934('0x39','@GLx')+key+_0x3934('0x3a','20DB')+_0x39934f);return _0x39934f;}else if(_0x340573[_0x3934('0x3b','eaq!')](typeof $prefs,_0x340573['trcpp'])&&_0x340573['hTCgA'](typeof $prefs[_0x3934('0x12','@GLx')],_0x3934('0x3c','!ywS'))){const _0x477362=$prefs['valueForKey'](key);console['log'](_0x3934('0x3d','jJAc')+key+_0x3934('0x3e','GlHD')+_0x477362);return _0x477362;}else{console[_0x3934('0x1a','f*nM')](_0x3934('0x3f','uwvT'));}}else{_0x586890[_0x367098]('删除'+_0x3934('0x40','6]lZ'));}}}}catch(_0x379ea4){_0x586890[_0x367098](_0x340573[_0x3934('0x41','(o#k')]);}}(window));;encode_version = 'jsjiami.com.v5';
