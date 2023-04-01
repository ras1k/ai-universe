const loadAi = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res =  await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools);
}

const displayAi = (params) =>{
    console.log(params);
    params.forEach(param =>{
        console.log(param);
    })
}

loadAi();