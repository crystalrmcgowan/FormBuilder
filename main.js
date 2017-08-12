let formData = [
  {
    type: "text",
    label: "First Name",
    id: "user-first-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "text",
    label: "Last Name",
    id: "user-last-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "email",
    label: "Email Address",
    id: "user-email",
    icon: "fa-envelope",
    options: []
  },
  {
    type: "text",
    label: "Current Website URL",
    id: "user-website",
    icon: "fa-globe",
    options: []
  },
  {
    type: "select",
    label: "Select Language",
    id: "user-language",
    icon: "",
    options: [
      {
        label: "English",
        value: "EN"
      },
      {
        label: "French",
        value: "FR"
      },
      {
        label: "Spanish",
        value: "SP"
      },
      {
        label: "Chinese",
        value: "CH"
      },
      {
        label: "Japanese",
        value: "JP"
      }
    ]
  },
  {
    type: "textarea",
    label: "Your Comment",
    id: "user-comment",
    icon: "fa-comments",
    options: []
  },
  {
    type: "tel",
    label: "Mobile Number",
    id: "user-mobile",
    icon: "fa-mobile-phone",
    options: []
  },
  {
    type: "tel",
    label: "Home Number",
    id: "user-phone",
    icon: "fa-phone",
    options: []
  }
]

let fields = document.querySelector(".fields")

for (var i = 0; i < formData.length; i++) {
  let input1 = document.createElement("input")
  input1.type = formData[i].type
  input1.id = formData[i].id
  input1.placeholder = formData[i].label

  if (formData[i].type != "select") {
    fields.appendChild(input1)
    input1.icon = formData[i].icon
  }

  if (formData[i].type === "select") {
    let select = document.createElement("select")
    select.placeholder = "Select Language"
    fields.appendChild(select)
    let option = document.createElement("option")
    for (var j = 0; j < formData[i].options.length; j++) {
      let options = document.createElement("option")
      let title = document.createElement("selectOption")
      options.label = formData[i].options[j].label
      options.value = formData[i].options[j].value
      select.appendChild(options)
    }
  }
}
