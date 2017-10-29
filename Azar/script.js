function dado(caras = 0, veces = 1) {

    if (/^[0-9]+$/.test(caras)) {


        let arr = [];
        let result = '<table><tr><th>Nº Tirada</th><th>Resultado</th></tr>'

        for (let i = 0; i < veces; i++) {
            arr[i] = Math.ceil(Math.random() * caras);

            result += `<tr><td>${i+1}</td><td>${Math.ceil(Math.random() * caras)}</td></tr>`;
        }
        result += "</table>"

        return result;
    }

}
