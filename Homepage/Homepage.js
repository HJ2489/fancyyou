let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  stars.style.left = value * 0.25 + 'px'
  moon.style.top = value * 1.05 + 'px'
  mountains_behind.style.top = value * 0.5 + 'px'
  mountains_front.style.top = value * 0 + 'px'
  text.style.marginRight = value * 3.5 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  btn.style.marginTop = value * 1.5 + 'px'
  header.style.top = value * 0.5 + 'px'
})

// JavaScript 代码
function smoothScroll(targetY, duration) {
  // 获取当前滚动位置
  const startY = window.scrollY;
  // 计算滚动的距离
  const distance = targetY - startY;
  // 获取开始时间
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    // 计算时间进度
    const timeElapsed = currentTime - startTime;
    const progress = timeElapsed / duration;

    // 使用缓动函数（这里使用简单的线性缓动函数）
    const easeInOutCubic = progress => progress < 0.5 ? 4 * progress ** 3 : 1 - ((-2 * progress + 2) ** 3) / 2;
    const ease = easeInOutCubic(progress);

    // 计算当前滚动位置
    const scrollTo = startY + distance * ease;

    // 执行滚动
    window.scrollTo(0, scrollTo);

    // 继续滚动直到达到目标位置
    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  // 启动滚动动画
  requestAnimationFrame(scrollAnimation);
}

// 在页面加载完成后调用 smoothScroll 函数
window.onload = function () {
  // 触发滚动事件，滚动到页面底部
  smoothScroll(document.body.scrollHeight, 6000); // 第二个参数是滚动的持续时间（毫秒）
};
