#!name=炫图ai画图-PicWiz AI
#!desc=炫图ai画图-解锁ai功能 无限制
#!category=😍BOBO Premium
#!icon=https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/Icons/AppIcons/Image/App/PicWizAI.png
#!openUrl=https://apps.apple.com/app/id6475798979

[rewrite_local]
# 个人中心 
^https:\/\/xuantu\.pro\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/PicWizAI/JS/PicWizAI-3.js
# 会员
^https:\/\/xuantu\.pro\/(creation\/(generate\/(v2|v3)|memberships|getProgress|imageintent)|file\/aliyun\/sts)\/? url script-request-header https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/PicWizAI/JS/PicWizAI-2.js
# 获取会员token 
^https:\/\/xuantu\.pro\/creation\/myworks url script-request-header https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/PicWizAI/JS/PicWizAI-1.js
# 无水印
^http://statica\.xuantu\.pro/x/prod/ReplaceBackgroundWithPrompt/(\d+-\d+)\.jpg\?.* url 302 http://statica.xuantu.pro/x/prod/ReplaceBackgroundWithPrompt/$1.jpg

[mitm]
hostname = xuantu.pro, statica.xuantu.pro
