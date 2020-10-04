 let body = document.querySelector('body'); //Sélectionne le body
 
  //créer fonction1 class 
  function addClass(element, clas) {
    element.classList.add(clas)
  } 
//OU : nomHTML.setAttribute("class", "nom de la classe")

//fonction créer élément
  function createElement (element) {
    return document.createElement(element);
  }


//First Party --------------------------------------
//fonction create element with class 
  function createElementWithClass (element, clas) {
    let creationElement = createElement(element);
    addClass(creationElement, clas);
    return creationElement;
  } 
  let divContainer = createElementWithClass ('div', 'container'); 
  console.log(divContainer);


  let divSiteHeader = document.createElement('div');
  divSiteHeader.setAttribute("class", "site-header clearfix")
  divSiteHeader.setAttribute("role", "banner");


  let divLogo = createElementWithClass('div', 'site-logo'); //function CreateElementWithClass
  divLogo.innerHTML = 'HTML5'; //Ajoute texte brut dans navigateur



  function addElementWithSpan (element, clas) { //Fonction Create Element With Span
    let stars = createElement(element);
    addClass(stars, clas);
    return stars;
  }
  let spanStars = addElementWithSpan('span', 'star');
  spanStars.innerHTML = '&#9733;';


  let boilerText = document.createElement('text');
  let textBoiler = document.createTextNode('BOILERPLATE'); // Créer texte brut


  let listeUl = document.createElement('ul');
  listeUl.setAttribute("class", "site-nav inline-block-list");

  let listLi0 = document.createElement('li');
  let linkInLi0 = document.createElement('a');
  linkInLi0.href = 'https://github.com/h5bp/html5-boilerplate" data-ga-category="Outbound links" data-ga-action="Nav click" data-ga-label="Source code';
  linkInLi0.innerHTML="Source code";

  let listLi1 = document.createElement('li');
  let linkInLi1 = document.createElement('a');
  linkInLi1.href = 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md" data-ga-category="Outbound links" data-ga-action="Nav click" data-ga-label="Docs"';
  linkInLi1.innerHTML = "Docs";

  let listLi2 = document.createElement('li');
  let linkInLi2 = document.createElement('a');
  linkInLi2.href ='https://h5bp.org" data-ga-category="Outbound links" data-ga-action="Nav click" data-ga-label="Other projects"';
  linkInLi2.innerHTML ="Other projects";


//DIV site PROMO
  let divSitePromo = createElementWithClass('div', 'site-promo');

  let titreH1 = document.createElement('h1');
  titreH1.innerHTML ="The web's most popular font-end template";


  let pDescription = createElementWithClass('p', 'description');
  pDescription.innerHTML = "HTML5 Boilerplate helps you build ";


  let motFast = document.createElement('strong');
  motFast.innerHTML = "fast";

  let virguleText = document.createElement('text');
  let textVirgule = document.createTextNode(', ');

  let motRobuste = document.createElement('strong');
  motRobuste.innerHTML = "robuste";

  let virguleAndText = document.createElement('text');
  let textVirguleAnd = document.createTextNode(', and ');

  let motAdaptable = document.createElement('strong');
  motAdaptable.innerHTML = "adaptable";

  let phraseText = document.createElement('text');
  let textPhrase = document.createTextNode(' web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.');




