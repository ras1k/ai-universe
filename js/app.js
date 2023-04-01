const loadAi = async(dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res =  await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools, dataLimit);
}
const paramContainer = document.getElementById('param-container');
const displayAi = (params, dataLimit) =>{
    console.log(dataLimit);
    if (dataLimit && params.length > 6) {
        console.log(params.length)
        params = params.slice(0, dataLimit);

    }

    // params = params.slice(0, 6);
    params.forEach(param =>{
        console.log(param);
        const paramDiv = document.createElement('div');
        paramDiv.classList.add('col');
        paramDiv.innerHTML = `
        <div class="card h-100">
            <img src="${param.image}" class="card-img-top img-fluid h-100" alt="...">
            <div class="card-body">
            <h3>Features : </h3>
            <ol>
                <li>${param.features[0] ? param.features[0] : 'no feature'}</li>
                <li>${param.features[1] ? param.features[1] : 'no feature'}</li>
                <li>${param.features[2] ? param.features[2] : 'no feature'}</li>
                <li>${param.features[3] ? param.features[3] : 'Null'}</li>
            </ol>
                
            </div>
            <div class="card-footer">
                <div class="d-flex align-items-center justify-content-between gap-5">
                <div>
                    <h5 class="card-title">${param.name? param.name : 'No Name Found'}</h5>
                    <p> <i class="fa-solid fa-calendar"></i> ${param.published_in? param.published_in : 'No Date Found'}</p>
                </div>
                <div style="background-color: rgba(165, 79, 79, 0.308); border: 1px; border-radius: 50%; padding: 15px">
                <i class="fa-solid fa-arrow-right" style="color: #b60202;"></i>
                </div>
                </div>
            </div>
        </div>
        `;
        paramContainer.appendChild(paramDiv);
    })
}

const processData = (dataLimit) => {
    toggleSpinner(true);
    loadAi( dataLimit);
}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processData();
    toggleSpinner(false);
})
loadAi(6);
