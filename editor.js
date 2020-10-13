const Jimp = require('jimp');
const generateCertificate=(data)=>{
    console.log(data)
    var event_name=data.event_name;
    var ambassador_name=data.ambassador_name;
    data.participants.forEach((certificate_holder_name)=>{
             Jimp.read('./images/certificate_template.png')
            .then(image => {
                Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(font => {
                    image.print(font, 51, 241, {text:certificate_holder_name});               
                    var file = `${certificate_holder_name}`+"_certificate." + image.getExtension();
                    image.quality(100);
                    image.write(`./certificates/${ambassador_name}/${event_name}/`+file);
                });
                Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
                    image.print(font, 49, 391, {text:event_name});
                    var file = `${certificate_holder_name}`+"_certificate." + image.getExtension();
                    image.quality(100);
                    image.write(`./certificates/${ambassador_name}/${event_name}/`+file);
                });
                Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(font => {
                    image.print(font, 49, 502, {text:ambassador_name});
                    var file = `${certificate_holder_name}`+"_certificate." + image.getExtension();
                    image.quality(100);
                    image.write(`./certificates/${ambassador_name}/${event_name}/`+file);
                });
                
            })
            .catch(err => {
                console.log("JIMP ERROR");
            });


    })
    
                                   

}
module.exports={generateCertificate}