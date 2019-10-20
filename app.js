let tankerAmount = document.querySelector('#tanker-amount');
let numberOfPeople = document.querySelector('#number-of-people');
let submitButton = document.querySelector('#calculate');
let changeButton = document.querySelector('#change');
let perReading = document.querySelector('#per-reading');

// numberOfPeople.addEventListener('keyup', generatePeople);

// function generatePeople(e) {
//     console.log(e.target.value);
//     e.preventDefault();
// }

window.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    // Get initial readings and final readings and udpate them in the input fields
    if (localStorage.getItem('initialValue') && localStorage.getItem('finalValue')) {
        let initialValue = JSON.parse(localStorage.getItem('initialValue'));
        let finalValue = JSON.parse(localStorage.getItem('finalValue'));

        nvmInitial.value = initialValue[0];
        SuhanaInitial.value = initialValue[1];
        AlhponseInitial.value = initialValue[2];
        NagamaniInitial.value = initialValue[3];
        JkInitial.value = initialValue[4];
        VictorInitial.value = initialValue[5];
        RameshInitial.value = initialValue[6];
        KidsInitial.value = initialValue[7];

        nvmFinal.value = finalValue[0];
        SuhanaFinal.value = finalValue[1];
        AlhponseFinal.value = finalValue[2];
        NagamaniFinal.value = finalValue[3];
        JkFinal.value = finalValue[4];
        VictorFinal.value = finalValue[5];
        RameshFinal.value = finalValue[6];
        KidsFinal.value = finalValue[7];
    }
}

// for (let i = 0; i < parseInt(numberOfPeople.value); i++) { }

let nvmInitial = document.querySelector('#NvM-reading-initial');
let nvmFinal = document.querySelector('#NvM-reading-final');
let SuhanaInitial = document.querySelector('#Suhana-reading-initial');
let SuhanaFinal = document.querySelector('#Suhana-reading-final');
let AlhponseInitial = document.querySelector('#Alphonse-reading-initial');
let AlhponseFinal = document.querySelector('#Alphonse-reading-final');
let NagamaniInitial = document.querySelector('#Nagamani-reading-initial');
let NagamaniFinal = document.querySelector('#Nagamani-reading-final');
let JkInitial = document.querySelector('#Jk-reading-initial');
let JkFinal = document.querySelector('#Jk-reading-final');
let VictorInitial = document.querySelector('#Victor-reading-initial');
let VictorFinal = document.querySelector('#Victor-reading-final');
let RameshInitial = document.querySelector('#Ramesh-reading-initial');
let RameshFinal = document.querySelector('#Ramesh-reading-final');
let KidsInitial = document.querySelector('#Kids-reading-initial');
let KidsFinal = document.querySelector('#Kids-reading-final');


submitButton.addEventListener('click', (e) => {
    let nvmDiff = nvmFinal.value - nvmInitial.value;
    let SuhanaDiff = SuhanaFinal.value - SuhanaInitial.value;
    let AlhponseDiff = AlhponseFinal.value - AlhponseInitial.value;
    let NagamaniDiff = NagamaniFinal.value - NagamaniInitial.value;
    let JkDiff = JkFinal.value - JkInitial.value;
    let VictorDiff = VictorFinal.value - VictorInitial.value;
    let RameshDiff = RameshFinal.value - RameshInitial.value;
    let KidsDiff = KidsFinal.value - KidsInitial.value;

    // To udpate values in the local storage
    let initialValue = [nvmInitial.value, SuhanaInitial.value, AlhponseInitial.value, NagamaniInitial.value, JkInitial.value, VictorInitial.value, RameshInitial.value, KidsInitial.value];
    let finalValue = [nvmFinal.value, SuhanaFinal.value, AlhponseFinal.value, NagamaniFinal.value, JkFinal.value, VictorFinal.value, RameshFinal.value, KidsFinal.value];

    localStorage.setItem('initialValue', JSON.stringify(initialValue));
    localStorage.setItem('finalValue', JSON.stringify(finalValue));

    let totalReading = parseInt(nvmDiff) +
        parseInt(SuhanaDiff) +
        parseInt(AlhponseDiff) +
        parseInt(NagamaniDiff) +
        parseInt(JkDiff) +
        parseInt(VictorDiff) +
        parseInt(RameshDiff) +
        parseInt(KidsDiff);

    let perReadingUnit = parseInt(tankerAmount.value) / parseInt(totalReading);

    let nvm = Math.round(nvmDiff * perReadingUnit),
        suhana = Math.round(SuhanaDiff * perReadingUnit),
        alphonse = Math.round(AlhponseDiff * perReadingUnit),
        nagamani = Math.round(NagamaniDiff * perReadingUnit),
        jk = Math.round(JkDiff * perReadingUnit),
        victor = Math.round(VictorDiff * perReadingUnit),
        ramesh = Math.round(RameshDiff * perReadingUnit),
        kids = Math.round(KidsDiff * perReadingUnit);

    document.querySelector('#NvM-diff').innerHTML = `<b>Rs. ${nvm}</b> <br/> Units Consumed: ${nvmDiff}`;
    document.querySelector('#Suhana-diff').innerHTML = `<b>Rs. ${suhana}</b> <br/> Units Consumed: ${SuhanaDiff}`;
    document.querySelector('#Alphonse-diff').innerHTML = `<b>Rs. ${alphonse}</b> <br/> Units Consumed: ${AlhponseDiff}`;
    document.querySelector('#Nagamani-diff').innerHTML = `<b>Rs. ${nagamani}</b> <br/> Units Consumed: ${NagamaniDiff}`;
    document.querySelector('#Jk-diff').innerHTML = `<b>Rs. ${jk}</b> <br/> Units Consumed: ${JkDiff}`;
    document.querySelector('#Victor-diff').innerHTML = `<b>Rs. ${victor}</b> <br/> Units Consumed: ${VictorDiff}`;
    document.querySelector('#Ramesh-diff').innerHTML = `<b>Rs. ${ramesh}</b> <br/> Units Consumed: ${RameshDiff}`;
    document.querySelector('#Kids-diff').innerHTML = `<b>Rs. ${kids}</b> <br/> Units Consumed: ${KidsDiff}`;

    e.preventDefault();
})

changeButton.addEventListener('click', (e) => {
    nvmInitial.value = nvmFinal.value;
    SuhanaInitial.value = SuhanaFinal.value;
    AlhponseInitial.value = AlhponseFinal.value;
    NagamaniInitial.value = NagamaniFinal.value;
    JkInitial.value = JkFinal.value;
    VictorInitial.value = VictorFinal.value;
    RameshInitial.value = RameshFinal.value;
    KidsInitial.value = KidsFinal.value;

    nvmFinal.value = '';
    SuhanaFinal.value = '';
    AlhponseFinal.value = '';
    NagamaniFinal.value = '';
    JkFinal.value = '';
    VictorFinal.value = '';
    RameshFinal.value = '';
    KidsFinal.value = '';
    e.preventDefault();
})