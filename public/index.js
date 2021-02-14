async function send() {
    const emailValue = $('#EMAIL').val()
    if (emailValue.length < 2) {
        return
    }
    let header = new Headers({
        "Access-Control-Allow-Origin": "*",
      });
    const outEmail = document.getElementById('outEmail');
    $('#loading').show()
    const x = await fetch(`https://apis.cloudyyuw.vercel.app/api/auth?email=${emailValue}`, header)
    const parsed = await x.json()
    if (parsed.message == "ok") {
        $('#loading').hide(200)
        $('#msg').show(210)
        outEmail.innerHTML = emailValue
    } else {
        alert('Unable to send email, please try again')
    }
}