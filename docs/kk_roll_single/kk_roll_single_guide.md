# 使用教程

## 前期准备

### 系统分辨率设置
脚本仅支持**16:9**或**16:10**分辨率上运行。

请查看系统分辨率是否符合上述要求，在桌面上点击**右键**，选择**显示设置**

<img src="/images/显示设置2.png" alt="Pulpit rock" width="300" height="228">

查看显示器分辨率

<img src="/images/查看显示器分辨率.png" alt="Pulpit rock" width="600" height="228">

比如此处为2560x1440，符合16:9的要求，不需要修改。

假设此处为1920x1440，则不符合要求，需要您更改为1920x1080或者1920x1200以符合要求。

### 游戏画面设置

进入游戏后，点击右上角“设置”，进入“视频”，调整以下三个选项

<img src="/images/游戏画面设置.png" alt="Pulpit rock" width="600" height="228">

### 游戏配装页面设置
来到游戏主页面，选择一个地图，使得画面右下角出现**配装**和**出发**字样。

<img src="/images/kk_rolling_single/主页面地图选择.png" alt="Pulpit rock" width="600" height="228">
点击配装进入配装页面，点击“L”键进入配装方案界面。

<img src="/images/kk_rolling_single/配装页面.png" alt="Pulpit rock" width="600" height="228">
<img src="/images/kk_rolling_single/配装方案页面.png" alt="Pulpit rock" width="600" height="228">
这里需要配置至少两个配装方案，软件会自动点击这两个配装方案来进行价格的刷新

<img src="/images/kk_rolling_single/配装方案1.png" alt="Pulpit rock" width="600" height="228">
重要：如果在两个配装方案都配置相同的子弹，请确保两个方案的子弹数量不相同（相差半组即可），这会让两个方案的价格不同，用于确保价格识别的时机正确。

<img src="/images/kk_rolling_single/配装方案2.png" alt="Pulpit rock" width="600" height="228">
<img src="/images/kk_rolling_single/配装方案3.png" alt="Pulpit rock" width="600" height="228">

## 打开软件

双击脚本软件“框框的滚仓机.exe”运行软件，输入购买的激活码即可激活

<img src="/images/kk_rolling_single/卡券激活.png" alt="Pulpit rock" width="400" height="228">

## 首页

日志等信息位于首页，用于显示软件运行过程中检测到的价格等信息，如果程序运行出现问题，请在这里查看报错内容。

<img src="/images/kk_rolling_single/首页.png" alt="Pulpit rock" width="600" height="228">

## 策略设置页

此页面用于设置软件的点击和识别策略的参数

<img src="/images/kk_rolling_single/策略选择页.png" alt="Pulpit rock" width="600" height="228">

<!-- ::: info 选择操作策略
这里选择策略，目前只有一个，可以忽略，日后更新可能加入更多策略
<img src="/images/kk_rolling_single/选择操作策略.png" alt="Pulpit rock" width="400" height="228">
::: -->

::: info 策略A专用设置
<img src="/images/kk_rolling_single/策略A专用设置.png" alt="Pulpit rock" width="400" height="228">
此处用来选择点击的配装方案，并设置购买价格，设置的规则如下：

1、配装方案至少勾选两个，用于来回点击。

2、购买价格是一个范围，我们需要设置一个最低价和一个最高价，当价格位于这两者之间时才会点击购买。

3、最低价和最高价的值必须位数相同。
:::

## 设置页
<img src="/images/kk_rolling_single/设置页.png" alt="Pulpit rock" width="600" height="228">

::: info 刷新设置
<img src="/images/kk_rolling_single/刷新设置.png" alt="Pulpit rock" width="400" height="228">
修改鼠标点击速度，一般保持默认即可
:::

::: info 其他
<img src="/images/kk_rolling_single/其他设置.png" alt="Pulpit rock" width="400" height="228">
点击后会自动打开软件的详细日志文件，如果你在使用中发现诸如识别错误、点击位置错误等bug，在反馈bug时，请发送日志文件给我，方便我进行排查。如果你反馈bug时，仅仅说“软件没法用”或者”软件很卡“这样的话，这种反馈是不好的，我无法帮你解决，也不会进行回复，感谢配合。
:::

## 启动脚本

按照以上设置全部设置好之后，回到游戏的配装方案界面，按下F12即可运行脚本
<img src="/images/kk_rolling_single/启动脚本.png" alt="Pulpit rock" width="600" height="228">