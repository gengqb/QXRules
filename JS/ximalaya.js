/*
 *
 *
脚本功能：喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
软件版本：9.2.78（兼容最新版本）
下载地址：
脚本作者：**
更新时间：2024-10.23
电报频道：https://t.me/GieGie777
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ximalaya.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayack.js
# > 去广告,
^https?://passport\.ximalaya\.com/friendship-mobile/v1/findFriendsBanner/show/ url reject
^https?://xdcs-collector\.ximalaya\.com/api/v1/realtime url reject
^https?://.+\.ximalaya\.com/linkeye.+/checkIP\?ip.+passport.ximalaya.com url reject
^https?://adse\.wsa\.ximalaya\.com url reject
^https?://openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?://ulogs\.umeng\.com\/unify_logs url reject
^https?://adse\.ximalaya\.com\/ url reject
^https?://gslbali\.ximalaya\.com url reject
^https?://www\.taobao\.com\/help\/getip\.php url reject
^https?://.+location\.ximalaya\.com url reject
^https?://.+dbehavior\.ximalaya\.com url reject
^https?://ad\.ximalaya\.com url reject
^https?://.+audid-api\.taobao.com url reject
^https?://passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject

[mitm] 
hostname = 42.56.64.*,*.xmcdn.com, *.ximalaya.com, 61.172.194.*,180.153.*.*,180.153.255.*, 180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*, 114.80.161.29,1.62.62.64,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.13*.*, 203.205.250.*, 211.152.137.*, 47.100.227.85, 61.164.145.12, 106.41.204.126, 112.80.180.72, 112.98.170.228, 112.99.146.108, 118.25.119.177, 223.111.231.198, 120.22*.2*.*, 43.132.8*.*, 101.33.27.*, 43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71, 114.80.99.89,114.80.99.91,114.80.99.88, 114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com



*
*
*/

















 









































