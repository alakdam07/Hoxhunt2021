import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { emailList } from './Data';

const app: Application = express();
const port = 8080;

app.use(cors());
app.use(morgan("common"));
app.use(helmet());



let criminals: string[];

const countCriminals = (emailList) => {
  criminals = emailList.filter((email) => {
    let fullname = email.substring(0, email.lastIndexOf("@")).replace(".", "");
    let firstname = email.substring(0, email.indexOf("."));
    let lastname = email.substring(email.indexOf(".") + 1, email.lastIndexOf("@"));
    if (lastname.charAt(0) === ('r')) {
      return false
    } else if (email.endsWith('.co.uk') && fullname.charAt(0) === 'c') {
      return true
    } else if (email.includes('.wonkaindustries.' || email.includes('.gringottsbank.')) && firstname.length < 4) {
      return true
    } else if ((lastname.match(/t/g) || []).length > 2) {
      return true
    }
    return false
  })
}
countCriminals(emailList)


const data = criminals?.map((email: string) => {
  const name = email.split("@")[0];
  const [firstname, lastname] = name.split(".");
  return {
    email, firstname, lastname
  };
});


app.get('/api', (req: Request, res: Response) => {
  res.send({
    data,
    "length": criminals.length,
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
