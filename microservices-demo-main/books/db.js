const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://adminUser:vxF3ahDPol84lMmi@cluster0.gr3hn.mongodb.net/ec2db?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {   //
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => {
    console.log('Connection failed!');
})
//module.export= mongoose 