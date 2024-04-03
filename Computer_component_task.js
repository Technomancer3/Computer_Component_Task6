const componentDatabaseSample = 
[
{componentName: 'AMD Ryzen 7 7700 Processor',price: 415,index:0},
{componentName: 'AMD Ryzen 7 7700X Processor',price: 425,index:1},
{componentName: 'AMD Ryzen 5 7600X Processor',price: 297,index:2},
{componentName: 'AMD Ryzen 5 5500 Processor',price: 119,index:3},
{componentName: 'Deepcool GAMMAXX AG300 CPU Air Cooler',price: 20,index:4},
{componentName: 'Cooler Master Hyper 620S Dual Tower CPU Cooler',price: 42,index:5},
{componentName: 'Deepcool AK500 Zero Dark CPU Cooler',price: 58,index:6},
{componentName: 'Intel Core i3 13100F Processor',price: 154,index:7},
{componentName: 'Intel 14th Gen Core i5 14400F Processor',price: 266,index:8},
{componentName: 'Intel 14th Gen Core i7 14700K Processor',price: 548,index:9},
{componentName: 'Intel 14th Gen Core i9 14900 Processor',price: 728,index:10},
{componentName: 'ASRock Intel Arc A770 Phantom 16GB OC Graphics Card',price: 441,index:11},
{componentName: 'MSI GeForce RTX 4090 GAMING X TRIO 24GB',price: 2394,index:12},
{componentName: 'Palit GeForce RTX 4080 SUPER GamingPro 16GB GDDR6X',price: 1436,index:13},
{componentName: 'Sapphire Pure AMD Radeon RX 7700 XT 12GB GDDR6',price: 611,index:14},
{componentName: 'WD Blue 4TB HDD',price: 106,index:15},
{componentName: 'Corsair Vengeance LPX 64GB 3600MHz DDR4 Memory',price: 180,index:16},
{componentName: 'ADATA Premier 32GB 3200MHz DDR4 Memory',price: 101,index:17},
{componentName: 'KLEVV BOLT XR 16GB 4000MHz DDR4 Gaming OC Memory',price: 69,index:18},
{componentName: 'Corsair Vengeance RGB RS 16GB 3600MHz DDR4',price: 69,index:19},
{componentName: 'Deepcool PF500 500W Power Supply',price: 42,index:20},
{componentName: 'Cooler Master Elite V3 600W Power Supply',price: 53,index:21},
{componentName: 'Gamdias HELIOS M1 750 Bronze 750W Power Supply',price: 69,index:22},
{componentName: 'Deepcool PM850D 850W 80 PLUS Power Supply',price: 106,index:23},
{componentName: 'Corsair 4000D Airflow Gaming Case White',price: 101,index:24},
{componentName: 'Cooler Master MasterBox Q500L Gaming Case',price: 53,index:25},
{componentName: 'DeepCool Matrexx 30 Si PC Case Black',price: 37,index:26},
{componentName: 'MSI Mag Forge 320R Case',price: 101,index:27},
{componentName: 'WD Blue SN580 500GB NVMe SSD',price: 58,index:28},
{componentName: 'MSI Spatium M371 1TB NVMe SSD',price: 69,index:29},
{componentName: 'Corsair MP600 CORE XT 1TB NVMe PCIe M 2 SSD',price: 87,index:30},
{componentName: 'Corsair MP600 PRO NH 8TB NVMe PCIe M 2 SSD',price: 1170,index:31}
];

const arrayComponents = [];
let listID = 0;

function searchComponent(input) {
    document.getElementById("searchOutput").style.display = 'block';
    document.getElementById("searchOutput").innerHTML = "";
    
    const filteredComponents = componentDatabaseSample.filter(component => {
      return component.componentName.toLowerCase().includes(input.toLowerCase());
    });
    
    filteredComponents.forEach(component => {
      const resultItem = document.createElement("option");
      resultItem.textContent = component.componentName + " | cost: $" + component.price;
      document.getElementById("searchOutput").appendChild(resultItem);
    });
}

