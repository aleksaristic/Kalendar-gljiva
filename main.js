function resetKalendara(){
    document.getElementById('title').innerText='';
    document.getElementById('dani').innerHTML='';
}

function popuniKalendar(godina, mjesec, danasnjiDatum){
    resetKalendara();
    
    let year = document.querySelector("#year");
    let month = document.querySelector("#month");
    let day = document.querySelector("#day");

    if(year.value != ''){
        godina = year.value;
    }

    if(month.value != ''){
        mjesec = month.value;
    }

    if(day.value != ''){
        danasnjiDatum = day.value;
    }
    let imenaMjeseci = ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Nobembar',
                        'Decembar'];

    let imeMjeseca = imenaMjeseci[mjesec-1];

    let t = imeMjeseca + ' ' + godina;

    document.getElementById('title').innerText = t;


    let prvi = new Date(godina, mjesec-1, 1);
    let zadnji = new Date(godina, mjesec, 0);

    let dUNP = prvi.getDay();
    if(dUNP == 0){
        dUNP = 7;
    }

    let dUNZ = zadnji.getDay();
    if(dUNZ == 0){
        dUNZ = 7;
    }

    let brojDana = zadnji.getDate();

    let dani = [];
    let pocetniPrazniDani = 0;

    for(let i=1; i<dUNP; i++){
        dani.push('');
        pocetniPrazniDani = pocetniPrazniDani + 1;
    }

    for(let dan = 1; dan <= brojDana; dan++){
        dani.push(dan);
    }

    for(let i = dUNZ; i<7; i++){
        dani.push('');
    }

    let nedelje = [];

    while(dani.length > 0){
        let narednaNedelja = dani.splice(0,7);

        nedelje.push(narednaNedelja);
    }


    popuniBodyKalendara(nedelje, pocetniPrazniDani, danasnjiDatum);

}

function popuniBodyKalendara(nedelje, pocetniPrazniDani, danasnjiDatum){
    let i = 1;
    for(let nedelja of nedelje){
        let red = document.createElement('tr');

        for(let dan of nedelja){
            let polje = document.createElement('td');
            polje.innerText = dan;
            if((i - pocetniPrazniDani) == danasnjiDatum){
                polje.style.backgroundColor = 'red';
            }
            red.appendChild(polje);
            i = i + 1;
        }

        document.getElementById('dani').appendChild(red);
    }
}

function resetListeGljiva(){
    document.getElementById('info-section').innerHTML='';
}

