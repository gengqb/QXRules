﻿/*************************************

>「 脚本名称 」         轻图解锁Pro
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-07
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
# >轻图解锁Pro
^https?:\/\/(purchase-qingtu-api.b612kaji|api-qingtu.kajicam).com\/(v1\/purchase\/subscription\/subscriber\/status|xht\/api\/user\/info) url script-request-header https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/QingTu.js

[mitm]
hostname = purchase-qingtu-api.b612kaji.com, api-qingtu.kajicam.com

var _0xodG='\x6a\x73\x6a\x69\x61\x6d\x69\x2e\x63\x6f\x6d\x2e\x76\x37';function _0x66b3(){var _0x2569a3=(function(){return[_0xodG,'dDVqjsnxxjtiWaBDmiefX.WcHokFmkO.vHN7RlUb==','sSoEW48PB8krW5bQW6CtdZO','WR0/W4JdVGpdHaBdRq','uCknW6zIWOtcPqtcGWDYWQP+BmoxW6n6vvLRW5baW4jLwuPOFCkgWRPvWQBdMmouy3VdP8kKW6CXlCoVWO5xWQBcVW','h8ouWPT4oL8Vlq','WR45WPFcVu3cKMpdPKecWQtdGSkT','W5FdMaNcGCo8FNZcSmkO','WQyhocWFb8obC8kJtvBcQ8oZ','W5GupazyWQVdSSkDAb/dLcG'].concat((function(){return['W7CSWQRcGCkaW7LCW7O','W7HeW5aAWOi','iCk6BwpcTeKPiCo8eCkByq','WQCimsSxaCoaFCknxh3cSCo5','bCoSbSksBGi','WQ/cTIf0WONdPSk2W53dSW','FcNcO2RcVhZdIfBcMCkmBSo/xG','iCosW4BdVgqexwZcRa','W44Ze8kDtmoFdW','W4RdN8ozBWeRBHJdIW'].concat((function(){return['uqn/W77cMhXNe2nOWOpcHa0','WO/cPK7dTwj4EJXV','D8k7mCkRWRpcIN47vW','W5TPrYjsWOKxvmoik8ovWRmY','WOBcN1LDWOtdR1tcKG','WRfAxSo6u8o9u3pcKLBdRmkdWPW','W6jnB3HBv8kgyG','ymkRjmkjBmovhGGV'];}()));}()));}());_0x66b3=function(){return _0x2569a3;};return _0x66b3();};function _0x3930(_0x30dd83,_0x4d4d47){var _0x66b3fe=_0x66b3();return _0x3930=function(_0x393047,_0x43dc63){_0x393047=_0x393047-0x108;var _0x3973d8=_0x66b3fe[_0x393047];if(_0x3930['aDiAEM']===undefined){var _0x243d12=function(_0x584f3e){var _0x532170='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x247fe6='',_0x275752='';for(var _0x661178=0x0,_0x1f0cd9,_0x47ed3a,_0x548b94=0x0;_0x47ed3a=_0x584f3e['charAt'](_0x548b94++);~_0x47ed3a&&(_0x1f0cd9=_0x661178%0x4?_0x1f0cd9*0x40+_0x47ed3a:_0x47ed3a,_0x661178++%0x4)?_0x247fe6+=String['fromCharCode'](0xff&_0x1f0cd9>>(-0x2*_0x661178&0x6)):0x0){_0x47ed3a=_0x532170['indexOf'](_0x47ed3a);}for(var _0x1d50b3=0x0,_0xb9949b=_0x247fe6['length'];_0x1d50b3<_0xb9949b;_0x1d50b3++){_0x275752+='%'+('00'+_0x247fe6['charCodeAt'](_0x1d50b3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x275752);};var _0x2fff60=function(_0x554cf6,_0x4ad407){var _0xef6c25=[],_0x397c1c=0x0,_0x43ac6d,_0x514639='';_0x554cf6=_0x243d12(_0x554cf6);var _0x6fa5dc;for(_0x6fa5dc=0x0;_0x6fa5dc<0x100;_0x6fa5dc++){_0xef6c25[_0x6fa5dc]=_0x6fa5dc;}for(_0x6fa5dc=0x0;_0x6fa5dc<0x100;_0x6fa5dc++){_0x397c1c=(_0x397c1c+_0xef6c25[_0x6fa5dc]+_0x4ad407['charCodeAt'](_0x6fa5dc%_0x4ad407['length']))%0x100,_0x43ac6d=_0xef6c25[_0x6fa5dc],_0xef6c25[_0x6fa5dc]=_0xef6c25[_0x397c1c],_0xef6c25[_0x397c1c]=_0x43ac6d;}_0x6fa5dc=0x0,_0x397c1c=0x0;for(var _0x123368=0x0;_0x123368<_0x554cf6['length'];_0x123368++){_0x6fa5dc=(_0x6fa5dc+0x1)%0x100,_0x397c1c=(_0x397c1c+_0xef6c25[_0x6fa5dc])%0x100,_0x43ac6d=_0xef6c25[_0x6fa5dc],_0xef6c25[_0x6fa5dc]=_0xef6c25[_0x397c1c],_0xef6c25[_0x397c1c]=_0x43ac6d,_0x514639+=String['fromCharCode'](_0x554cf6['charCodeAt'](_0x123368)^_0xef6c25[(_0xef6c25[_0x6fa5dc]+_0xef6c25[_0x397c1c])%0x100]);}return _0x514639;};_0x3930['RELekG']=_0x2fff60,_0x30dd83=arguments,_0x3930['aDiAEM']=!![];}var _0x519fd4=_0x66b3fe[0x0],_0x4d9969=_0x393047+_0x519fd4,_0x566c20=_0x30dd83[_0x4d9969];return!_0x566c20?(_0x3930['KgXtwe']===undefined&&(_0x3930['KgXtwe']=!![]),_0x3973d8=_0x3930['RELekG'](_0x3973d8,_0x43dc63),_0x30dd83[_0x4d9969]=_0x3973d8):_0x3973d8=_0x566c20,_0x3973d8;},_0x3930(_0x30dd83,_0x4d4d47);}var _0x9a3caf=_0x3930;(function(_0x8bff84,_0x242845,_0x1da55f,_0x591ef2,_0x56ccf4,_0x772283,_0x281137){return _0x8bff84=_0x8bff84>>0x9,_0x772283='hs',_0x281137='hs',function(_0x4e3af1,_0x526712,_0x43f266,_0x20922b,_0x483011){var _0x23b287=_0x3930;_0x20922b='tfi',_0x772283=_0x20922b+_0x772283,_0x483011='up',_0x281137+=_0x483011,_0x772283=_0x43f266(_0x772283),_0x281137=_0x43f266(_0x281137),_0x43f266=0x0;var _0x5b2d67=_0x4e3af1();while(!![]&&--_0x591ef2+_0x526712){try{_0x20922b=-parseInt(_0x23b287(0x109,'p(WG'))/0x1*(parseInt(_0x23b287(0x10b,'ontS'))/0x2)+-parseInt(_0x23b287(0x116,'l@oV'))/0x3+parseInt(_0x23b287(0x119,'Ybhy'))/0x4*(parseInt(_0x23b287(0x113,'l@oV'))/0x5)+parseInt(_0x23b287(0x10a,'j]3q'))/0x6+parseInt(_0x23b287(0x11c,'QISw'))/0x7+parseInt(_0x23b287(0x10d,'t3#e'))/0x8+-parseInt(_0x23b287(0x120,'VQy0'))/0x9*(parseInt(_0x23b287(0x10e,'[l[F'))/0xa);}catch(_0x131aa8){_0x20922b=_0x43f266;}finally{_0x483011=_0x5b2d67[_0x772283]();if(_0x8bff84<=_0x591ef2)_0x43f266?_0x56ccf4?_0x20922b=_0x483011:_0x56ccf4=_0x483011:_0x43f266=_0x483011;else{if(_0x43f266==_0x56ccf4['replace'](/[UDdlXbxFRetHknNWOBqfV=]/g,'')){if(_0x20922b===_0x526712){_0x5b2d67['un'+_0x772283](_0x483011);break;}_0x5b2d67[_0x281137](_0x483011);}}}}}(_0x1da55f,_0x242845,function(_0x5722f6,_0x9ce538,_0x5ec658,_0xab3afa,_0x46d1a6,_0x52277d,_0x174ab7){return _0x9ce538='\x73\x70\x6c\x69\x74',_0x5722f6=arguments[0x0],_0x5722f6=_0x5722f6[_0x9ce538](''),_0x5ec658='\x72\x65\x76\x65\x72\x73\x65',_0x5722f6=_0x5722f6[_0x5ec658]('\x76'),_0xab3afa='\x6a\x6f\x69\x6e',(0x187b6b,_0x5722f6[_0xab3afa](''));});}(0x19000,0x83cad,_0x66b3,0xca),_0x66b3)&&(_0xodG=`\xfaf`);if($response['body']!==_0x9a3caf(0x11f,'L7Oz')){var Mike=JSON[_0x9a3caf(0x11b,'Z^WN')]($response['body']);const url=$request['url'];var ids=_0x9a3caf(0x114,'3Q[j');Mike['result'][_0x9a3caf(0x110,'MKLS')][_0x9a3caf(0x108,'1z$C')](_0x1d7797=>{var _0x590412=_0x9a3caf;_0x1d7797[_0x590412(0x121,'y2Qb')]=ids;}),mgmdev[_0x9a3caf(0x11e,'h0wI')]['activated']=!![],$done({'body':JSON[_0x9a3caf(0x10c,'zffX')](Mike)});}var version_ = '\x6a\x73\x6a\x69\x61\x6d\x69\x2e\x63\x6f\x6d\x2e\x76\x37';
