function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input=document.querySelector("input")

retrieveEmployeeInformation() {
  return input.value;
}

addNewElementAsLi(){
  let employeeName=retrieveEmployeeInformation();
  document.querySelector.(".employee-list").innerHTML=`<li>${employeeName}</li>`;
}

addNewLiOnClick(){
  let submit=document.querySelector("input [type="submit"]")
}

clearEmployeeListOnLinkClick(){
  $(".employee-list").delete
}
