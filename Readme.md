<p align="center">
<img src="./images/image 32.png" >
</p>

## Friendly Tutorial
https://www.youtube.com/watch?v=cEDCV2HJxcU&feature=youtu.be

## Contribution
- Please find the GitHub Project Board [here](https://github.com/imabp/CertiGen/projects/1)
- Share your features, by creating an issue [here](https://github.com/imabp/CertiGen/issues)

## Installation & API

### Installation
<hr/>

1. Clone this repository.
2. Install npm packages using `npm i`
3. Run the server. `npm run devStart`
4. Server starts running at port: 5000
5. Go to Browser and run `localhost:5000`
6. You will see the usage of API and Help on your browser.

### API
<hr/>
<ul><li><b>GET '/'</b> : This is a Help Route</li> <li><b>POST '/sendData'</b> : One and only Route for Certificate Generation. Below is the description of what you should send as Raw JSON with this POST Request. <br/><ul><li>{<br/> &nbsp; <b>event_name</b>:"Name of The Event",<br/>&nbsp; <b> ambassador_name</b>: "Name of the Ambassador",<br/>&nbsp; <b>participants</b>:["Person 1","Person 2","Person 3","Person 4"]<br/>}</li><ul></li></ul><li> After Successful generation of certificates you will receive response as <b>Success</b> and all certificates will be in folder named <b>certificates</b></li>
