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
                <div class="d-flex align-items-center justify-content-between">
                <div>
                    <h5 class="card-title">${param.name? param.name : 'No Name Found'}</h5>
                    <p> <i class="fa-solid fa-calendar"></i> ${param.published_in? param.published_in : 'No Date Found'}</p>
                </div>
                <button onclick="loadData(${param.id})" type="button" class="btn" style="background-color: rgba(165, 79, 79, 0.308); border: 1px; border-radius: 50%; padding: 15px" data-bs-toggle="modal" data-bs-target="#dataModal">
                <i class="fa-solid fa-arrow-right" style="color: #b60202;"></i>
                </button>
                </div>
            </div>
        </div>`;
        paramContainer.appendChild(paramDiv);
    })
    toggleSpinner(false);
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
    paramContainer.innerHTML='';
    processData();
    toggleSpinner(true);
    document.getElementById('btn-show-all').classList.add('d-none');
});

//details button
const loadData = async (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDataDetails(data.data);
}

const displayDataDetails = (param) =>{
    document.getElementById('dataModalLabel').innerText = param.tool_name;
    document.getElementById('data-details').innerHTML = `
    <div class="d-flex gap-5 align-items-center justify-content-evenly">
                <div class="border border-danger-subtle rounded bg-danger-subtle bg-opacity-25 p-2">
                        <p class="fw-bold">${param.description}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt sint expedita, tenetur quo similique dolore soluta! Quisquam, repudiandae sunt.
                        </p>
                        <div class="row d-flex gap-2 p-3 text-center justify-content-center">
                            <div class="col bg-light rounded">
                                <p class="text-success fw-bold p-3">
                                ${param.pricing[0].price} /
                                ${param.pricing[0].plan}</p>
                            </div>
                            <div class="col bg-light rounded">
                                <p class="text-warning fw-bold p-3">
                                ${param.pricing[1].price} /
                                ${param.pricing[1].plan}</p>
                            </div>
                            <div class="col bg-light rounded">
                                <p class="text-danger fw-bold p-3">
                                ${param.pricing[2].price} /
                                ${param.pricing[2].plan}</p></p>
                            </div>
                        </div>
                        <div class="row row-cols-2 g-3">
                            <div class="col rounded">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="col rounded">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div>
                    <img src="${param.image_link[0]}" class=" w-100" alt="">
                </div>
            </div>
    `
}





loadAi(6);
