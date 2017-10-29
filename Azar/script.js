function dado(caras = 0, veces = 1) {

    if (/^[0-9]+$/.test(caras)) {

        if (veces == 1) {
            return Math.ceil(Math.random() * caras);
        } else {
            let arr = [];
            for (let i = 0; i < veces; i++) {
                arr[i] = Math.ceil(Math.random() * caras);
            }
            return arr;
        }

    }

}
