export default function Home() {
  return (
    <Head>
    	<meta charset="UTF-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<title>Cloudyy CDN</title>
    	<link id="favicon" rel="icon" href="https://host.cloudyyuw.repl.co/i/e6ec7f963380809994eadb5d439f0abe.gif" type="image/x-icon"
    	/>
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    	</script>
    	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    	<link rel="stylesheet" href="https://firebasestorage.googleapis.com/v0/b/cloudyycdn.appspot.com/o/css%2Femojis.css?alt=media&token=641f4003-7d9a-4e33-9b1b-0f0b420b704e" />
    	<script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js">
    	</script>
    	<script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js">
    	</script>
    	<script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-storage.js">
    	</script>
    
    	<script src="https://firebasestorage.googleapis.com/v0/b/cloudyycdn.appspot.com/o/js%2Fapp.js?alt=media&token=0b2c5ab0-b108-4cce-a46b-dbe8bef74efd">
    	</script>
    </Head> 
    <div class="pusher">
    <br /> 
    <div class = "ui inverted segment">
    <h1 class="ui header">C.CDN</h1> 
    <hr / >

    <div class="ui middle aligned stackable grid container">
            <div class="row">
              <div class="eight wide column">
                <div class="ui inverted compact segment" style="border: 2px solid white; border-radius: 5px;">
                  <input type="file" accept="file_extension,audio/*,video/*,image/*" id="Files" onchange="up()" />
                  
                  
                  <br /><br />
                  <div id="upload_stats" style="display: none;">
                    <div class="ui pink inverted tiny progress" data-value="0" id="progress">
        <div class="bar">
          <div class="progress"></div>
        </div>
        
                  </div>
                </div>
                </div>
                <div class="ui inverted segment" style="border: 2px solid white; border-radius: 5px;">
                  <h1 class="ui header">Sobre o projeto:</h1>
                  <hr />
                  <p>
                    Este projeto é um protótipo de uma CDN de imagens gratuita.<br />
                    O código fonte está disponível na Github <a href="https://github.com/CloudyyUw/simple-cdn"><i class="emoji pepecoffee min"></i> (apenas clique no emoji)</a>
                  </p>
                </div>
              </div>
            </div>
          </div> 
          </div> 
          </div>
  );
}
