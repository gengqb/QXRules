/*
Unlocks by photonmang 公众号：墨鱼手记

#!name=斑马海报
#!desc=斑马海报解锁会员
#!homepage=https://yfamily.ml
#!author=ddgksf2013
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/zebra.png
[MITM]
hostname=zebra.maka.im
[Script]
http-response https://zebra.maka.im/api/user/info requires-body=1,script-path=https://raw.githubusercontent.com/deezertidal/private/master/js-backup/Crack/bmhb.js


*/

let body= $response.body; 
var obj = JSON.parse(body); 
obj.data.business.is_lifelong_vip = true;
obj.data.business.wool = 20210130;
$done({body: JSON.stringify(obj)});
