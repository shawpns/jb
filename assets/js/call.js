let url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdH6yS6ruGF--iJqmJ59NqJlcvCBSTGQLduiDPtz9EHUPNqtA/formResponse"; //action url
let form = document.querySelector("#form"); //form element

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default behaviour

  fetch(url, {
      method: "POST",
      mode: "no-cors",
      header: {
        'Content-Type': 'application/json'
      },
      body: getInputData()
    })
    .then(data => {
      console.log(data);
      alert("Form Submitted");
    })
    .catch(err => console.error(err));
});

//populating input data
function getInputData() {
  let dataToPost = new FormData(); //formdata API

  //fill name attributes to corresponding values
  dataToPost.append("entry.888175015", document.querySelector("#inp1").value);
  dataToPost.append("entry.1729049297", document.querySelector("#inp2").value);
  dataToPost.append("entry.1526131691", document.querySelector("#inp3").value);
  dataToPost.append("entry.46723952", document.querySelector("#inp4").value);
  dataToPost.append("entry.2061832487", document.querySelector("#inp5").value);
  dataToPost.append("entry.853098142", document.querySelector("#inp6").value);
  dataToPost.append("entry.548814093", document.querySelector("#inp7").value);
  dataToPost.append("entry.169839347", document.querySelector("#inp8").value);
  dataToPost.append("entry.769633127", document.querySelector("#inp9").value);
  dataToPost.append("entry.696900722", document.querySelector("#inp10").value);
  dataToPost.append("entry.955985858", document.querySelector("#inp11").value);
  dataToPost.append("entry.1569568426", document.querySelector("#inp12").value);
  dataToPost.append("entry.1626225041", document.querySelector("#inp13").value);

  return dataToPost;
}