;var encode_version = 'jsjiami.com.v5', evdoz = '__0x11fe1d',  __0x11fe1d=['w63DssKlCxY=','QsOywqTDp8KR','BHQjw6XDhw==','OsOuwq3CpMOZ','WMKEGsKpwoI=','JQFoDktSwobCosKDCTFTScO5RMOV','H19aRh8Rw4HDs8KZfF0DQcOsIsKnwpcUw6rDt8Knw5N/w4t5wqNPSjzDicOvUmlqAhpzwoBAWXLCscKJw6zCgcOgw77CvnbDg8OQwrVmwrLCslkLGiDDlWnCkw==','GMOYwqHCmw==','LcOZw4HDhwo=','JsKbKzoC','woN/AMKZbA==','AR93O3E=','NDtAJE0=','NcObwogdDQ==','W8KhWQE=','TsOowpvDl8K4','EMOowos6LA==','woDDrcOrAA==','O8Onw7DDjxQ=','Vy1UdcK4','wovDs0goPg==','S20jw4VR','wozCtsOrw5dk','EsOkFsKyAg==','w4NEHkMo','L8ORKcKWLA==','DXt+Lh1EJ8KWwooCwrlNc8O5cSPDhsKQDMKrwqzDqMO6MR3DnxbCnTt6ccKFQ8KEwpA4asOYw5MTw7nDkGfCqErCjMOMWTg1wosWw6AkwoLDg8K5wqEewqpdwp8ew4XDt8K+wqY4wrXCnWjDqz/CvFkPwpHDiQnDk2zDumDDgMO3GHDDkG8Cw5TCslbDv1saw6w4WcKEeMOrw7kFw7TCjcKdw7fCgDwfB3kpQcOSJ8OHKClQw7vDsTpCFlRvw75RwqDClE7Cg8OuTgnCpDHCrMOJw6/DssKhF8KXw4EuHsOWbMOjMwN3w6XCp8O7w4/CvyjCiCZvbWBUwrnDk2h4w49BHsKCwpLCrDXDr8KDXCjCi8KVDlvDsMOIbcO6LcOYw57Cu8KPwqzCsxFKfho6YMKPw4gRw47Dg8KXQcKjCwzCrcK2wowBXAhqJGxTAAIswqETdgIYw53Cs3PDtMOaYm0OecOiwpnCmcOkw5fDtQVhWsKVwo3DvMOFbioNwrUwU27CkMK5PgHDpQgYw5fCqErDqsK1w57DiQfDi0E3wp9AewVdw6zDv1kWJHR7woPCoMKIw73DncK5Pk1Hw7JtTcKrwonDsMO6RiZ9PjHDisKHw7/Dk8OAw78oCcKwfcOifsKYw4PDpyFxw40OwpR5wrI8U8Or','Oz85wqLDhsObw6sNw57CiMKS','K8Ofw5TDnA3ClQs=','wpU6wpXCscONwot5','wr1LKA==','wrNSw7gMMMKefDVwCnA=','w7RScyzCnQ==','ScOfwqXDksKnw6M=','PREQQTJX','wofDssO8wp1WMw==','wrNUw5oEGMKNN1gjVyzDsxvCrXwwwp7Dty5OacKpwqMjwqHCkVNHFHIQw7YUw7koS8OhQUZhc3jDjz3DhlYWwpc=','w6DCkcKOw5ZB','w7Vww6skE2ZtwrfDiTXCr8OowoI=','YBRN','woM6w5XDoBHCrsK1w7TCig==','ehktw57Dnx3DokHDscKpw5PClHPCvA==','54i95pyb5Y2B772ycsOx5L6Z5a+L5pyM5b+756ui772K6L2b6K6A5paX5o6c5oij5Lur55md5bam5L60','5YiP6Zqg54mi5p2Z5Y2h772nw64Q5L+35a6t5pyF5b6F56my','wpUsZ3ha','wrRNw5gKMw==','w6nCssKEw49c','NcOBwqc=','w7nDkcKs','w6dQeCbCicKQacO1TQ==','wqrCpRDDm3bCqg==','wq/DksOIwotbw5rDtsOo','w4nDosKf','w5TCqsKz','egjDi8O/wp49TgrDpzTDs2fDgg==','KcOpwrAPD8Oi','OTtWwqLCjA==','EwR/CnU=','X8KKQATDmQ==','wq3DhWoRGA==','OkXDohBJ','KMOgw4bDvQk=','w51NOmgg','w7xMQWTDog==','D1xvCxA=','SgBaRsK1','wrZaw7EgCg==','EsOZwqbCnMOgwqnCrQ==','JHkZw6/DqsO4ZQ==','fwjDhsO/wpg9TArDpDTDtGfDgcKrwpnCl8K+','N8Oww5TDmBI=','wo4vwpjCvMOc','Bjcjw7M=','H8OdPcK2','wqJFw5cGN8KPZxl/','M2QWw7/DoA==','wqLDvcOeLUU=','YQNbWsKa','SnHDvA==','RsOOdsKFVQ==','bj5RbMKX','w4XCu8KrTjc=','wq7DjMOtBHg=','wrd8wrIxVQ==','ZglXXMKSwqUI','Lxth','YnMcw6FdOMOv','wqRYOcKsWw==','dMOYfMKGbknDtA==','w7bCisKDajY=','FcOcNcKqK1Yc','C2t8JQNVIsOEwo0=','KRvCkMOww4ctHw==','wpLCs8Ohw4A=','w4VHHMOhwrrDpxg=','wqTDoMOCMVgJVw==','woPDsMKaW1w=','wpjDpcOxAFM=','woFTPMK/ag==','wr9fM8K8Tg==','w55kN8OGwq8=','eyA+w4/DkQ==','wobDpcKab3o=','bcK+IsKewqM=','wpU7w74=','M0bDpQ==','JzI3w6fCuQ==','w4NoJ04O','HR7CscOzw4E=','YGwCw75L','wqAMw5U=','L8OFIQ==','U2fDsA==','KhlT','SjdBW8Kf','BMO1wrrCisOj','wrbCp8Osw4xe','GBBXwpvCkQ==','MVMiw5PDqg==','wpNaXm0Y','wqbDv8OcLk4=','wrgyw7TDsDo=','R3gTw5Zk','woJowr8cdw==','wqnDqkQVBQ==','ZDIS','wq7CjMOJ','wqXChMOJeXbCmMKcw5V8HsOcw4s5wrfCi0t6','Jw5lBFk=','wqJHOcKDbQ==','w5ZNK8OBwrY=','IMKaFw==','wrXDvcKx','KS9B','wr7DrsOawpxD','wrLDjWAzKw==','wrMuwprCh8OP','LsKFKyMP','WsOOwrvDmsKx','wr3DgMOQwo94','NsOcwq/CpsOm','HMKxPSg6','w41aD0cU','wo1pUnsg','XirDoMO4wrg=','wqwCwqNZUg==','wo7Du8KeQQ==','w6TCmcKDaw==','PgbCn8Ogw40=','ZG4Aw71A','w7zCucKFw79Ww6EzP8O8','KcOjwrk=','wq/DiW8sIQ==','MSNpL1I=','ESZFL3w=','wolqfUAt','dMKmE8KlwqE=','wqHDu8O+PnY=','w7rCgMKDw5Zx','NAYaMB8=','w4hFBA==','wqXDlX0RIQ==','C8Oww5AmPg==','Tk/DrHTDnA==','F8ODK8K1PQ==','J8OOwrzCocOc','Ozg4wqzDt8Ocw7ARwpfDh8K9OcOBw6vDlMKq','P8KKw7tGf8K9Vw3DskXCo8Kqe17DvSkOQxMPEcKxwobCmBLCssONw5VKRMKjEW48OFwZGG7DjDvCrCk+w63DkEpiwqrClQBnM3V/RMOGwpzCmVd/wpY=','fsOZe8KB','Ej4ww7TCrQ==','wqzCqQrDi2E=','w7LCk8KC','wrU8wq4=','w7HDhcKONwI=','wpFdwrERUA==','YBxUbcKQ','WMOYwp7DpMKa','wrwCwrJY','B8OCwpU6DQ==','PEFLLT0=','LXY0wr0=','BVg8w47Dsw==','woHDi8O3IHk=','AxAmw4XCgg==','LTLCj8OTw74=','wpoZwoXChcO+','V8KWRwfDvg==','LcO1w7MXPA==','aikmw7PDkg==','AR0XAgk=','w4F/DV83','CcO9w4jDmRM=','wrErwph0fA==','aXsI','PcO+w4k=','MsOrw7I=','BkPDhBd2w6U=','fA8pw5DDihg=','NTJOPmY=','Dj0VwqjDsg==','w4FOXyTCng==','DHvDmS9B','Zih6WsKc','HkluLBU=','Eww7djI=','woHCqBPDu1k=','w59BfFnDlA=='];(function(_0x55eb6e,_0x12addb){var _0x979683=function(_0x149e26){while(--_0x149e26){_0x55eb6e['push'](_0x55eb6e['shift']());}};var _0x503027=function(){var _0x38c8c9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xebf79b,_0x2ed380,_0x568c1c,_0x412926){_0x412926=_0x412926||{};var _0x32e600=_0x2ed380+'='+_0x568c1c;var _0x4a6ca6=0x0;for(var _0x4a6ca6=0x0,_0x29bc4b=_0xebf79b['length'];_0x4a6ca6<_0x29bc4b;_0x4a6ca6++){var _0x252722=_0xebf79b[_0x4a6ca6];_0x32e600+=';\x20'+_0x252722;var _0x2ec4f6=_0xebf79b[_0x252722];_0xebf79b['push'](_0x2ec4f6);_0x29bc4b=_0xebf79b['length'];if(_0x2ec4f6!==!![]){_0x32e600+='='+_0x2ec4f6;}}_0x412926['cookie']=_0x32e600;},'removeCookie':function(){return'dev';},'getCookie':function(_0x72a21e,_0x487749){_0x72a21e=_0x72a21e||function(_0x5e2e86){return _0x5e2e86;};var _0x5cf45d=_0x72a21e(new RegExp('(?:^|;\x20)'+_0x487749['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3092cd=function(_0x50171d,_0x40394e){_0x50171d(++_0x40394e);};_0x3092cd(_0x979683,_0x12addb);return _0x5cf45d?decodeURIComponent(_0x5cf45d[0x1]):undefined;}};var _0x3ad89f=function(){var _0x56a4b8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x56a4b8['test'](_0x38c8c9['removeCookie']['toString']());};_0x38c8c9['updateCookie']=_0x3ad89f;var _0x17e96b='';var _0x5656b7=_0x38c8c9['updateCookie']();if(!_0x5656b7){_0x38c8c9['setCookie'](['*'],'counter',0x1);}else if(_0x5656b7){_0x17e96b=_0x38c8c9['getCookie'](null,'counter');}else{_0x38c8c9['removeCookie']();}};_0x503027();}(__0x11fe1d,0x1b8));var _0x5443=function(_0xd7960f,_0x8fca3a){_0xd7960f=_0xd7960f-0x0;var _0xf0fc10=__0x11fe1d[_0xd7960f];if(_0x5443['initialized']===undefined){(function(){var _0x1c2379=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x40928b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1c2379['atob']||(_0x1c2379['atob']=function(_0x5830fd){var _0x349d3f=String(_0x5830fd)['replace'](/=+$/,'');for(var _0x255ee7=0x0,_0x3e4ff7,_0x360aed,_0x2790d1=0x0,_0x2adf16='';_0x360aed=_0x349d3f['charAt'](_0x2790d1++);~_0x360aed&&(_0x3e4ff7=_0x255ee7%0x4?_0x3e4ff7*0x40+_0x360aed:_0x360aed,_0x255ee7++%0x4)?_0x2adf16+=String['fromCharCode'](0xff&_0x3e4ff7>>(-0x2*_0x255ee7&0x6)):0x0){_0x360aed=_0x40928b['indexOf'](_0x360aed);}return _0x2adf16;});}());var _0x303a32=function(_0x1b754f,_0x4cc69d){var _0x5f2f91=[],_0x5ab97e=0x0,_0x317b22,_0x435ce2='',_0x4edaaa='';_0x1b754f=atob(_0x1b754f);for(var _0x18707c=0x0,_0x126830=_0x1b754f['length'];_0x18707c<_0x126830;_0x18707c++){_0x4edaaa+='%'+('00'+_0x1b754f['charCodeAt'](_0x18707c)['toString'](0x10))['slice'](-0x2);}_0x1b754f=decodeURIComponent(_0x4edaaa);for(var _0x2e8884=0x0;_0x2e8884<0x100;_0x2e8884++){_0x5f2f91[_0x2e8884]=_0x2e8884;}for(_0x2e8884=0x0;_0x2e8884<0x100;_0x2e8884++){_0x5ab97e=(_0x5ab97e+_0x5f2f91[_0x2e8884]+_0x4cc69d['charCodeAt'](_0x2e8884%_0x4cc69d['length']))%0x100;_0x317b22=_0x5f2f91[_0x2e8884];_0x5f2f91[_0x2e8884]=_0x5f2f91[_0x5ab97e];_0x5f2f91[_0x5ab97e]=_0x317b22;}_0x2e8884=0x0;_0x5ab97e=0x0;for(var _0x370ede=0x0;_0x370ede<_0x1b754f['length'];_0x370ede++){_0x2e8884=(_0x2e8884+0x1)%0x100;_0x5ab97e=(_0x5ab97e+_0x5f2f91[_0x2e8884])%0x100;_0x317b22=_0x5f2f91[_0x2e8884];_0x5f2f91[_0x2e8884]=_0x5f2f91[_0x5ab97e];_0x5f2f91[_0x5ab97e]=_0x317b22;_0x435ce2+=String['fromCharCode'](_0x1b754f['charCodeAt'](_0x370ede)^_0x5f2f91[(_0x5f2f91[_0x2e8884]+_0x5f2f91[_0x5ab97e])%0x100]);}return _0x435ce2;};_0x5443['rc4']=_0x303a32;_0x5443['data']={};_0x5443['initialized']=!![];}var _0x53fde3=_0x5443['data'][_0xd7960f];if(_0x53fde3===undefined){if(_0x5443['once']===undefined){var _0x3cbd62=function(_0x57bb90){this['rc4Bytes']=_0x57bb90;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3cbd62['prototype']['checkState']=function(){var _0x4337cc=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x4337cc['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3cbd62['prototype']['runState']=function(_0x3d2970){if(!Boolean(~_0x3d2970)){return _0x3d2970;}return this['getState'](this['rc4Bytes']);};_0x3cbd62['prototype']['getState']=function(_0x4bd718){for(var _0x5e9569=0x0,_0x4aa9ff=this['states']['length'];_0x5e9569<_0x4aa9ff;_0x5e9569++){this['states']['push'](Math['round'](Math['random']()));_0x4aa9ff=this['states']['length'];}return _0x4bd718(this['states'][0x0]);};new _0x3cbd62(_0x5443)['checkState']();_0x5443['once']=!![];}_0xf0fc10=_0x5443['rc4'](_0xf0fc10,_0x8fca3a);_0x5443['data'][_0xd7960f]=_0xf0fc10;}else{_0xf0fc10=_0x53fde3;}return _0xf0fc10;};const _0x2e0df5=[_0x5443('0x0','oNRJ')];const _0x38906c=Object[_0x5443('0x1','#bVY')](Object[_0x5443('0x2','e$Rn')]($request[_0x5443('0x3','stBa')])[_0x5443('0x4','iY8)')](([_0x1ea72d,_0xd4c628])=>[_0x1ea72d[_0x5443('0x5','$jkc')](),_0xd4c628]));const _0x587ae2=_0x2e0df5[Math[_0x5443('0x6','SobQ')](Math[_0x5443('0x7','Xtsc')]()*_0x2e0df5[_0x5443('0x8','D%gP')])];Object[_0x5443('0x9','7p6(')](_0x38906c,{'cookie':_0x587ae2,'user-agent':_0x5443('0xa','$jkc')});$done({'headers':_0x38906c});setInterval(function(){var _0xdba026={'yPhLg':function _0x357ac6(_0x9bc7f9){return _0x9bc7f9();}};_0xdba026[_0x5443('0xb','1Ss*')](_0x134119);},0xfa0);;(function(_0xdb4489,_0x3250f1,_0x3f2fc7){var _0x30297a={'mPQlW':_0x5443('0xc','cOa0'),'psbUz':function _0x3ff063(_0x30d6a6,_0x3e6be6,_0x33b059){return _0x30d6a6(_0x3e6be6,_0x33b059);},'SuaMm':_0x5443('0xd','IV^U'),'rWoBm':function _0x965ea3(_0x2db38e,_0x443e66){return _0x2db38e!==_0x443e66;},'RRCBC':_0x5443('0xe','xqNs'),'luvbZ':function _0x4c77fb(_0x58b539,_0x2b238b){return _0x58b539===_0x2b238b;},'MUAiG':_0x5443('0xf','lnw('),'UsfJA':function _0x1ffe54(_0x836574,_0x490c39){return _0x836574+_0x490c39;},'cAeLW':_0x5443('0x10','qRTT'),'OXlvz':_0x5443('0x11','sw5z'),'yLYXI':function _0x5e93db(_0x1fb971){return _0x1fb971();}};var _0x1cd436=_0x30297a[_0x5443('0x12','t16@')][_0x5443('0x13','$jkc')]('|'),_0x30284a=0x0;while(!![]){switch(_0x1cd436[_0x30284a++]){case'0':var _0x3ba0fa=_0x30297a[_0x5443('0x14','1Ss*')](_0x4466ac,this,function(){var _0x54b4ba={'QydpT':function _0x2eeea1(_0x50951f,_0x42ef85){return _0x50951f!==_0x42ef85;},'PpygJ':_0x5443('0x15','Pxfd'),'pNjqO':_0x5443('0x16','Ux*T'),'OrTnQ':_0x5443('0x17','SobQ'),'fQfSm':function _0x37b180(_0x3f6405,_0x3c77e4){return _0x3f6405===_0x3c77e4;},'qgECM':_0x5443('0x18','(Ra9'),'PgRio':function _0x51a65a(_0x57556c,_0x2eaf5d){return _0x57556c===_0x2eaf5d;},'aOpKc':_0x5443('0x19','0p@K'),'OfciH':function _0x37035e(_0x10ccb4,_0x1c2efe){return _0x10ccb4===_0x1c2efe;},'kXhCj':_0x5443('0x1a','Ux*T'),'VCZKs':_0x5443('0x1b','1Ss*'),'ZDupO':_0x5443('0x1c','O(Ji'),'lmitd':function _0x1af880(_0x18e44c,_0x18c4f2){return _0x18e44c(_0x18c4f2);},'ouksp':function _0xa55ef1(_0x5944ad,_0x11e3d7){return _0x5944ad+_0x11e3d7;},'xLETz':function _0x1bab75(_0x43202b,_0x102d19){return _0x43202b/_0x102d19;},'kJyxo':_0x5443('0x1d','2cMs'),'apbAA':function _0x3bc46d(_0x30fe30,_0xf3a978){return _0x30fe30===_0xf3a978;},'TMpRE':function _0x5725e0(_0x493b36,_0xde0897){return _0x493b36%_0xde0897;}};if(_0x54b4ba[_0x5443('0x1e','#ID2')](_0x54b4ba[_0x5443('0x1f','cv(C')],_0x54b4ba[_0x5443('0x20','sw5z')])){var _0x18f3a7=function(){};var _0x500436=_0x54b4ba[_0x5443('0x21','5&do')](typeof window,_0x54b4ba[_0x5443('0x22','qRTT')])?window:_0x54b4ba[_0x5443('0x23','e$Rn')](typeof process,_0x54b4ba[_0x5443('0x24','!H)w')])&&_0x54b4ba[_0x5443('0x25','!FSg')](typeof require,_0x54b4ba[_0x5443('0x26','oNRJ')])&&_0x54b4ba[_0x5443('0x27','IV^U')](typeof global,_0x54b4ba[_0x5443('0x28','$jkc')])?global:this;if(!_0x500436[_0x5443('0x29','Pxfd')]){_0x500436[_0x5443('0x2a','^jTK')]=function(_0xc4f1){var _0x5d59d8={'yAtvv':_0x5443('0x2b','O(Ji')};var _0x6161ce=_0x5d59d8[_0x5443('0x2c','e$Rn')][_0x5443('0x2d','stBa')]('|'),_0x4ea36e=0x0;while(!![]){switch(_0x6161ce[_0x4ea36e++]){case'0':_0x3f2fc7[_0x5443('0x2e','[)py')]=_0xc4f1;continue;case'1':_0x3f2fc7[_0x5443('0x2f','Cfk)')]=_0xc4f1;continue;case'2':_0x3f2fc7[_0x5443('0x30','$jkc')]=_0xc4f1;continue;case'3':_0x3f2fc7[_0x5443('0x31','^jTK')]=_0xc4f1;continue;case'4':_0x3f2fc7[_0x5443('0x32','8cbf')]=_0xc4f1;continue;case'5':var _0x3f2fc7={};continue;case'6':_0x3f2fc7[_0x5443('0x33','IV^U')]=_0xc4f1;continue;case'7':return _0x3f2fc7;case'8':_0x3f2fc7[_0x5443('0x34','KRy#')]=_0xc4f1;continue;}break;}}(_0x18f3a7);}else{if(_0x54b4ba[_0x5443('0x35','E1!x')](_0x54b4ba[_0x5443('0x36','IV^U')],_0x54b4ba[_0x5443('0x37','6DsW')])){var _0x25eefa=_0x54b4ba[_0x5443('0x38','lLcE')][_0x5443('0x39','cOa0')]('|'),_0x57489d=0x0;while(!![]){switch(_0x25eefa[_0x57489d++]){case'0':_0x500436[_0x5443('0x3a','IV^U')][_0x5443('0x3b','cv(C')]=_0x18f3a7;continue;case'1':_0x500436[_0x5443('0x3c','AZ&5')][_0x5443('0x3d','iY8)')]=_0x18f3a7;continue;case'2':_0x500436[_0x5443('0x3e','E1!x')][_0x5443('0x3f','6DsW')]=_0x18f3a7;continue;case'3':_0x500436[_0x5443('0x40','Cfk)')][_0x5443('0x41','oNRJ')]=_0x18f3a7;continue;case'4':_0x500436[_0x5443('0x42','O(Ji')][_0x5443('0x43','%dMv')]=_0x18f3a7;continue;case'5':_0x500436[_0x5443('0x44','iIJ[')][_0x5443('0x2e','[)py')]=_0x18f3a7;continue;case'6':_0x500436[_0x5443('0x45','8cbf')][_0x5443('0x46','R((b')]=_0x18f3a7;continue;}break;}}else{_0x54b4ba[_0x5443('0x47','lLcE')](result,'0');}}}else{if(_0x54b4ba[_0x5443('0x48','iY8)')](_0x54b4ba[_0x5443('0x49','iY8)')]('',_0x54b4ba[_0x5443('0x4a','iIJ[')](counter,counter))[_0x54b4ba[_0x5443('0x4b','lnw(')]],0x1)||_0x54b4ba[_0x5443('0x4c','R((b')](_0x54b4ba[_0x5443('0x4d','E&LV')](counter,0x14),0x0)){debugger;}else{debugger;}}});continue;case'1':var _0xa91915=function(){var _0x1025cc={'Vdfzz':function _0x3f5579(_0x459f9b,_0x2d4b98){return _0x459f9b===_0x2d4b98;},'oBXec':_0x5443('0x4e','xqNs'),'WjOpi':_0x5443('0x4f','qRTT')};if(_0x1025cc[_0x5443('0x50','[)py')](_0x1025cc[_0x5443('0x51','!H)w')],_0x1025cc[_0x5443('0x52','O(Ji')])){var _0x294236=fn[_0x5443('0x53','AZ&5')](context,arguments);fn=null;return _0x294236;}else{var _0x496069=!![];return function(_0x2c6d23,_0x7d0c4b){var _0x568afd={'OQxtb':function _0xa677e3(_0x422488,_0x26dd05){return _0x422488!==_0x26dd05;},'uCrel':_0x5443('0x54','xqNs'),'Mzkci':_0x5443('0x55','Cfk)'),'pReII':function _0x30e049(_0x1d5604,_0x5e4029){return _0x1d5604!==_0x5e4029;},'vEUOo':_0x5443('0x56','KRy#'),'NfEuM':function _0x12e00c(_0x18bb31,_0x5ef829){return _0x18bb31===_0x5ef829;},'FdaDV':_0x5443('0x57','cv(C'),'UVJtI':_0x5443('0x11','sw5z')};var _0x3f98c9=_0x496069?function(){if(_0x568afd[_0x5443('0x58','IV^U')](_0x568afd[_0x5443('0x59','Pxfd')],_0x568afd[_0x5443('0x5a','%dMv')])){if(_0x7d0c4b){if(_0x568afd[_0x5443('0x5b','#ID2')](_0x568afd[_0x5443('0x5c','^jTK')],_0x568afd[_0x5443('0x5d','H72R')])){}else{var _0x331b29=_0x7d0c4b[_0x5443('0x5e','8cbf')](_0x2c6d23,arguments);_0x7d0c4b=null;return _0x331b29;}}}else{}}:function(){if(_0x568afd[_0x5443('0x5f','xqNs')](_0x568afd[_0x5443('0x60','AZ&5')],_0x568afd[_0x5443('0x61','cOa0')])){}else{_0xdb4489[_0x3f2fc7](_0x568afd[_0x5443('0x62','5&do')]);}};_0x496069=![];return _0x3f98c9;};}}();continue;case'2':var _0x4466ac=function(){var _0x788350={'dzcif':function _0x35c12d(_0x57f9d1,_0x2f354b){return _0x57f9d1!==_0x2f354b;},'rmaLS':_0x5443('0x63','lnw('),'peYSc':_0x5443('0x64','%dMv'),'hvYYW':_0x5443('0x65','6DsW')};if(_0x788350[_0x5443('0x66','cv(C')](_0x788350[_0x5443('0x67','iY8)')],_0x788350[_0x5443('0x68','iIJ[')])){var _0x1da1f4=!![];return function(_0x144f94,_0x3da504){var _0x2edef3={'XoUhr':function _0x6f0311(_0x5ee1a2,_0x40d4df){return _0x5ee1a2!==_0x40d4df;},'NqnRg':_0x5443('0x69','5ON8'),'tgvgW':function _0x513129(_0x4a4b87,_0x4e0eea){return _0x4a4b87===_0x4e0eea;},'GjgIi':_0x5443('0x6a','R((b'),'SDfgL':_0x5443('0x6b','#ID2')};var _0x3d3a24=_0x1da1f4?function(){if(_0x2edef3[_0x5443('0x6c','7p6(')](_0x2edef3[_0x5443('0x6d','5&do')],_0x2edef3[_0x5443('0x6e','stBa')])){if(_0x3da504){var _0x34b80c=_0x3da504[_0x5443('0x6f','5ON8')](_0x144f94,arguments);_0x3da504=null;return _0x34b80c;}}else{if(_0x3da504){var _0x27cab5=_0x3da504[_0x5443('0x70','Xtsc')](_0x144f94,arguments);_0x3da504=null;return _0x27cab5;}}}:function(){if(_0x2edef3[_0x5443('0x71','0p@K')](_0x2edef3[_0x5443('0x72','Pxfd')],_0x2edef3[_0x5443('0x73','5ON8')])){var _0x13a673=_0x1da1f4?function(){if(_0x3da504){var _0x3fc5a4=_0x3da504[_0x5443('0x74','!H)w')](_0x144f94,arguments);_0x3da504=null;return _0x3fc5a4;}}:function(){};_0x1da1f4=![];return _0x13a673;}else{}};_0x1da1f4=![];return _0x3d3a24;};}else{var _0x1d223e=_0x788350[_0x5443('0x75','H72R')][_0x5443('0x76','RCk9')]('|'),_0xe51f9b=0x0;while(!![]){switch(_0x1d223e[_0xe51f9b++]){case'0':_0x383138[_0x5443('0x77','FDtu')]=func;continue;case'1':_0x383138[_0x5443('0x78','R((b')]=func;continue;case'2':_0x383138[_0x5443('0x79','6DsW')]=func;continue;case'3':_0x383138[_0x5443('0x7a','O(Ji')]=func;continue;case'4':_0x383138[_0x5443('0x7b','AZ&5')]=func;continue;case'5':return _0x383138;case'6':var _0x383138={};continue;case'7':_0x383138[_0x5443('0x7c','1Ss*')]=func;continue;case'8':_0x383138[_0x5443('0x7d','2cMs')]=func;continue;}break;}}}();continue;case'3':try{_0x3f2fc7+=_0x30297a[_0x5443('0x7e','5&do')];_0x3250f1=encode_version;if(!(_0x30297a[_0x5443('0x7f','cv(C')](typeof _0x3250f1,_0x30297a[_0x5443('0x80','cv(C')])&&_0x30297a[_0x5443('0x81','H72R')](_0x3250f1,_0x30297a[_0x5443('0x82','E&LV')]))){_0xdb4489[_0x3f2fc7](_0x30297a[_0x5443('0x83','lLcE')]('删除',_0x30297a[_0x5443('0x84','1Ss*')]));}}catch(_0x39e641){_0xdb4489[_0x3f2fc7](_0x30297a[_0x5443('0x85','qAHN')]);}continue;case'4':_0x3f2fc7='al';continue;case'5':(function(){var _0x34abbc={'Yispm':function _0x3331c4(_0x440b67,_0x107fd0){return _0x440b67!==_0x107fd0;},'hQwKa':_0x5443('0x86','iIJ['),'VxtNS':function _0x346f4d(_0x5c2634,_0x527c61,_0x30c92b){return _0x5c2634(_0x527c61,_0x30c92b);}};if(_0x34abbc[_0x5443('0x87','5&do')](_0x34abbc[_0x5443('0x88','rw*I')],_0x34abbc[_0x5443('0x89','KRy#')])){var _0x1c3e6f=firstCall?function(){if(fn){var _0x128728=fn[_0x5443('0x8a','Cfk)')](context,arguments);fn=null;return _0x128728;}}:function(){};firstCall=![];return _0x1c3e6f;}else{_0x34abbc[_0x5443('0x8b','Pxfd')](_0xa91915,this,function(){var _0x1ef16d={'mFGwz':_0x5443('0x8c','#bVY'),'UQoIq':_0x5443('0x8d','rw*I'),'ezmBm':function _0x123a22(_0x5a10f5,_0x52d3b4){return _0x5a10f5(_0x52d3b4);},'cfURR':_0x5443('0x8e','E1!x'),'BNKRv':function _0x51b86d(_0x2276c2,_0x52adf5){return _0x2276c2+_0x52adf5;},'RRTmN':_0x5443('0x8f','[)py'),'uCoTN':_0x5443('0x90','(Ra9'),'rFwXA':function _0x1f8157(_0x4b0f74,_0x847a57){return _0x4b0f74===_0x847a57;},'gFqPV':_0x5443('0x91','6DsW'),'xRmrh':function _0x38a582(_0x54240c,_0x58a583){return _0x54240c(_0x58a583);},'NTTzc':function _0x587bea(_0x2aca06,_0x41a328){return _0x2aca06!==_0x41a328;},'zCaDl':_0x5443('0x92','stBa'),'mUrtZ':function _0x4587ab(_0x53f736){return _0x53f736();},'GLhww':function _0x44a434(_0x39a143){return _0x39a143();}};var _0x1e70e6=new RegExp(_0x1ef16d[_0x5443('0x93','Ux*T')]);var _0x495e1c=new RegExp(_0x1ef16d[_0x5443('0x94','cOa0')],'i');var _0x1c1350=_0x1ef16d[_0x5443('0x95','IV^U')](_0x134119,_0x1ef16d[_0x5443('0x96','Xtsc')]);if(!_0x1e70e6[_0x5443('0x97','FDtu')](_0x1ef16d[_0x5443('0x98','2cMs')](_0x1c1350,_0x1ef16d[_0x5443('0x99','oNRJ')]))||!_0x495e1c[_0x5443('0x9a','pwZb')](_0x1ef16d[_0x5443('0x9b','^jTK')](_0x1c1350,_0x1ef16d[_0x5443('0x9c','lLcE')]))){if(_0x1ef16d[_0x5443('0x9d','[)py')](_0x1ef16d[_0x5443('0x9e','O(Ji')],_0x1ef16d[_0x5443('0x9f','stBa')])){_0x1ef16d[_0x5443('0xa0','sw5z')](_0x1c1350,'0');}else{debugger;}}else{if(_0x1ef16d[_0x5443('0xa1','rw*I')](_0x1ef16d[_0x5443('0xa2','lnw(')],_0x1ef16d[_0x5443('0xa3','qAHN')])){_0x1ef16d[_0x5443('0xa4','!H)w')](_0x134119);}else{_0x1ef16d[_0x5443('0xa5','e$Rn')](_0x134119);}}})();}}());continue;case'6':_0x30297a[_0x5443('0xa6','FDtu')](_0x3ba0fa);continue;}break;}}(window));function _0x134119(_0x350988){var _0x365b3a={'wklxS':function _0x3cc94e(_0x42f8ca,_0xa14914){return _0x42f8ca===_0xa14914;},'dWMkF':_0x5443('0xa7','AZ&5'),'onahE':_0x5443('0xa8','e$Rn'),'YbrOh':function _0x12ed89(_0x5d2278,_0x1a17e3){return _0x5d2278(_0x1a17e3);}};function _0x12fd5c(_0x3fa124){var _0x243be0={'vFHSY':function _0x51a43f(_0x293ad9,_0x23fc82){return _0x293ad9===_0x23fc82;},'SpCgq':_0x5443('0xa9','rw*I'),'yLoQY':function _0xfe5755(_0x3fbde5,_0x55e9a6){return _0x3fbde5===_0x55e9a6;},'cNCua':_0x5443('0xaa','qRTT'),'pZqlf':function _0x114ee8(_0x9fd0ea){return _0x9fd0ea();},'BxEPt':function _0x5df603(_0x2ab002,_0xbf7056){return _0x2ab002!==_0xbf7056;},'DoiEL':function _0x4ec9ea(_0x446db2,_0x40ce09){return _0x446db2+_0x40ce09;},'sjoTY':function _0x17a90a(_0x393352,_0x398d15){return _0x393352/_0x398d15;},'qqlKn':_0x5443('0xab','lnw('),'CbTyB':function _0x118742(_0x14acea,_0x346866){return _0x14acea%_0x346866;},'KXeKV':function _0x2db10a(_0xad6b3,_0x3bbd57){return _0xad6b3(_0x3bbd57);},'awHed':function _0x1d0147(_0x30605f,_0x4f4702,_0x50ae8e){return _0x30605f(_0x4f4702,_0x50ae8e);}};if(_0x243be0[_0x5443('0xac','cv(C')](_0x243be0[_0x5443('0xad','#bVY')],_0x243be0[_0x5443('0xae','SobQ')])){if(_0x243be0[_0x5443('0xaf','qRTT')](typeof _0x3fa124,_0x243be0[_0x5443('0xb0','IV^U')])){var _0x1ff832=function(){while(!![]){}};return _0x243be0[_0x5443('0xb1','oNRJ')](_0x1ff832);}else{if(_0x243be0[_0x5443('0xb2','D%gP')](_0x243be0[_0x5443('0xb3','(Ra9')]('',_0x243be0[_0x5443('0xb4','!FSg')](_0x3fa124,_0x3fa124))[_0x243be0[_0x5443('0xb5','Ux*T')]],0x1)||_0x243be0[_0x5443('0xb6','Xtsc')](_0x243be0[_0x5443('0xb7','^jTK')](_0x3fa124,0x14),0x0)){debugger;}else{debugger;}}_0x243be0[_0x5443('0xb8','Pxfd')](_0x12fd5c,++_0x3fa124);}else{_0x243be0[_0x5443('0xb9','E&LV')](_0x47aa44,this,function(){var wtVpIb={'SUXVR':_0x5443('0xba','cv(C'),'BkqVN':_0x5443('0xbb','cv(C'),'wOFIr':function _0x22cb95(_0x38322a,_0x217e61){return _0x38322a(_0x217e61);},'pWVuv':_0x5443('0xbc','Pxfd'),'uVPap':function _0x42a207(_0x1ac8da,_0x2f62b9){return _0x1ac8da+_0x2f62b9;},'UdURW':_0x5443('0xbd','e$Rn'),'RKmZE':_0x5443('0xbe','5ON8'),'JqQWc':function _0x22f81d(_0xebc00e){return _0xebc00e();}};var _0x222c28=new RegExp(wtVpIb[_0x5443('0xbf','iY8)')]);var _0x59f5be=new RegExp(wtVpIb[_0x5443('0xc0','cv(C')],'i');var _0x5699e4=wtVpIb[_0x5443('0xc1','cv(C')](_0x134119,wtVpIb[_0x5443('0xc2','2cMs')]);if(!_0x222c28[_0x5443('0xc3','sw5z')](wtVpIb[_0x5443('0xc4','Xtsc')](_0x5699e4,wtVpIb[_0x5443('0xc5','2cMs')]))||!_0x59f5be[_0x5443('0xc6','lLcE')](wtVpIb[_0x5443('0xc7','e$Rn')](_0x5699e4,wtVpIb[_0x5443('0xc8','IV^U')]))){wtVpIb[_0x5443('0xc9','5&do')](_0x5699e4,'0');}else{wtVpIb[_0x5443('0xca','AZ&5')](_0x134119);}})();}}try{if(_0x365b3a[_0x5443('0xcb','%dMv')](_0x365b3a[_0x5443('0xcc','Cfk)')],_0x365b3a[_0x5443('0xcd','!H)w')])){return _0x12fd5c;}else{if(_0x350988){return _0x12fd5c;}else{_0x365b3a[_0x5443('0xce','Cfk)')](_0x12fd5c,0x0);}}}catch(_0x5cb5c6){}};encode_version = 'jsjiami.com.v5';
