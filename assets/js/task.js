function calculate(x) {
    var remain = parseFloat(document.getElementById('totalSpan'+x).innerHTML);
    var yes = 0;
    var no = 0;
    var other = 0;
    let rows = document.getElementById('optionTable'+x).rows;
    for (var i = 1; i < rows.length; i++) {
        if (rows[i].cells[3].children[0].checked) {
            yes = yes +1;
            remain = remain -1;
        } else if (rows[i].cells[4].children[0].checked) {
            no = no +1;
            remain = remain -1;
        }else if (rows[i].cells[5].children[0].checked) {
            other = other +1;
            remain = remain -1;
        }else if (rows[i].cells[6].children[0].checked) {
            other = other +1;
            remain = remain -1;
        } else {
            console.log('0');
        }
    }
    document.getElementById('remainSpan'+x).innerHTML = remain;
    document.getElementById('yesSpan'+x).innerHTML= yes;
    document.getElementById('noSpan'+x).innerHTML= no;
    document.getElementById('otherSpan'+x).innerHTML= other;
}
