;(function(win,doc){
    // html element 获取根节点
    const docEle = doc.documentElement,
      // phone orientation or window resise  手机旋屏还是window的窗口事件
      resetEvent = 'orientationchange' in window ? 'orientationchange' :'resize',
      // reset callback   事件回调
      resetRem = function(){
        // client width  客户端宽度
        const clientWidth = docEle.clientWidth || win.innerWidth;
        // check if the browser has client width  检查客户端宽度
        if(!clientWidth){
          throw new Error('clientWidth is not defined');
        }
        // set html font size  设置根节点字体大小(750是设计图的宽度，乘以100是为了方便计算)
        docEle.style.fontSize = clientWidth / 750 * 100 + 'px';
        // reset body fontSize  重置body字体大小
        doc.body.style.fontSize = '0.125rem';
      }
      // when page size change callback
      win.addEventListener(resetEvent,resetRem,false);
      // domcontentloaded callback
      win.addEventListener('DOMContentLoaded',resetRem,false);

})(window, window.document)
