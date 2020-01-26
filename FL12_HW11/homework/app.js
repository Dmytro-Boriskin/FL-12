const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

(function create() {
  let str = `
  <ul id="tree">
  <li>Films
  <ul>
    <li>Iron Man.avi
      <ul>
        <li>Fanatsy
          <ul>
           <li>The Lord of the rings</li>
           <span>Empty Forlder<span>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</li>
  <li>Documents 
      <ul><li>EPAM Homework answers</li>
           <span>Folder is empty</span>
      </ul>
  </li>
 </ul>
`;
  let div = document.createElement('div');
  div.innerHTML = str;
  document.body.appendChild(div);
})()

let tree = document.getElementById('tree');

for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function (event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
}



