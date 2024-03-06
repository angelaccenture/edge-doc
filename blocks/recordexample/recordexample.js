export default function decorate(block) {
    const main = document.createElement('div');
    [...block.children].forEach((row) => {
      const innerdiv = document.createElement('div');
      innerdiv.className="class";
       while (row.firstElementChild) div.append(row.firstElementChild);
      [...div.children].forEach((div) => {
        div.className="newclass";
     });
      main.append(div);
    });
    block.append(main);
  }