//DIV enfant de la div site promo 
  let divCta = createElementWithClass('div', 'cta-option');

  let lienBtn = document.createElement('a');
  lienBtn.setAttribute("class", "btn btn-download");
  lienBtn.setAttribute("href", 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip" data-ga-category="Download" data-ga-action="Download - top" data-ga-label="v8.0.0');


  let lienDownloadStrong = document.createElement('strong');
  lienDownloadStrong.innerHTML = "Download ";

  let version = addElementWithSpan('span', 'version');
  version.innerHTML ="v8.0.0"

  let lienLast = document.createElement('a');
  lienLast.setAttribute("class", 'last-update'); // ICIIiiiiiiiii
  lienLast.href ='https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/CHANGELOG.md" data-ga-category="Outbound links" data-ga-action="See the CHANGELOG" data-ga-label="v8.0.0"';
  lienLast.innerHTML = "See the CHANGELOG";

//Second Party -------------------------------------
  let divSiteSection = createElementWithClass ('div', 'site-section');
  console.log(divSiteSection);

  let divClassContainer = createElementWithClass ('div', 'container');

  let titreH2 = document.createElement('h2');
  titreH2.innerHTML = "Save time. Create with confidence.";

  let divGrid = createElementWithClass ('div', 'grid');

//Div grid-Cell 1 of div Grid  
  let divCell = createElementWithClass('div', 'grid-cell');
  let spanStars2 = addElementWithSpan('span', 'star');
  spanStars2.innerHTML = '&#9733; ';
  let titreH3 = document.createElement('h3');
  let Titreh3Text= document.createTextNode('Analytics, icons, and more');
  let paragraphe = document.createElement('p');
  paragraphe.innerHTML = "A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.";
  
//Div grid-Cell 2
  let divCell2 = createElementWithClass ('div', 'grid-cell');
  let spanStars3 = addElementWithSpan('span', 'star');
  spanStars3.innerHTML = '&#9733; ';
  let titreH3for2 = document.createElement('h3');
  let Titreh3Textfor2= document.createTextNode('Normalize.css and helpers');
  let paragrapheFor2 = document.createElement('p');
  let textParagrapheFor2 = document.createTextNode('Includes ');
  let linkForP2 = document.createElement('a');
  linkForP2.href = 'https://necolas.github.io/normalize.css/';
  linkForP2.innerHTML = "Normalize.css";
  let text2ParagrapheFor2 = document.createTextNode(' — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.');

//Div grid-Cell 3
  let divCell3 = createElementWithClass ('div', 'grid-cell');
  let spanStars4 = addElementWithSpan('span', 'star');
  spanStars4.innerHTML = '&#9733; ';
  let titreH3For3 = document.createElement('h3');
  let titreh3TextFor3 = document.createTextNode('Modernizr');
  let paragrapheFor3 = document.createElement('p');
  let textParagrapheFor3 = document.createTextNode('Get the latest minified versions of Modernizr: ');
  let linkForP3 = document.createElement('a');
  linkForP3.href = 'https://modernizr.com/';
  linkForP3.innerHTML = "Modernizr ";
  let text2ParagrapheFor3 = document.createTextNode('feature detection library, complete with a custom build configuration');

//Div grid-cell 4
  let divCell4 = createElementWithClass ('div', 'grid-cell');
  let spanStars5 = addElementWithSpan('span', 'star');
  spanStars5.innerHTML = '&#9733; ';
  let titreH3For4 = document.createElement('h3');
  let titreh3TextFor4 = document.createTextNode('High performance');
  let paragrapheFor4 = document.createElement('p');
  let textParagrapheFor4 = document.createTextNode('Apache settings to help you deliver excellent site performance. We independently maintain ');
  let linkForP4 = document.createElement('a');
  linkForP4.href = 'https://github.com/h5bp/server-configs">server configs';
  linkForP4.innerHTML = "server configs ";
  let text2ParagrapheFor4 = document.createTextNode('for multiple platforms.');

//Third Party -------------------------------------
  let divSiteSectionVideo = document.createElement('div');
  divSiteSectionVideo.setAttribute("class", 'site-section site-section-video'); // fonction 1 class 

  let h2ForDivSectionVideo = document.createElement('h2');
  h2ForDivSectionVideo.innerHTML = "Introduction to V8";

  let divContent = createElementWithClass ('div', 'content');
  let pContent = createElementWithClass ('p', 'new');
  pContent.innerHTML =" What's new ?";

  let ulNew = createElementWithClass ('ul', 'new');
  let liParent = document.createElement ('li');
  let textForLiParent = document.createTextNode ('Added a sample package.json with basic Parcel commands to jump start your app development');
  let liEnfant1 = document.createElement ('li');
  liEnfant1.innerHTML = "Added sample Open Graph metadata";
  let liEnfant2 = document.createElement ('li');
  liEnfant2.innerHTML = "Updated Modernizr and main.css";
  let liEnfant3 = document.createElement ('li');
  liEnfant3.innerHTML = "Removed jQuery";
  let liEnfant4 = document.createElement ('li');
  liEnfant4.innerHTML = "Set anonymizeIp to true in Google Analytics snippet";
  let liEnfant5 = document.createElement ('li');
  liEnfant5.innerHTML = "Removed Browser Upgrade Prompt";
  let liParentEnfant2 = document.createElement ('li');
  let textForLiParentEnfant2 = document.createTextNode ("That's just the start of all the goodness.");
  let linkForParentEnfant2 = document.createElement ('a');
  linkForParentEnfant2.href = 'https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md'
  linkForParentEnfant2.innerHTML = "Check out the Changelog for all the details.";


//Foor Party -------------------------------------
  let divSectionSite = createElementWithClass ('div', 'site-section');

  let h2DivSectionSite = document.createElement ('h2');
  h2DivSectionSite.innerHTML = "Who uses HTML5 Boilerplate ?";

  let pInTheWild = createElementWithClass ('p', 'in-the-wild');

  let aPInTheWild1 = document.createElement('a');
  aPInTheWild1.href = "https://www.microsoft.com/surface/";
  aPInTheWild1.innerHTML = "Microsoft";
  let virguleBetween1 = document.createTextNode(', ');

  let aPInTheWild2 = document.createElement('a');
  aPInTheWild2.href = "https://data.nasa.gov/";
  aPInTheWild2.innerHTML = "NASA";
  let virguleBetween2 = document.createTextNode(', ');

  let aPInTheWild3 = document.createElement('a');
  aPInTheWild3.href = "http://www.nikeskateboarding.com/";
  aPInTheWild3.innerHTML = "Nike";
  let virguleBetween3 = document.createTextNode(', ');


  let aPInTheWild5 = document.createElement('a');
  aPInTheWild5.href = "https://www.barackobama.com/";
  aPInTheWild5.innerHTML = "Barack Obama";
  let virguleBetween5 = document.createTextNode(', ');

  let aPInTheWild6 = document.createElement('a');
  aPInTheWild6.href = "https://www.itv.com/news/";
  aPInTheWild6.innerHTML = "ITV News";
  let virguleBetween6 = document.createTextNode(', ');

  let aPInTheWild7 = document.createElement('a');
  aPInTheWild7.href = "https://creativecommons.org/";
  aPInTheWild7.innerHTML = "Creative Commons";
  let virguleBetween7 = document.createTextNode(', ');

  let aPInTheWild8 = document.createElement('a');
  aPInTheWild8.href = "https://auspost.com.au/";
  aPInTheWild8.innerHTML = "Australia Post";
  let virguleBetween8 = document.createTextNode(', and ');

  let aPInTheWild9 = document.createElement('a');
  aPInTheWild9.href = "https://github.com/h5bp/html5-boilerplate/wiki/sites";
  aPInTheWild9.innerHTML = "many more";
  let virguleBetween9 = document.createTextNode('.');

  let divCtaOption = createElementWithClass('div', 'cta-option');
  let lienCtaOption = document.createElement('a');
  lienCtaOption.setAttribute("class", "btn btn-download");
  
  lienCtaOption.href ='"https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip" data-ga-category="Download" data-ga-action="Download - bottom" data-ga-label="V8.0.0"';
  let motDownload = document.createElement('strong');
  motDownload.innerHTML = "Download ";
  let spanV8 = createElementWithClass('span', 'version');
  spanV8.innerHTML = "V8.0.0";

 //Five Party

 let divAsideClass = createElementWithClass('div', 'aside');
 let divContainerClass = createElementWithClass('div', 'container');
 let ulInlineBlock = createElementWithClass('ul', 'inline-block-list');
 let liInLine1 = document.createElement('li');
 let lienLiInLine1 = document.createElement('a');
 lienLiInLine1.href = '"https://github.com/h5bp/html5-boilerplate/issues" data-ga-category="Outbound links" data-ga-action="Footer click" data-ga-label="Report issues"';
 let spanForLiInLine1 = document.createElement ('span');
 spanForLiInLine1.setAttribute("class", "Icon Icon--github");
 let textSpanForLiInLine1 = document.createTextNode(' Report Issues');

 let liInLine2 = document.createElement('li');
 let lienLiInLine2 = document.createElement('a');
 lienLiInLine2.href = '"https://stackoverflow.com/questions/tagged/html5boilerplate" data-ga-category="Outbound links" data-ga-action="Footer click" data-ga-label="Help on Stack Overflow';
 let spanForLiInLine2 = document.createElement ('span');
 spanForLiInLine2.setAttribute("class", "Icon Icon--stackoverflow");
 let textSpanForLiInLine2 = document.createTextNode(' Help on Stack Overflow');

 let liInLine3 = document.createElement('li');
 let lienLiInLine3 = document.createElement('a');
 lienLiInLine3.href = '"https://h5bp.net" data-ga-category="Outbound links" data-ga-action="Footer click" data-ga-label="View the showcase"';
 let spanForLiInLine3 = document.createElement ('span');
 spanForLiInLine3.setAttribute("class", "Icon Icon--html5");
 let textSpanForLiInLine3 = document.createTextNode(' View the showcase');


//Six Party

 let footer = createElementWithClass ('footer', 'site-footer');

 let pFooter1 = document.createElement ('p');
 let textPFooterA = document.createTextNode ('A project from ');
 let lienTextPfooterA = document.createElement('a');
 lienTextPfooterA.href = "https://github.com/h5bp";
 lienTextPfooterA.innerHTML ="H5BP "
 let textPFooterB = document.createTextNode ('currently maintained by ');
 let br1 = document.createElement('br');
 let lienTextPfooterB = document.createElement('a');
 lienTextPfooterB.href = "https://htmlcssjavascript.com/";
 lienTextPfooterB.innerHTML ="Robe Larsen ";
 let textPFooterC = document.createTextNode ('& ');
 let lienTextPfooterC = document.createElement('a');
 lienTextPfooterC.href = "https://github.com/coliff";
 lienTextPfooterC.innerHTML ="Christian Oliff ";

 let pFooter2 = document.createElement ('p');
 let textPFooterD = document.createTextNode ("This project wouldn't have been possible without our past team members:");
 let br = document.createElement ('br');

 let lienTextPfooterD = document.createElement('a');
 lienTextPfooterD.href = "https://mathiasbynens.be/";
 lienTextPfooterD.innerHTML ="Mathias Bynens";
 let textPvirgule1 = document.createTextNode(", ");

 let lienTextPfooterE = document.createElement('a');
 lienTextPfooterE.href = "https://twitter.com/alrra";
 lienTextPfooterE.innerHTML ="Cătălin Mariș";
 let textPvirgule2 = document.createTextNode(", ");


 let lienTextPfooterG = document.createElement('a');
 lienTextPfooterG.href = "https://drublic.de/";
 lienTextPfooterG.innerHTML ="Hans Christian Reinl";
 let textPvirgule4 = document.createTextNode(", ");

 let lienTextPfooterH = document.createElement('a');
 lienTextPfooterH.href = "http://nicolasgallagher.com/";
 lienTextPfooterH.innerHTML ="Nicolas Gallagher";
 let textPvirgule5 = document.createTextNode(", ");

 let lienTextPfooterI = document.createElement('a');
 lienTextPfooterI.href = "https://www.paulirish.com/";
 lienTextPfooterI.innerHTML ="Paul Irish";
 let textPvirgule6 = document.createTextNode(", and ");

 let lienTextPfooterJ = document.createElement('a');
 lienTextPfooterJ.href = "http://nimbupani.com/";
 lienTextPfooterJ.innerHTML ="Divya Manian.";
 

  //appenchild first party
  body.appendChild(divContainer);
  divContainer.appendChild(divSiteHeader);
  
  divSiteHeader.appendChild(divLogo);
  divLogo.appendChild(spanStars);
  divLogo.appendChild(textBoiler);
  divSiteHeader.appendChild(listeUl);
  listeUl.appendChild(listLi0);
  listLi0.appendChild(linkInLi0);
  listeUl.appendChild(listLi1);
  listLi1.appendChild(linkInLi1);
  listeUl.appendChild(listLi2);
  listLi2.appendChild(linkInLi2);

  divSiteHeader.appendChild(divSitePromo);
  divSitePromo.appendChild(titreH1);
  divSitePromo.appendChild(pDescription);
  pDescription.appendChild(motFast);
  pDescription.appendChild(textVirgule);
  pDescription.appendChild(motRobuste);
  pDescription.appendChild(textVirguleAnd);
  pDescription.appendChild(motAdaptable);
  pDescription.appendChild(phraseText);
  pDescription.appendChild(textPhrase);

  divSitePromo.appendChild(divCta);
  divCta.appendChild(lienBtn);
  lienBtn.appendChild(lienDownloadStrong);
  lienBtn.appendChild(version);
  divCta.appendChild(lienLast);

  //appenchild second Party
  body.appendChild(divSiteSection);
  divSiteSection.appendChild(divClassContainer);
  divClassContainer.appendChild(titreH2);
  divClassContainer.appendChild(divGrid);
  divGrid.appendChild(divCell);
  divCell.appendChild(spanStars2);
  divCell.appendChild(titreH3);
  divCell.appendChild(paragraphe);
  titreH3.appendChild(spanStars2);
  titreH3.appendChild(Titreh3Text);
  
  divGrid.appendChild(divCell2);
  divCell2.appendChild(spanStars3);
  divCell2.appendChild(titreH3for2);
  divCell2.appendChild(paragrapheFor2);
  titreH3for2.appendChild(spanStars3);
  titreH3for2.appendChild(Titreh3Textfor2);
  paragrapheFor2.appendChild(textParagrapheFor2);
  paragrapheFor2.appendChild(linkForP2);
  paragrapheFor2.appendChild(text2ParagrapheFor2);

  divGrid.appendChild(divCell3);
  divCell3.appendChild(spanStars4);
  divCell3.appendChild(titreH3For3);
  divCell3.appendChild(paragrapheFor3);
  titreH3For3.appendChild(spanStars4);
  titreH3For3.appendChild(titreh3TextFor3);
  paragrapheFor3.appendChild(textParagrapheFor3);
  paragrapheFor3.appendChild(linkForP3);
  paragrapheFor3.appendChild(text2ParagrapheFor3);

  divGrid.appendChild(divCell4);
  divCell4.appendChild(spanStars5);
  divCell4.appendChild(titreH3For4);
  divCell4.appendChild(titreh3TextFor4);
  divCell4.appendChild(paragrapheFor4)
  titreH3For4.appendChild(spanStars5);
  titreH3For4.appendChild(titreh3TextFor4);
  paragrapheFor4.appendChild(textParagrapheFor4);
  paragrapheFor4.appendChild(linkForP4);
  paragrapheFor4.appendChild(text2ParagrapheFor4);


  //appenchild third party
  body.appendChild(divSiteSectionVideo);

  divSiteSectionVideo.appendChild(h2ForDivSectionVideo);
  divSiteSectionVideo.appendChild(divContent);
  divContent.appendChild(pContent);
  divContent.appendChild(ulNew);
  ulNew.appendChild(liParent);
  ulNew.appendChild(liEnfant1);
  ulNew.appendChild(liEnfant2);
  ulNew.appendChild(liEnfant3);
  ulNew.appendChild(liEnfant4);
  ulNew.appendChild(liEnfant5);
  ulNew.appendChild(liParentEnfant2);
  liParent.appendChild(textForLiParent);
  liParentEnfant2.appendChild(textForLiParentEnfant2);
  liParentEnfant2.appendChild(linkForParentEnfant2);

//Appenchild Foor Party

  body.appendChild(divSectionSite);
  divSectionSite.appendChild(h2DivSectionSite);
  divSectionSite.appendChild(pInTheWild);

  pInTheWild.appendChild(aPInTheWild1);
  pInTheWild.appendChild(virguleBetween1);

  pInTheWild.appendChild(aPInTheWild2);
  pInTheWild.appendChild(virguleBetween2);

  pInTheWild.appendChild(aPInTheWild3);
  pInTheWild.appendChild(virguleBetween3);

  pInTheWild.appendChild(aPInTheWild3);
  pInTheWild.appendChild(virguleBetween3);

  pInTheWild.appendChild(aPInTheWild5);
  pInTheWild.appendChild(virguleBetween5);

  pInTheWild.appendChild(aPInTheWild6);
  pInTheWild.appendChild(virguleBetween6);

  pInTheWild.appendChild(aPInTheWild7);
  pInTheWild.appendChild(virguleBetween7);

  pInTheWild.appendChild(aPInTheWild8);
  pInTheWild.appendChild(virguleBetween8);

  pInTheWild.appendChild(aPInTheWild9);
  pInTheWild.appendChild(virguleBetween9);

  divSectionSite.appendChild(divCtaOption);
  divCtaOption.appendChild(lienCtaOption);
  lienCtaOption.appendChild(motDownload);
  lienCtaOption.appendChild(spanV8);


  //Appenchild Five party
  body.appendChild(divAsideClass);
  divAsideClass.appendChild(divContainerClass);
  divContainerClass.appendChild(ulInlineBlock);
  ulInlineBlock.appendChild(liInLine1);
  liInLine1.appendChild(lienLiInLine1);
  lienLiInLine1.appendChild(spanForLiInLine1);
  lienLiInLine1.appendChild(textSpanForLiInLine1);

  ulInlineBlock.appendChild(liInLine2);
  liInLine2.appendChild(lienLiInLine2);
  lienLiInLine2.appendChild(spanForLiInLine2);
  lienLiInLine2.appendChild(textSpanForLiInLine2);

  ulInlineBlock.appendChild(liInLine3);
  liInLine3.appendChild(lienLiInLine3);
  lienLiInLine3.appendChild(spanForLiInLine3);
  lienLiInLine3.appendChild(textSpanForLiInLine3);

  //Six party 

  body.appendChild(footer);
  footer.appendChild(pFooter1);
  pFooter1.appendChild(textPFooterA);
  pFooter1.appendChild(lienTextPfooterA);
  pFooter1.appendChild(textPFooterB);
  pFooter1.appendChild(br1);
  pFooter1.appendChild(lienTextPfooterB);
  pFooter1.appendChild(textPFooterC);
  pFooter1.appendChild(lienTextPfooterC);

  footer.appendChild(pFooter2);
  pFooter2.appendChild(textPFooterD);
  pFooter2.appendChild(br);
  pFooter2.appendChild(lienTextPfooterD);
  pFooter2.appendChild(textPvirgule1);
  pFooter2.appendChild(lienTextPfooterE);
  pFooter2.appendChild(textPvirgule2);

  pFooter2.appendChild(lienTextPfooterG);
  pFooter2.appendChild(textPvirgule4);
  pFooter2.appendChild(lienTextPfooterH);
  pFooter2.appendChild(textPvirgule5);
  pFooter2.appendChild(lienTextPfooterI);
  pFooter2.appendChild(textPvirgule6);
  pFooter2.appendChild(lienTextPfooterJ);


