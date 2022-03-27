const body = document.querySelector('body');

const div = document.createElement('div');
const container = document.createElement('div');

container.setAttribute('id', 'container');

body.append(container);
for (i=0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.append(div);
}