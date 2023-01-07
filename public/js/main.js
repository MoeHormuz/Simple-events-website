function deleteEvent() {
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')
    
    axios.delete('/events/delete/'+ id)
    .then( (res)=> {
        console.log(res.data)
        window.location.href = '/events'
    })

    .catch( (err)=> {

        console.log(err)
    })

}