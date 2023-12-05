let enots: number[] = [];

function getRandomColor(): string {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function CheckEnot(n: number): void {
    console.log(enots);
}

for (let i = 0; i < 9; i++){
    enots.push(0);
}
enots[Math.round(Math.random() * 8)] = 1;

let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.ya_budu_delat_eto_dz_chtoby_ne_podvodit_nikogo_u_menya_I_tak_svobodnoe_poseschenie div');
for (let i = 0, max = divs.length; i < max; i++) {
    divs[i].style.background = getRandomColor();
    divs[i].addEventListener("click", function() {
        if (enots[parseInt(divs[i].getAttribute('data-id')!)] == 0) {
            divs[i].className = 'de';
            let dobr_enots = document.querySelectorAll('.de');
            if (dobr_enots.length == 8) {
                (document.getElementsByClassName('you_win')[0] as HTMLElement).style.display = 'block';
            }
        } else {
            divs[i].className = 'ze';
            let dobr_enots = document.querySelectorAll('.de');
            for (let bz = 0, max = dobr_enots.length; bz < max; bz++) {
                (dobr_enots[bz] as HTMLElement).className = 'not_de';
            }
            (document.getElementsByClassName('you_lose')[0] as HTMLElement).style.display = 'block';
        }
    });
}
