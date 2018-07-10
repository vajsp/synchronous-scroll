滑动同步demo
========
        两个屏幕同步操作  
        通过socket和better-scroll实现  
运行
-------
        `npm start`分别启动my-server、client1、client2

注意
-------
        需要修改client1中`better-scroll`源码bscroll.esm.js大概1416行添加一个自定义事件_scroll。
 ```
    BScroll.prototype._translate = function (x, y, scale) {
        this.trigger('_scroll', {
            x: x,
            y: y
        });
        <!-- 省略 -->
    }
```