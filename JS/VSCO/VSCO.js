#!name=VSCO
#!desc=VSCO Pro长期会员订阅.解锁成功理论上有消息弹窗，成功后即可关闭脚本。[🚨🚨🚨无效请关掉软件进程后，先打开脚本，再进软件进行解锁]
#!system=iOS
#!date=2024-11-01
#!author=BOBOLAOSHIV587
#!category=😍BOBO Premium
#!homepage=https://github.com/BOBOLAOSHIV587/Rules
#!icon=https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/Icons/AppIcons/Image/App/VSCO.png
#!openUrl=https://apps.apple.com/app/id588013838


[rewrite_local]
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/VSCO/JS/VSCO.js
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-header https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/VSCO/JS/VSCO.js


[mitm]
hostname = api.revenuecat.com

