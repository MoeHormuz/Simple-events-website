// Delete Events:
function deleteEvent() {
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')

    axios.delete('/events/delete/' + id)
        .then((res) => {
            console.log(res.data)
            window.location.href = '/events'
        })

        .catch((err) => {

            console.log(err)
        })

}


// Upload Avatar:
function readURL(input) {

    if (input.files && input.files[0]) {

        var reader = new FileReader()

        reader.onload = function (e) {

            let uploadBTN = document.getElementById("uploadButton")
            uploadBTN.style.display = "inline"

            let cancelBTN = document.getElementById("cancelButton")
            cancelBTN.style.display = "inline"

            let title = document.getElementById("titleImagePlaceHolder")
            title.style.display = "inline"

            let image = document.getElementById("imagePlaceHolder")
            image.style.display = "inline"
            image.src = e.target.result
        }

        reader.readAsDataURL(input.files[0])
    }
}

function cancelBTN() {
    window.location.href = '/users/profile'
}