function addComponents() {
    const selectInput = document.getElementById('searchOutput').value;
    const cName = selectInput.slice(0, selectInput.indexOf('|')-1);
    const cCost = parseInt(selectInput.slice(selectInput.indexOf('$')+1, selectInput.length+1));
    const cQuantity = document.getElementById('nInput').value;
    const newRecord = [cName, cCost, cQuantity, listID];

    const listItem = document.createElement('li');
    listItem.id = listID;

    const listDotIcon = document.createElement('img');
    listDotIcon.src = 'dot-single.svg';
    listDotIcon.alt = 'list dot';
    listItem.appendChild(listDotIcon);

    const textcName = document.createElement(`p`);
    textcName.id = 'dynamicName';
    textcName.innerHTML = cName
    listItem.appendChild(textcName);
    
    const textcQuantity = document.createElement(`p`);
    textcQuantity.id = 'dynamicQuantity';
    textcQuantity.innerHTML = 'x ' + cQuantity + '.';
    listItem.appendChild(textcQuantity);

    const removeIcon = document.createElement('img');
    removeIcon.id = 'removeID';
    removeIcon.src = 'xmark-solid.svg';
    removeIcon.alt = 'Remove';
    removeIcon.addEventListener('click', function() {
        for (let i = 0; i < arrayComponents.length; i++) {
            if (arrayComponents[i][2] === parseInt(listItem.id)) {
                arrayComponents.splice(i, 1);
                console.log(arrayComponents);
                break;
            }
        }
        listItem.remove();
    });
    listItem.appendChild(removeIcon);

    const orderList = document.getElementById('orderList');
    orderList.appendChild(listItem)
    arrayComponents.push(newRecord);

    document.getElementById('cInput').value = '';
    document.getElementById('nInput').value = 1;
    listID += 1;
}

document.getElementById('addButton').addEventListener('click', function(){
    const cName = document.getElementById('cInput');
    const cQuantity = document.getElementById('nInput');
    const errorMessage = document.getElementById('cError');
    const errorMessage2 = document.getElementById('qError');

    let checkName = true;
    let checkQuantity = true;

    if (searchOutput.value === '') {
        cName.style.borderColor = 'red';
        cName.style.borderWidth = '2px';
        errorMessage.style.display = 'block';
        checkName = false;
    } else {
        cName.style.borderColor = 'darkturquoise';
        cName.style.borderWidth = '1px';
        errorMessage.style.display = 'none';
        checkName = true;
    }

    if (cQuantity.value < 1) {
        cQuantity.style.borderColor = 'red';
        cQuantity.style.borderWidth = '2px';
        errorMessage2.style.display = 'block';
        checkQuantity = false;
    } else {
        cQuantity.style.borderColor = 'darkturquoise';
        cQuantity.style.borderWidth = '1px';
        errorMessage2.style.display = 'none';
        checkQuantity = true;
    }

    if ((checkName === true) && (checkQuantity === true)) {
        addComponents();
        cName.style.borderColor = 'darkturquoise';
        cQuantity.style.borderColor = 'darkturquoise';
    }
});

