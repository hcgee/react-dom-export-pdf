[html2canvans](https://html2canvas.hertzen.com/)
| Name                   | Default                 | Description               |
| ---------------------- | ----------------------  | ----------------------    |
| allowTaint             | false                   | 是否允许跨原点图像污染画布 |
| backgroundColor        | #ffffff                 | 画布背景色，如果在DOM中没有指定。为透明设置null |
| canvas                 | null                    | 可用作绘图基础的现有画布元素 |
| foreignObjectRendering | false                   | 如果浏览器支持，是否使用ForeignObject渲染 |
| imageTimeout	         | 15000	               | 加载图像的超时时间(单位:毫秒)。设置为0表示禁用超时 |
| ignoreElements	     | (element) => false      | 从呈现中移除匹配元素的断言函数 |
| logging	             | true	                   | 为调试目的启用日志记录 |
| onclone	             | null                    | 回调函数，该函数在文档被克隆以呈现时被调用，可用于修改将呈现的内容，而不影响原始源文档 |
| proxy	                 | null	                   | Url到用于加载跨源图像的代理。如果为空，则不会加载跨原点图像 |
| removeContainer        | true                    | 是否暂时清除html2canvas创建的克隆DOM元素 |
| scale                  | window.devicePixelRatio | 用于渲染的比例。默认为浏览器设备像素比 |
| useCORS                | false                   | 是否尝试使用CORS从服务器加载images |
| width                  | Element width           | 画布的宽度 |
| height                 | Element height	       | 画布的高度 |
| x                      | Element x-offset        | Crop canvas x-coordinate |
| y                      | Element y-offset        | Crop canvas y-coordinate |
| scrollX                | Element scrollX         | 渲染元素时使用的x轴滚动位置(例如，如果element使用position: fixed) |
| scrollY                | Element scrollY         | 渲染元素时使用的y轴滚动位置(例如，如果element使用position: fixed) |
| windowWidth            | Window.innerWidth	   | 渲染Element时使用的窗口宽度，这可能会影响媒体查询等内容 |
| windowHeight           | Window.innerHeight      | 渲染Element时使用的窗口高度，这可能会影响媒体查询等内容 |