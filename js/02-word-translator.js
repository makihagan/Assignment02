let languageCode = prompt('Enter a language code (e.g. es, de, en, fr, etc.)');
let es = 'Spanish';
let de = 'German';
let en = 'English';
let fr = 'French';
let translatedIn = 'Hello World translated in '

switch(languageCode) {
    case 'es':
        console.log(`${translatedIn}${es} is: Hola Mundo`);
        break;
    case 'de':
        console.log(`${translatedIn}${de} is: Hallo Welt`);
        break;
    case 'fr':
        console.log(`${translatedIn}${fr} is: Bonjour le monde`);
        break;
    default:
        console.log('Hello World');    
}

// I challenged myself to use template literals and switch statement above
// but I could do just simple else if statement as following:

// let languageCode = prompt('Enter a language code (e.g. es, de, en, fr, etc.)');

// if (languageCode === 'es') {
//     console.log('Hello World translated in Spanish is: Hola Mundo');
// } else if (languageCode === 'de') {
//     console.log('Hello World translated in German is: Hallo Welt');
// } else if (languageCode === 'fr') {
//     console.log('Hello World translated in French is: Bonjour le monde');
// } else {
//     console.log('Hello World');
// }

