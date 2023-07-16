const languagesList = [
    'Shqip',
    'English'
]

var currentLanguage = localStorage.getItem('language')
if(currentLanguage === null){
    currentLanguage = 'English'
    localStorage.setItem('language', currentLanguage)
}


function onLanguage(e){
    console.log(e)
    localStorage.setItem('language', e.target.innerHTML)
}


const languageButtons= Array.from(document.getElementsByClassName('languageButton'))
languageButtons.forEach(node => node.addEventListener('click', onLanguage))

const stringShqipLanguage = {
    'VSI--1': 'VSI nënkupton . Sistemi VSI është sistemi më i avancuar i injektimit të avullit në treg. Ai u zhvillua fillimisht nga Prins dhe tani është plotësisht rindërtuar për të përshtatur me motorët moderne të avancuar. Të gjithë komponentët që përdoren në sistemin VSI plotësojnë standardet më kërkesa dhe certifikimet më të larta.',
    'VSI--2': 'Sistemi VSI bazohet në parimin e shndërrimit të gazit të naftës së lëngshme (LPG) ose gazit natyror (CNG) në formë avulli para se të injektohet secilën në motor në mënyrë sekuencale. Ne gjithashtu ofrojmë zgjidhje për makinat me sistem të drejtpërdrejtë të injektimit të karburantit! ',
    'VSI--3': 'Komponentë të cilësisë së lartë',
    'VSI--4': 'Softuer diagnostik unik',
    'VSI--5': 'Performancë optimale',
    'VSI--6': 'Emetime të ulëta',
    'VSI--7': 'Nuk ka ndryshim të dukshëm krahasuar me përdorimin e automjetit tuaj me benzinë!',
    'VSI--8':  'Në vijim janë komponentët kryesorë që shtohen në makinën tuaj kur instalohet një konvertim LPG.',
    'VSI--9':  'Komponentët që përbëjnë sistemin tonë VSI LPG shfaqen më poshtë. Komponentët kryesorë përmbushin të njëjtat standarde si pjesët OEM dhe janë zhvilluar posaçërisht për sistemet LPG dhe CNG. Ata plotësojnë standardet më kërkesa dhe certifikimet më të larta.',
    'VSI--10': 'Tanku LPG',
    'VSI--11': 'NCU (Njësia Kontrolluese Elektronike)',
    'VSI--12': 'Ndërruesi ',
    'VSI--13': 'Avulluesi (eVP-500)',
    'VSI--14': 'Filtri',
    'VSI--15': 'Injektorët',
    'VSI--16': 'Injektim Sekuencial të Avullit',
    ///////////////////////////////////////////////////

    'VSI-DI--1': 'VSI nënkupton "Injektim Sekuencial të Avullit". Sistemi VSI-DI është një derivat i sistemit VSI dhe është zhvilluar veçanërisht për makinat me sistem të drejtpërdrejtë të injektimit të karburantit (motor DI).',
    'VSI-DI--2': 'Në krahasim me konkurrentët në treg, Prins ofron sisteme të besueshme të karburantit për një gamë të gjerë të mjeteve. Këto sisteme VSI-DI konsumojnë shumë pak benzinë (<5%) dhe janë të përshtatshme për të dy llojet më të fundit të makinave dhe makinat që kanë qenë në rrugë për disa vjet.',
    'VSI-DI--3': 'Sistemi VSI-DI bazohet në parimin e shndërrimit të gazit të naftës së lëngshme (LPG) ose gazit natyror (CNG) në formë avulli para se të injektohet në makinën me motor DI në mënyrë sekuencale.',
    'VSI-DI--4': "Softweri më i avancuar",
    'VSI-DI--5': "Posaçërisht për motorët me injeksion të drejtpërdrejtë",
    'VSI-DI--6': 'Komponentë të cilësisë së lartë',
    'VSI-DI--7': 'Performancë maksimale, emetime minimale',
    'VSI-DI--8': 'Konsum shumë të ulët i benzinës (< 5%)',
    'VSI-DI--9': 'Nuk ka ndryshim të dukshëm krahasuar me përdorimin e automjetit tuaj me benzinë!',

    /////////////////////////////
    'VSI-3--1': '--- ÇMIMI I INOVACIONIT FITUES GTC 2020 DHE ÇMIMI I SHKËLQIMIT ARGUS LPG 2020 --- ',
    'VSI-3--2': 'Ky sistem LPG është unik dhe i sigurt për të ardhmen, duke ofruar një zgjidhje universale për një gamë të gjerë të mjeteve me teknologji automobilistike të fundit, që përputhet me standardet globale të emetimeve.',
    'VSI-3--3': 'Sistemi Prins VSI-3 DI LPG ofron një zgjidhje universale për një gamë të gjerë të mjeteve me teknologji automobilistike të fundit, që përputhet me standardet globale të emetimeve të fundit si Euro 6D WLTP dhe certifikimet si R115/EPA. Sistemi është i cilësisë së lartë, shumë efikas (përdorim i ulët i benzinës <5%), më i performant, duke ofruar një përvojë të qetë në drejtim, po si një makinë normale me benzinë. Duke udhëtuar me LPG (Autogaz), ju kurseni kostot e karburantit, ndonjëherë qindra euro në vit, dhe ndihmoni në ruajtjen e mjedisit duke ulur emetimet e CO2 (21%) dhe grimcat (deri në 95%). Sistemi është tani i disponueshëm në nivel global tek instalatorët zyrtarë të Prins.',
    'VSI-3--4': 'Jeroen Visscher, Drejtori Teknik i Prins: "Jemi vërtetë krenarë që prezantojmë zhvillimin tonë më të fundit: sistemi unik dhe revolucionar VSI-3 DI LPG i përshtatshëm për një gamë të gjerë të mjeteve të pajisura me motor benzinë ku karburanti injektohet drejtpërdrejtë në motor (DI - Injeksioni Drejtpërdrejtë). Kompjuteri Prins AFC-3.0 DI, i vlerësuar si zemra e sistemit, siguron kontrollin, sigurinë dhe efikasitetin e sistemit në përgjithësi. Prins eVP-500 siguron rrjedhën e duhur të furnizimit të LPG-së në të gjitha kushtet e veprimtarisë për makinat deri në 500 kuaj fuqi. Injektorët Prins Keihin njihen për saktësinë, rezistencën dhe shpejtësinë e tyre. Së bashku me rrjetin tonë global, jemi gati për të ardhmen."',
    'VSI-3--5': 'Sistemi është gjithashtu i pajisur me një ndërrues multi-ngjyrë Prins, një filtrë Prins, një rezervuar LPG në vendin e rrotës së rezervës dhe pikën e mbushjes pranë pikës së mbushjes së benzinës. Meqënëse mjeti ka një rezervuar gaz dhe një rezervuar benzinë, gjithë distanca mund të zgjerohet për më shumë se 1.000 km pa mbushje. LPG është karburanti i alternativës më i shitur në të gjithë botën dhe është i disponueshëm në një numër të gjerë stacionesh karburanti.'
}

function translatePage(targetLanguage) {
    // Load the Google Translate API
    google.load('language', '1', {
        callback: function() {
            // Get the elements to be translated (e.g., using class or ID selectors)
            var elementsToTranslate = document.getElementsByClassName('translate');

            // Translate each element
            for (var i = 0; i < elementsToTranslate.length; i++) {
                var element = elementsToTranslate[i];
                var text = element.innerHTML;

                // Translate the text using the Google Translate API
                google.language.translate(text, 'en', targetLanguage, function(result) {
                    if (result.translation) {
                        element.innerHTML = result.translation;
                    }
                });
            }
        }
    });
}

// Call the translatePage function with the target language code (e.g., 'es' for Spanish)
translatePage('es');

