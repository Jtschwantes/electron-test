document.querySelector('#body').addEventListener('click', (event) => {
  console.log("X", event.clientX, "Y", event.clientY);
  let ele = document.createElement('div');
  ele.style.top = `${event.clientY - 25}px`;
  ele.style.left = `${event.clientX - 25}px`;
  document.querySelector('#body').appendChild(ele);
});