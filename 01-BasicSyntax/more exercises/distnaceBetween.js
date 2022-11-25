function distnaceBetween(x1, y1, x2, y2) {
    let q1 = Math.pow((x2 - x1), 2);
    let q2 = Math.pow((y2 - y1), 2);
    let distance = Math.sqrt((q1 + q2));
    console.log(distance);
}
distnaceBetween(2.34, 15.66, -13.55, -2.9985);