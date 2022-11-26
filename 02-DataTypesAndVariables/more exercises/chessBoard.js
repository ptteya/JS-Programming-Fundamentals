function chessBoard(size) {
    let color = '';
    let newColor = '';

    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {
        console.log(`  <div>`);
        color = row % 2 === 0 ? 'white' : 'black';

        for (let col = 1; col <= size; col++) {
            console.log(`    <span class="${color}"></span>`);
            newColor = color;
            color = newColor === 'black' ? 'white' : 'black';
        }
        console.log(`  </div>`);
    }
    console.log('</div>')
}
chessBoard(3);