/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2024-12-06
 *
 * 


MusicTag pro


仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript
# https://apps.apple.com/us/app/music-tag-editor-20-formats/id6738013677?uo=4

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoMusicTag.js

2、打开软件 > 左上角按钮 > 会员中心 > 自动解锁个人会员 ，若未解锁成功，手动点击右上角「恢复购买」

3、解锁成功理论上有消息弹窗，成功后即可关闭脚本。[🚨🚨🚨无效请关掉软件进程后，先打开脚本，再进软件进行解锁]

4、⚠️⚠️⚠️解锁脚本不可共存，请逐一使用并关闭。


[mitm]
hostname = buy.itunes.apple.com

[rewrite_local]

https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/mut.js

********************************/

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('5J(5B(p,a,c,k,e,d){e=5B(c){5A(c<a?"":e(5H(c/a)))+((c=c%a)>35?5E.5M(c+29):c.5L(36))};5F(!\'\'.5D(/^/,5E)){5C(c--)d[e(c)]=k[c]||e(c);k=[5B(e){5A d[e]}];e=5B(){5A\'\\\\w+\'};c=1};5C(c--)5F(k[c])p=p.5D(5G 5K(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);5A p}(\'2S(2M(p,a,c,k,e,d){e=2M(c){2L(c<a?"":e(3O(c/a)))+((c=c%a)>35?2R.3E(c+29):c.3M(36))};2N(!\\\'\\\'.2P(/^/,2R)){2Q(c--)d[e(c)]=k[c]||e(c);k=[2M(e){2L d[e]}];e=2M(){2L\\\'\\\\\\\\w+\\\'};c=1};2Q(c--)2N(k[c])p=p.2P(2O 3N(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);2L p}(\\\'b C="2F 2C";b L="10.1z.1A";b v="10.1z.1A.1E";b Y="4";b 1d=1q;b 1h=I;b a=D.1t($1H.q);b 1i=$1m.2;b $=1D 1n(C);5(/^1l:\\\\\\\\/\\\\\\\\/1I\\\\\\\\.1K\\\\\\\\.1L\\\\\\\\.10\\\\\\\\/1J?/.28(1i)&&(1h?$1m.1N["26-23"].29(C):1q)){b r={1V:"18",1U:L,1T:[{1f:"1",1a:"s",K:"s",M:v,1p:"1g",17:"8-7-14 15:27:9 k/j",1c:"1b",19:"8-7-14 c:27:9 e/f",12:"8-7-14 c:24:9 k/j",T:"X",W:"8-7-14 c:24:9 e/f",13:"y-3-3 3:3:3 k/j",16:"y-3-3 3:3:3 e/f",1e:"11",},],1R:1M,1O:"8-7-14 c:25:7 e/f",1P:"8-7-14 15:27:9 k/j",1Q:"8-7-14 c:27:9 e/f",1S:1W,1X:"1Y",W:"8-7-14 c:24:9 e/f",1Z:Y,T:"X",20:"21",22:Y,1G:1F,H:[{1f:"1",1a:"s",K:"s",M:v,1p:"1g",2v:"I",2b:"I",17:"8-7-14 15:27:9 k/j",1c:"1b",19:"8-7-14 c:27:9 e/f",12:"8-7-14 c:24:9 k/j",T:"X",W:"8-7-14 c:24:9 e/f",13:"y-3-3 3:3:3 k/j",16:"y-3-3 3:3:3 e/f",1e:"11",},],G:[{M:L,K:"s",2y:v,2z:"1",},],2A:0,2a:"18",};a.H=r.H;a.2D="";a.G=r.G;a.r=r;5(1d){$.E("2E"+C+" 2K！","","2G!2H，2I。","1l://i.2J.2x/1C-2B/1C/2w/c/1u/1u/2k/2c/2d.2e")}}$B({q:D.1s(a)});2f 1n(1y){6 h=N $2g!=="O";6 m=N $z!=="O"&&!h;6 l=N $x!=="O";6 R=(d)=>{5(h||m)n $1k.R(d);5(l)n $1j.2h(d)};6 S=(d,t)=>{5(h||m)n $1k.S(d,t);5(l)n $1j.2i(d,t)};6 E=(A="2j",w="",p="",2="",1o=2)=>{5(h)$1B.u(A,w,p,2);5(m)$1B.u(A,w,p,{2});5(l)$E(A,w,p,{"2l-2":2,"2u-2":1o})};6 P=(2,g)=>{5(h||m)$z.P(2,g);5(l){2.U=`2m`;$x.Q(2).Z((o)=>g(V,{},o.q))}};6 u=(2,g)=>{5(h||m)$z.u(2,g);5(l){2.U=`2n`;$x.Q(2).Z((o)=>g(V,{},o.q))}};6 J=(2,g)=>{5(h||m)$z.J(2,g);5(l){2.U="2o";$x.Q(2).Z((o)=>g(V,{},o.q))}};6 1x=(1r)=>D.1t(1r);6 1w=(a)=>D.1s(a);6 1v=(a)=>{n 2p.2q(a).2r((d)=>`${d}=${a[d]}`).2s("&")};6 F=(p)=>2t.F(p);6 B=(t={})=>$B(t);n{1y,R,S,E,P,u,J,1x,1w,1v,F,B,}}\\\',3L,3K,\\\'||3J|3I||2N|3P|3H|3F|40|3D|3C|3B|3A|3z|3G|3Q|3R||3S|4b|4a|49|2L|48|47|46|45|44|42|41|3Z|3Y|3X|3W|3V|3U|3x|3y|4c|3w|4e|3u|39|38|37|34|33|32|31|2Z|3a|2Y|2X|2W|2V|2U|2T|30|3b|3v|3d|3c|3t|3s|3r|||3q|3p|3o|3n|3m|3l|3k|3j|3i|3h|3g|3f|3e|3T|4d|4D|4f|5d|5c|5h|5b|5a|59|58|57|5f|56|54|53|52|51|50|4Z|2O|4Y|4X|55|5g|5j|5i|5y|5x|5w|5v|5u|5s|5z|5q|5p|5o|5r|5n|5m|5l|5k|5t|4W|5e|4U|4J|||4w||4v|4u|4t|4s|4r|4q|4p|2M|4o|4n|4m|4l|43|4k|4j|4i|4h|4g|4x|4y|4z|4A|4S|4R|4Q|4P|4O|4N|4M|4L|4T|4K|4I|4H|4G|4F|4E|4V|4C\\\'.4B(\\\'|\\\'),0,{}))\',62,6C,\'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||5A|5B|5F|5G|5D|5C|5E|5J|6B|6A|6z|6y|6x|6w|6D|6v|6t|6s|6r|6q|||6p|6o|6n|6u|6F|6O|6G|6W|6V|6U|6T|6S|6R|6Q|6X|6P|6N|6M|6L|6K|6l|6I|6H|6m|6Z|6E|6k|6g|5X|5W|5V|5R|5T|5M|5S|5Y|5Q|5N|5P|5O|62|5L|5K|5H|5U|5Z|6a|61|6i|6h|60|6f|6e|6d|6c||6j|6b||69|68|67|66|65|64|63|6J|6Y|7o|70|80|83|7Y|7X|7W|7V|7U|7T|81|7S|7Q|7P|7O|7N|7M|7L|7K|7J|7R|82|85|84|5I|8k|8j|8i|8h|8g|8f|8l|8d|8c|8b|8a|89|88|87|86|8e|7I|7Z|7G|7k|7i|7h|7g|7f|7e|7d|7c|7b|7j|7a|78|77|76|75|74|73|72|7H|71|79|7l|7v|7m|7E|7D|7C|7B|7A|7z|7y|7x|7F|7w|7u|7t|7s|7r|7q|7p|7n\'.5I(\'|\'),0,{}))',62,518,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||return|function|while|replace|String|if|new|parseInt|split|eval|RegExp|toString|fromCharCode|02|171|url|04|let|2024|obj|const|08|key|America|Los_Angeles|callback|httpClient|GMT||isQX|isSurge|resp|message|body|receipt|666666666666667|isLoon|value|productType|subtitle|task|2222|names|title|prefs|post|done|expires_date|pending_renewal_info|latest_receipt_info|false|put|original_transaction_id|productName|product_id|typeof|get|original_purchase_date_pst|fetch|read|write|original_purchase_date_ms|method|null|346|undefined|notify|1692026680000|then|7955085722000|original_purchase_date|Etc|expires_date_pst|purchase_date|Production|purchase_date_pst|com|transaction_id|purchase_date_ms|notifyState|expires_date_ms|quantity|PURCHASED|ua|requestUrl|1691972860000|JSON|appVersion|log|1691972704000|url2|true|str|stringify|parse|01|toStr|queryStr|download_id|name|musictag|www|notification|img|lifetime198|666666666666666666|receipt_creation_date_ms|toObj|pixiv|response|verifyReceipt|request_date_pst|persistentStore|itunes|apple|1111111111|headers|receipt_creation_date_pst|application_version|in_app_ownership_type|request_date|adam_id|version_external_identifier|in_app|receipt_type|666666666|request_date_ms|1692026860531|buy|bundle_id|original_application_version|Env|media|User|test|includes|environment|is_trial_period|03|91637959_p0|jpg|keys|loon|setValueForKey|XiaoMao|open|GET|POST|PUT|Tag|request|valueForKey|map|Object|console|join|2021|re|auto_renew_product_id|auto_renew_status|status|original|latest_receipt|Agent|is_in_intro_offer_period|Music|Nice|已解锁成功|可关掉此脚本|https|执行成功|XiaoMao_'.split('|'),0,{}))