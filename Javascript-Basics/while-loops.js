var names = ['frodo', 'sam', 'merry', 'pippin'];

var i = 0;
while (i< names.length) {
    console.log(names[i]);
    i++;
}

// if you remove the increment operator, it would print frodo ad infinitum

var i = 0;

do {
    console.log(names[i]);
    i++;
} while (i < 0);
