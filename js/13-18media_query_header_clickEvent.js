//**밑에 function 영역을 GPT로 가져온 코트이다. 올래 코드는 13-16에 있다. */
(function(){
  const spanEl = document.querySelector("main h2 span");
  const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
  let index = 0;
  let currentTxt = txtArr[index].split("");
  let isDeleting = false;
  let animationRunning = true;

  function writeTxt() {
    spanEl.textContent += currentTxt.shift();

    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }

  function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");

    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
      index = (index + 1) % txtArr.length;

      if (index === txtArr.length - 1) {
        animationRunning = false;
      }

      if (txtArr[index] !== 'Back-End Developer') {
        currentTxt = txtArr[index].split("");
        setTimeout(writeTxt, 0);
      }
    }
  }

  writeTxt();
})();

//**수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
(function(){
  const headerEl = document.querySelector("header");
  window.addEventListener("scroll", function(){
  requestAnimationFrame(scrollCheck);
});

  function scrollCheck(){
  //**browserScrollY는 window객체scrollY를 참조하거나 (아니면)? <<scrollY가 없는 browser도 있을 수 있다>> 그래서 scrollY값을 지원하면 window.scrollY를 참조하고 (지원하지 않으면): pageYOffset을 참조해라.*/
    const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  //**만약에 browserScrollY는 0보다 크면 스크롤이 발생하는 것이잖아요 그러면 */
    if(browserScrollY>0){
      headerEl.classList.add('active');
    }else{
      headerEl.classList.remove('active');
    }
    console.log(scroll);
  } 
})();

//**애니메이션 스크롤 */
(function(){
  const animationMove = function(selector){
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior:'smooth'});
  }
  
  const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
  console.log(scrollMoveEl);
  for(let i=0; i<scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click", function(e){
      animationMove(this.dataset.target);
    });
  }
})();


