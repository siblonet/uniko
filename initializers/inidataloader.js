const testaticle = [
    {
        "_id": "65d0aed08132ce337fe9d061",
        "addarticle": "SOLEIL BLANC",
        "quantity": 3,
        "quanvend": 4,
        "addgenre": "Tous",
        "addprix": 12000,
        "addreduction": 10000,
        "addcoul": "#991C00,#B57E28,#995001,#eeeeee",
        "addmarque": "SWISS ARABIAN",
        "barcode": "6295124030475",
        "owner": "uniko",
        "image": [
            {
                "ima": "./assets/img/tesp1.jpg",
                "_id": "65d0aed08132ce337fe9d062"
            }
        ],
        "created": "1708175056317",
        "addoccasion": "",
        "notes": "Je vous le conseille en cette période ensoleillée, Il illuminera votre journée C’est un parfum d’été, très agréable à porter. Il sent la fraîcheur, la propreté ´. Il est doux On sent la noix de coco et le jasmin. Famille olfactive : Ambrée florale See less"
    },
    {
        "_id": "65d0aed08132ce337ba9d061",
        "addarticle": "INVISIBLE ROSE",
        "quantity": 3,
        "quanvend": 4,
        "addgenre": "Tous",
        "addprix": 18000,
        "addreduction": 0,
        "addcoul": "#E49BA6,#B62F51,#B95771,#E49BA6",
        "addmarque": "SWISS ARABIAN",
        "barcode": "6295124030475",
        "owner": "uniko",
        "image": [
            {
                "ima": "./assets/img/test2.jpg",
                "_id": "65d0aed08132ce337fe9d062"
            }
        ],
        "created": "1708175056317",
        "addoccasion": "",
        "notes": "Pure sensation de Rose velours Et de Patchouli Lacté. Un parfum fruité, floral Parfum Féminin , Doux et Attirant. Notes de tête : Cassis Notes de coeur: Eau de Rose , Rose , Iris Notes de fond: Patchouli , Notes Boisées. 100ml : 18.000fr 60ml: 10.000fr 30ml : 6500fr 8ml : 1500fr"
    }
];

const testadd = [
    {
        "_id": "65c0d954fa702f338a6cea47",
        "which": "backglise",
        "owner": "uniko",
        "image": "",
        "created": "1707137364703",
    }]

async function initDataLoader() {

    function isMobileDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.includes('mobile');
    };
    if (!isMobileDevice()) {
        adMinurl = 'admin';
    }

    deleteArticle();
    await PostArticle(testaticle);
    recentProduct(testaticle, testadd);

    /*try {
        deleteArticle();
        deleteOrder();
        deleteSetting();
        deletePeople();

        const online = await requesttoBackend('GET', 'boutique/uniko');
        if (online.article || online.pagesetting || online.order) {

            const people = await requesttoBackend('GET', 'people/persons/uniko');
            await PostPeople(people);
            await PostOrder(online.order);
            await PostArticle(online.article);
            await PostSettings(online.pagesetting);
            recentProduct(online.article, online.pagesetting);
            
        } else {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '';

            const productHTML = `
                <div class="container">
                    <div class="section-title">
                        <span style="color: red !important">Vérifiez que vous avez access a l'internet</span>
                    </div>
                    <div style="align-self: center; align-items: center; justify-content: center; text-align: center">
                        <img src="assets/img/error-404.png" alt="Internet Error">
                    </div>
                    <br>
                    <br>
                    <div style="align-self: center; align-items: center; justify-content: center; text-align: center">
                        <a style="align-self: center; cursor: pointer; color: #006e65" onclick="Reloada()">Cliquez ici pour actualiser</a>
                    </div>
        
                </div>
        `;
            productContainer.innerHTML += productHTML;
            const loaderRemove = document.getElementById('loaderRemove');
            loaderRemove.innerHTML = "";
            loaderRemove.style.display = "none";

        }

    } catch (error) {
         const productContainer = document.getElementById('product-container');
         productContainer.innerHTML = '';
 
         const productHTML = `
         <div class="container">
             <div class="section-title">
                 <span style="color: red !important" id="isemptyorintern">Vérifiez que vous avez access a l'internet</span>
             </div>
             <div style="align-self: center; align-items: center; justify-content: center; text-align: center">
                 <img src="assets/img/error-404.png" alt="Internet Error">
             </div>
             <br>
             <br>
             <div style="align-self: center; align-items: center; justify-content: center; text-align: center">
                 <a style="align-self: center; cursor: pointer; color: #006e65" onclick="Reloada()">Cliquez ici pour actualiser</a>
             </div>
 
         </div>
 `;
         productContainer.innerHTML += productHTML;
         const loaderRemove = document.getElementById('loaderRemove');
         loaderRemove.innerHTML = "";
         loaderRemove.style.display = "none";
       
        console.log("initDataLoader try catch", error);

    };*/
    setPageSettings();

};

initDataLoader();