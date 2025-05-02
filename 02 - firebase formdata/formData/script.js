const form = document.querySelector('form');

form.addEventListener('submit', event =>{
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData.get("name"));

    formData.forEach( (value, key ) =>{

        // console.log(key, value)
    });

    for(const [key, value] of formData){
        console.log(key, value)
    }

    const commonObj = Object.fromEntries(formData);
    console.log(commonObj)

    const jsonForm = JSON.stringify(commonObj);
    console.log(jsonForm)
})