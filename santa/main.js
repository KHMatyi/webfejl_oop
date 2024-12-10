/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)

});

document.getElementById('részlegform').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    factory.addRészleglista(form.querySelector('#rtext').value);
});

/**
 * table render
 */
function initTable(){

    // TODO 6
    for(let i = 0 ; i < companionList.length ; i++) {
        const manó = new Companion(
            factory.createId(), 
            companionList[i].firstName,
            companionList[i].lastName,
            companionList[i].area,
            companionList[i].products
        );
        factory.addmaó(manó);
    }
}


initTable()

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.rowIndex-1;
    // TODO 10
    refreshProductList(factory.manólist[companionId]);
    
    

}

function részlegfeltöltő(){
    const selector = document.getElementById('carea');
    selector.innerHTML = '';
    for (i of factory.részleglista){
        const option = document.createElement('option');
        option.innerHTML = i;
        selector.appendChild(option);
    }
}
részlegfeltöltő()
