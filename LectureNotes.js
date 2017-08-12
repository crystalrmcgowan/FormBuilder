////***These are Mark's lecture notes***////

for (var i = 0; i < formData.length; i++) {
  let _fields = document.getElementById("fields")
  //I do this so I don't have to type formData[i] a lot
  let _data = formData[i]
  console.log(`creating HTML for ${_data.label}`)
  //means console.log("creating HTML for " + _data.label);
  if (_data.type === "textarea") {
    let textarea = document.createElement("textarea")
    //same as below, we want to set properties of our textarea
    textarea.placeholder = _data.label
    textarea.id = _data.id
    _fields.appendChild(textarea)
  } else if (_data.type === "select") {
    let select = document.createElement("select")
    select.id = data.id
    //create our placeholder for 'Select Lang'
    let placeholder = document.createElement("option")
    placeholder.value = 0
    placeholder.innerHTML = _data.label
    select.appendChild(placeholder)
    //loop over the options and create an element for each options and append to the select
    for (var j = 0; j < _data.options.length; j++) {
      let _opt = _data.options[j]
      let option = document.createElement("option")
      option.value = _opt.value
      option.innerHTML = _opt.label
      //option.textContent = _opt.label
      select.appendChild(option)
    }
    _fields.appendChild(select)
  } else {
    //create a variable here to reuse/modify the new element. I called this variable element because it makes sense to me.
    let element = document.createElement("input")
    //to set HTML attributes on newly created/queried DOM element, the formula is element.attribute = value. The name of the value e are using is element.
    element.type = _data.type
    element.placeholder = _data.label
    element.id = _data.id
    _fields.appendChild(element)
    //we grabbed the id of fields from HTML and appended the 'element' which grabs the input.
  }
}
