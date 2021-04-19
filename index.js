const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
//const port = 4100
port = process.env.PORT||4100
const app = express();
const  ONLINE_DB =
"mongodb+srv://Azeezah_Olatunde:azeezah@cluster0.ll1f9.mongodb.net/pentiqueClothings?retryWrites=true&w=majority"
mongoose.connect(ONLINE_DB,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("port is listening");
})

app.use(cors());
app.use(express.json())
app.use('/', require('./component/controller'));

app.listen(port, () => {
console.log(`server is connected to ${port}`);
});
