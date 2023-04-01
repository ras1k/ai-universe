const loadAi = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res =  await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools);
}

const displayAi = (params) =>{
    console.log(params);
    const paramContainer = document.getElementById('param-container');
    params.forEach(param =>{
        console.log(param);
        const paramDiv = document.createElement('div');
        paramDiv.classList.add('col');
        paramDiv.innerHTML = `
        <div class="card h-100">
            <img src="${param.image}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body">
            <h3>Features : </h3>
            <ol>
                <li>${param.features[0] ? param.features[0] : 'no feature'}</li>
                <li>${param.features[1] ? param.features[1] : 'no feature'}</li>
                <li>${param.features[2] ? param.features[2] : 'no feature'}</li>
                <li>${param.features[3] ? param.features[3] : ''}</li>
            </ol>
                
            </div>
            <div class="card-footer">
                <div>
                    <h5 class="card-title">${param.name}</h5>
                    <p> <i class="fa-solid fa-calendar"></i> ${param.published_in}</p>
                </div>
            </div>
        </div>
        `;

        paramContainer.appendChild(paramDiv);
    })
}

loadAi();