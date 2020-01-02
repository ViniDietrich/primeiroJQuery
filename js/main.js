function consultaCep() {
    $.ajax({
        url: "https://viacep.com.br/ws/89225660/json/",
        type: "GET",
        success: function(response) {
            console.log(response);
            console.log(response.bairro);
            alert(response.logradouro);
        }
    })
}