function ubaciGljive(danas){
    resetListeGljiva();
    let month = document.querySelector("#month");
    if(month.value != ''){
        danas = Number(month.value);
    }

    let spisakGljivaJanuar = [`<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Kasna Puzevica', 'Hygrophorus hypothejus', 'Da', 
    `<img src="../../Mushrooms/img/crvenaGljiva1.jpg">`,'Zimska Panjevcica', 'Flammulina velutipes', 'Da',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Sii Take', 'Lentinula edodes', 'Da',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Nazubljena Panjevaca', 'Lentinus adhaerens', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Dvolisnica', 'Schizophyllum commune', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Bukovaca', 'Pleurotus ostreatus', 'Da',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Borova Guba', 'Fomitopsis pinicola', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Crvena Guba', 'Pycnoporus cinnabarinus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Curanov Rep', 'Trametes versicolor', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Drvarica', 'Xylaria hypoxylon', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Crveni Pehar', 'Sarcoscypha coccinea', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Zlatnozuta Zelatinka', 'Tremella mesenterica', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice1.jpg">`,'Judino Uvo', 'Auricalaria auricula-judae', 'Da'];

    let spisakGljivaFebruar = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaMart = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaApril = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaMaj = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaJun = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaJul = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaAvgust = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaSeptembar = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaOktobar = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaNovembar = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let spisakGljivaDecembar = [`<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne',
    `<img src="../../Mushrooms/img/panjevcice.jpg">`,'Panjevcice', 'Nedimus tranhitus', 'Ne'];

    let element = document.createElement('tr');
    let slika = document.createElement('td');
    let naziv = document.createElement('td');
    let latNaziv = document.createElement('td');
    let jestivost = document.createElement('td');
    let poljeDugme = document.createElement('td');
    let link = document.createElement('a');
    link.innerText = 'Vise informacija';
    poljeDugme.appendChild(link);
    let body = document.getElementById('info-section');

    switch(danas){
        case 1:

            for(let i = 0; i<spisakGljivaJanuar.length; i++){
                slika.innerHTML = spisakGljivaJanuar[i];
                element.appendChild(slika);
                i++;

                naziv.innerText = spisakGljivaJanuar[i];
                element.appendChild(naziv);
                i++;

                latNaziv.innerText = spisakGljivaJanuar[i];
                element.appendChild(latNaziv);
                i++;

                jestivost.innerText = spisakGljivaJanuar[i];
                element.appendChild(jestivost);

                poljeDugme = document.createElement('td');
                link = document.createElement('a');
                link.innerText = 'Vise informacija';
                poljeDugme.appendChild(link);
                element.appendChild(poljeDugme);
                body.appendChild(element);
                
                element = document.createElement('tr');
                slika = document.createElement('td');
                naziv = document.createElement('td');
                latNaziv = document.createElement('td');
                jestivost = document.createElement('td');

            }
            break;

        case 2:
            slika.innerHTML = `<img src="../../Mushrooms/img/panjevcice.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Panjevcice';
            element.appendChild(naziv);

            latNaziv.innerText = 'Nedimus tranhitus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Ne';
            element.appendChild(jestivost);
            element.appendChild(poljeDugme);

            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');

            slika.innerHTML = `<img src="../../Mushrooms/img/martovke.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Martovka';
            element.appendChild(naziv);

            latNaziv.innerText = 'Marthus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);
            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);

            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/alga.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Zuta capica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Capicus tratis';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);
            
            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 3:
            slika.innerHTML = `<img src="../../Mushrooms/img/martovke.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Martovka';
            element.appendChild(naziv);

            latNaziv.innerText = 'Marthus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/alga.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Zuta capica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Capicus tratis';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 4:
            slika.innerHTML = `<img src="../../Mushrooms/img/puhara.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Tikvasta puhara';
            element.appendChild(naziv);

            latNaziv.innerText = 'Puhus stratus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 5:
            slika.innerHTML = `<img src="../../Mushrooms/img/puhara.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Tikvasta puhara';
            element.appendChild(naziv);

            latNaziv.innerText = 'Puhus stratus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);
            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/dedek.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Grabov djed';
            element.appendChild(naziv);

            latNaziv.innerText = 'Grabusimus boletus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 5: 
            slika.innerHTML = `<img src="../../Mushrooms/img/suncanica2.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Suncanica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Amanita lesus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);
            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/dedek.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Grabov djed';
            element.appendChild(naziv);

            latNaziv.innerText = 'Grabusimus boletus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 6:
            slika.innerHTML = `<img src="../../Mushrooms/img/suncanica2.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Suncanica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Amanita lesus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 7:
            slika.innerHTML = `<img src="../../Mushrooms/img/suncanica2.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Suncanica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Amanita lesus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;
        
        case 8:
            slika.innerHTML = `<img src="../../Mushrooms/img/suncanica2.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Suncanica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Amanita lesus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/dedek.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Grabov djed';
            element.appendChild(naziv);

            latNaziv.innerText = 'Grabusimus boletus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/puhara.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Tikvasta puhara';
            element.appendChild(naziv);

            latNaziv.innerText = 'Puhus stratus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 9:
            slika.innerHTML = `<img src="../../Mushrooms/img/suncanica2.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Suncanica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Amanita lesus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/dedek.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Grabov djed';
            element.appendChild(naziv);

            latNaziv.innerText = 'Grabusimus boletus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/puhara.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Tikvasta puhara';
            element.appendChild(naziv);

            latNaziv.innerText = 'Puhus stratus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 10:

            slika.innerHTML = `<img src="../../Mushrooms/img/suncanica2.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Suncanica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Amanita lesus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/dedek.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Grabov djed';
            element.appendChild(naziv);

            latNaziv.innerText = 'Grabusimus boletus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/puhara.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Tikvasta puhara';
            element.appendChild(naziv);

            latNaziv.innerText = 'Puhus stratus';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Da';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);

            element = document.createElement('tr');
            slika = document.createElement('td');
            naziv = document.createElement('td');
            latNaziv = document.createElement('td');
            jestivost = document.createElement('td');
            slika.innerHTML = `<img src="../../Mushrooms/img/alga.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Zuta capica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Capicus tratis';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            poljeDugme = document.createElement('td');
            link = document.createElement('a');
            link.innerText = 'Vise informacija';
            poljeDugme.appendChild(link);
            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 11:
            slika.innerHTML = `<img src="../../Mushrooms/img/alga.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Zuta capica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Capicus tratis';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;

        case 12:
            slika.innerHTML = `<img src="../../Mushrooms/img/alga.jpg">`;
            element.appendChild(slika);

            naziv.innerText = 'Zuta capica';
            element.appendChild(naziv);

            latNaziv.innerText = 'Capicus tratis';
            element.appendChild(latNaziv);

            jestivost.innerText = 'Uslovno';
            element.appendChild(jestivost);

            element.appendChild(poljeDugme);
            body.appendChild(element);
            break;
        default:
            resetListeGljiva();
    }
}

function main(){
    let danas = new Date();
    popuniKalendar(danas.getFullYear(), danas.getMonth() + 1, danas.getDate());
    ubaciGljive(danas.getMonth() + 1);
}

function promjeniTabelu(){

    let danas = new Date();
    let year = document.querySelector("#year");
    let month = document.querySelector("#month");
    let day = document.querySelector("#day");

    year.addEventListener('change', popuniKalendar(danas.getFullYear(), danas.getMonth() + 1, danas.getDate()));
    month.addEventListener('change', popuniKalendar(danas.getFullYear(), danas.getMonth() + 1, danas.getDate()), ubaciGljive(danas.getMonth() + 1));
    day.addEventListener('change', popuniKalendar(danas.getFullYear(), danas.getMonth() + 1, danas.getDate()));
    
    body1 = document.getElementById('info-section');
    redovi1 = body1.getElementsByTagName('tr');
}

let body1 = document.getElementById('info-section');
let redovi1 = body1.getElementsByTagName('tr');

function filterLista(){

    let unos = document.getElementById('search').value;
    unos = unos.toLowerCase();

    let redovi = redovi1;

    let i = 0;
    let niz = [];
    for(let red of redovi){
        let interesnoPolje = red.getElementsByTagName('td')[1].innerText;
        interesnoPolje = interesnoPolje.toLowerCase();

        if(!interesnoPolje.startsWith(unos)){
            niz[i] = 1;
            i++;
        }else{
            niz[i] = 0;
            i++;
        }
    }

    for(let j=0; j<niz.length; j++){
        if(niz[j] == 1){
            redovi[j].style.display = 'none';
        }else{
            redovi[j].style.display = '';
        }
    }

}

window.addEventListener('load', main());