document.getElementById('submit').addEventListener('click', function(){
    const fName = document.getElementById('fInput');
    const sName = document.getElementById('sInput');
    const tNum = document.getElementById('tInput');
    const cEmail = document.getElementById('eInput'); 

    const errorMessage = document.getElementById('nError');
    const errorMessage2 = document.getElementById('sError');
    const errorMessage3 = document.getElementById('tError');
    const errorMessage4 = document.getElementById('eError');
    const errorMessage5 = document.getElementById('listError');

    let check = true;

    if (arrayComponents.length === 0) {
        errorMessage5.style.display = 'block';
        check = false;
    } else {
        errorMessage5.style.display = 'none';
    }

    if (fName.value === '') {
        fName.style.borderColor = 'red';
        fName.style.borderWidth = '2px';
        errorMessage.style.display = 'block';
        check = false;
    } else {
        fName.style.borderColor = 'darkturquoise';
        fName.style.borderWidth = '1px';
        errorMessage.style.display = 'none';
    }

    if (sName.value === '') {
        sName.style.borderColor = 'red';
        sName.style.borderWidth = '2px';
        errorMessage2.style.display = 'block';
        check = false;
    } else {
        sName.style.borderColor = 'darkturquoise';
        sName.style.borderWidth = '1px';
        errorMessage2.style.display = 'none';
    }

    if ((tNum.value.length != 10) && ((/^[0-9]+$/.test(tNum.value)) != true)) {
        tNum.style.borderColor = 'red';
        tNum.style.borderWidth = '2px';
        errorMessage3.style.display = 'block';
        check = false;
    } else {
        tNum.style.borderColor = 'darkturquoise';
        tNum.style.borderWidth = '1px';
        errorMessage3.style.display = 'none';
    }

    if (cEmail.value === '') {
        cEmail.style.borderColor = 'red';
        cEmail.style.borderWidth = '2px';
        errorMessage4.style.display = 'block';
        check = false;
    } else {
        cEmail.style.borderColor = 'darkturquoise';
        cEmail.style.borderWidth = '1px';
        errorMessage4.style.display = 'none';
    }

    if (check === true) {
        document.getElementById("blackout").style.display = 'block';

        const newList = document.getElementById("orderOutputList");
        const originalList = document.getElementById("orderList");

        var totalCost = 0;
        for (var i = 0; i < arrayComponents.length; i++) {
            totalCost += arrayComponents[i][1] * arrayComponents[i][2];
        }
        var listItems = originalList.getElementsByTagName('li');
        for (var i = 0; i < listItems.length; i++) {
            var listItemClone = listItems[i].cloneNode(true);
          
            var imgElement = listItemClone.querySelector('img');
            if (imgElement) {
                imgElement.parentNode.removeChild(imgElement);
            } 
            var imgElement = listItemClone.querySelector('img');
            if (imgElement) {
                imgElement.parentNode.removeChild(imgElement);
            } 
            newList.appendChild(listItemClone);
        }

        var currentDate = new Date();
        var formattedDate = currentDate.toISOString().split('T')[0];
        
        document.getElementById("total").textContent = 'Total: $'+totalCost+'.00';
        document.getElementById("firstName").textContent = fName.value;
        document.getElementById("surname").textContent = sName.value;
        document.getElementById("contact-number").textContent = tNum.value;
        document.getElementById("email").textContent = cEmail.value;
        document.getElementById("date").textContent = formattedDate;
    }
});

document.getElementById('confirm').addEventListener('click', function(){
    const fName = document.getElementById('fInput');
    const sName = document.getElementById('sInput');
    const tNum = document.getElementById('tInput');
    const cEmail = document.getElementById('eInput');

    const newList = document.getElementById("orderOutputList");
    const originalList = document.getElementById("orderList");

    fName.value = '';
    sName.value = '';
    tNum.value = '';
    cEmail.value = '';

    while (originalList.firstChild) {
        originalList.removeChild(originalList.firstChild);
    }
    while (newList.firstChild) {
        newList.removeChild(newList.firstChild);
    }

    arrayComponents.splice(0, arrayComponents.length);
    document.getElementById("blackout").style.display = 'none';
    /* Further development would involve adding functionality that saves the order information in a database and/or sending formatted copy to a "company" email. 
    This additional functionality should be executed upon the confirm-button's press.*/
});

document.getElementById('cancel').addEventListener('click', function(){
    const newList = document.getElementById("orderOutputList");
    while (newList.firstChild) {
        newList.removeChild(newList.firstChild);
    }
    document.getElementById("blackout").style.display = 'none';
});