const print = (output) => {
  let body = document.querySelector('body'),
      line = document.createElement('h3'),
      txt  = document.createElement('p');
  line.innerHTML = '=>';
  txt.innerHTML = output;
  body.appendChild(line);
  body.appendChild(txt);
}
