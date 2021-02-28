async function send() {
    const emailValue = $('#EMAIL').val()
    if (emailValue.length < 2) {
        return
    }
    let header = new Headers({
        "Access-Control-Allow-Origin": "*",
    });

    $('#loading').show()
    var url = "https://apis-cloudyyuw.vercel.app/api/auth" //"http://localhost:3000/api/auth"
    const x = await fetch(`${url}?email=${emailValue}`, header)
    const parsed = await x.json()
    renderMessage(parsed.message, parsed.error)
}

function renderMessage(Message, Error) {
    const out = document.getElementById("msg");
    if (Error == true) {
        out.className = "ui error message";
        out.innerHTML = `
        <div class="header">Error</div>
        <p>${Message}</p>
        `
        $('#loading').hide(200)
        $('#msg').show(210)
    } else {
        out.className = "ui success message";
        out.innerHTML = `
        <div class="header">Completed</div>
        <p>${Message}</p>
        `
        $('#loading').hide(200)
        $('#msg').show(210)
    }
}
