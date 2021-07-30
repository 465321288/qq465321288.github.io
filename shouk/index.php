<?php
/*
name:收款码三合一源码
作者:八哥QQ2380494437
QQ群:675644084
Url:http://6ska.cn
开发环境:WIN7+IIS7+PHP7



用法:
1.在这里 https://cli.im/deqr  上传你的收款码,识别收款码里的内容
2.然后将识别出来的内容填写至下方的参数中
3.将本套源码上传至你的服务器,并复制URL地址
    例如 http://www/***.com/index.php
	注意:此域名不能是被腾讯爆红的,否则会被拦截,无法跳转
	
4.将这个url拿去https://cli.im/  生成一个二维码,就是你的三合一收款码了
*/

//QQ收款码的内容
$QQcode='https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=465321288&ac=CAEQyPrw3QEYx7KPiAY%3D_xxx_sign&n=%E5%85%84%E5%BC%9F%E4%BA%9A%E5%85%8B%E5%8A%9B%E5%88%B6%E5%93%81&f=wallet';

//微信收款码的内容
$wechat='wxp://f2f00KII2aB5awTYIAgVSUNVv9yk-_XIJJSK';

//支付宝的收款内容
$alipay='https://qr.alipay.com/fkx15982wetkbikz3ng6h29';

//QQ号(用于显示头像)
$qq='713032623';
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
error_reporting(0);
include 'phpqrcode.php';
$ua=$_SERVER['HTTP_USER_AGENT'];
$errorCorrectionLevel = 'L';//容错级别 
$matrixPointSize = 6;//生成图片大小 
if(strpos($ua,'QQ/')!==FALSE){
	$form='QQ支付';
	$rgb='18,199,240';//蓝色背景
	QRcode::png($QQcode, false, $errorCorrectionLevel, $matrixPointSize,1); 
}else
if(strpos($ua,'MicroMessenger')!==FALSE){
	$form='微信支付';
	$rgb='50,205,50';//绿色背景
	QRcode::png($wechat, false, $errorCorrectionLevel, $matrixPointSize,1); 
}else
if(strpos($ua,'AlipayClient')!==FALSE){
	$form='支付宝支付';
	$rgb='0,178,238';//天蓝背景
	header("location:".$alipay);//支付宝直接跳转就行了
	QRcode::png($alipay, false, $errorCorrectionLevel, $matrixPointSize,1); 
}else{
	$form='请在手机端打开';//默认微信支付
	$rgb=rand(0,255).','.rand(0,255).','.rand(0,255);//默认随机验证
	QRcode::png($wechat, false, $errorCorrectionLevel, $matrixPointSize,1); 
}
$imgstr = 'data:png;base64,' .base64_encode(ob_get_contents());
ob_end_clean();
?>
<html><head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title><? echo $form;?></title>
<meta itemprop="name" content="5S三合一收款码">
<meta itemprop="image" content="https://gqrcode.alicdn.com/img?type=cs&shop_id=57226679&seller_id=195699748&w=140&h=140&el=q&v=1">
<meta name="description" itemprop="description" content="将支付宝.微信.QQ收款码集合到一起，打造最简洁的收款服务。">
<link href="./css/style.css" rel="stylesheet">
</head>
<body id="color" style="background-color: rgb(<?echo$rgb;?>);">
<div class="code-item" id="code-all" style="display: block; height: 574px;">
  <div id="ui-head" class="ui-panel ui-flex-pack-center ui-flex-align-center">
    <img class="ui-qlogo" id="qlogo" src="https://q2.qlogo.cn/headimg_dl?spec=100&amp;dst_uin=<?php echo $qq;?>">
    <div><h1>扫码支付</h1><h2 id="qnick"><? echo $form;?></h2></div>
  </div>
  <div class="ui-box ui-panel ui-flex-align-center">
    <div id="ui-content" class="ui-panel ui-flex-ver ui-flex-pack-center">
      <div class="ui-tips">手机<? echo $form;?></div>
      <br>
      <div class="ui-qrcode"><img id="page-url" src="<?php echo $imgstr; ?>"></div>
      <div class="ui-paytext"></div>
      <div id="ui-setps" class="ui-panel ui-flex-pack-center">
        <div>
          <div class="ui-circle">1</div>
          <i class="icon iconfont icon-changan"></i>
          <div class="ui-padtop10">长按二维码</div>
        </div>
        <div>
          <div class="ui-circle">2</div>
          <i class="icon iconfont icon-erweima"></i>
          <div class="ui-padtop10">扫描二维码</div>
        </div>
        <div>
          <div class="ui-circle">3</div>
          <i class="icon iconfont icon-icon-check-solid"></i>
          <div class="ui-padtop10">输入金额支付</div>
        </div>
      </div>
    </div>
  </div>
</div>
</body></html>