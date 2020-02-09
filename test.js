html += `<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`

html += 
       `<div class="col-sm-6">
          <div class="card bg-dark text-white text-center" style="border-color: #FFF">
            <div class="card-header"><h3><strong>${countries[i]}</strong></h3></div>
            <div class="card-body">
              <h1><strong>${exchanges[i]}</strong></h1>
              <p class="change" style="background-color:${bkchangey}"><strong>${(((exchanges[i] - exchangesy[i])/exchanges[i])*100).toFixed(2)}%</strong></p> 
              <p class="change" style="background-color:${bkchangely}"><strong>${(((exchanges[i] - exchangesly[i])/exchanges[i])*100).toFixed(2)}%</strong></p>                
            </div>
          </div>
        </div>`  
