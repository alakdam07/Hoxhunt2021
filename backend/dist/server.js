"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const Data_1 = require("./Data");
const app = express_1.default();
const port = 8080;
app.use(cors_1.default());
app.use(morgan_1.default("common"));
app.use(helmet_1.default());
let criminals;
const countCriminals = (emailList) => {
    criminals = emailList.filter((email) => {
        let fullname = email.substring(0, email.lastIndexOf("@")).replace(".", "");
        let firstname = email.substring(0, email.indexOf("."));
        let lastname = email.substring(email.indexOf(".") + 1, email.lastIndexOf("@"));
        if (lastname.charAt(0) === ('r')) {
            return false;
        }
        else if (email.endsWith('.co.uk') && fullname.charAt(0) === 'c') {
            return true;
        }
        else if (email.includes('.wonkaindustries.' || email.includes('.gringottsbank.')) && firstname.length < 4) {
            return true;
        }
        else if ((lastname.match(/t/g) || []).length > 2) {
            return true;
        }
        return false;
    });
};
countCriminals(Data_1.emailList);
const data = criminals === null || criminals === void 0 ? void 0 : criminals.map((email) => {
    const name = email.split("@")[0];
    const [firstname, lastname] = name.split(".");
    return {
        email, firstname, lastname
    };
});
app.get('/api', (req, res) => {
    res.send({
        data,
        "length": criminals.length,
    });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map