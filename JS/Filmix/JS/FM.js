/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2024-04-02
 *
 * 


\f\i\l\m\i\x\ \v\i\p\


仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：
1、、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoFilmix.js


[mitm]
hostname = appv2.filmix.com.cn

[rewrite_local]

https:\/\/appv2\.filmix\.com\.cn\/api\/v2\/users url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/fm.js

********************************/

let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status ? JSON.parse($response.body) : $response.body;
if (/^https:\/\/appv2\.filmix\.com\.cn\/api\/v2\/users?/.test(requestUrl)) {
  obj.is_vip = true;
  obj.vip_start_time = "2024-04-02T10:10:10.101198+08:00";
  obj.vip_end_time = "2222-02-02T15:33:15.101198+08:00";
}
$done({ body: status ? JSON.stringify(obj) : obj });

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
