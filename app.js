let tankerAmount = document.querySelector('#tanker-amount');
let numberOfPeople = document.querySelector('#number-of-people');
let button = document.querySelector('button');

numberOfPeople.addEventListener('keyup', generatePeople);

function generatePeople(e) {
    console.log(e.target.value);
    e.preventDefault();
}

for (let i = 0; i < parseInt(numberOfPeople.value); i++) { }

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


button.addEventListener('click', (e) => {
    let nvmDiff = document.querySelector('#NvM-diff').innerHTML = Math.round(nvmFinal.value) - Math.round(nvmInitial.value);
    let SuhanaDiff = document.querySelector('#Suhana-diff').innerHTML = Math.round(SuhanaFinal.value) - Math.round(SuhanaInitial.value);
    let AlhponseDiff = document.querySelector('#Alphonse-diff').innerHTML = Math.round(AlhponseFinal.value) - Math.round(AlhponseInitial.value);
    let NagamaniDiff = document.querySelector('#Nagamani-diff').innerHTML = Math.round(NagamaniFinal.value) - Math.round(NagamaniInitial.value);
    let JkDiff = document.querySelector('#Jk-diff').innerHTML = Math.round(JkFinal.value) - Math.round(JkInitial.value);
    let VictorDiff = document.querySelector('#Victor-diff').innerHTML = Math.round(VictorFinal.value) - Math.round(VictorInitial.value);
    let RameshDiff = document.querySelector('#Ramesh-diff').innerHTML = Math.round(RameshFinal.value) - Math.round(RameshInitial.value);
    let KidsDiff = document.querySelector('#Kids-diff').innerHTML = Math.round(KidsFinal.value) - Math.round(KidsInitial.value);
    let totalReading = parseInt(nvmDiff) +
        parseInt(SuhanaDiff) +
        parseInt(AlhponseDiff) +
        parseInt(NagamaniDiff) +
        parseInt(JkDiff) +
        parseInt(VictorDiff) +
        parseInt(RameshDiff) +
        parseInt(KidsDiff);
    let perReadingUnit = parseInt(tankerAmount.value) / parseInt(totalReading);
    console.log(perReadingUnit);
    let nvm = nvmDiff * perReadingUnit,
        suhana = SuhanaDiff * perReadingUnit,
        alphonse = AlhponseDiff * perReadingUnit,
        nagamani = NagamaniDiff * perReadingUnit,
        jk = JkDiff * perReadingUnit,
        victor = VictorDiff * perReadingUnit,
        ramesh = RameshDiff * perReadingUnit,
        kids = KidsDiff * perReadingUnit;

    document.querySelector('#NvM-diff').innerHTML = nvm
    document.querySelector('#Suhana-diff').innerHTML = suhana
    document.querySelector('#Alphonse-diff').innerHTML = alphonse
    document.querySelector('#Nagamani-diff').innerHTML = nagamani
    document.querySelector('#Jk-diff').innerHTML = jk
    document.querySelector('#Victor-diff').innerHTML = victor
    document.querySelector('#Ramesh-diff').innerHTML = ramesh
    document.querySelector('#Kids-diff').innerHTML = kids



    console.log(tankerAmount, numberOfPeople, nvm, suhana, alphonse, nagamani, jk, victor, ramesh, kids)
    e.preventDefault();
})