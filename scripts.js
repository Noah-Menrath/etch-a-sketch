const body = document.querySelector('body');

for (i=0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    body.append(div);
}