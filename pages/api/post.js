import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://pedalinvest:Akshay%4011@investors.3fhjqdk.mongodb.net/?retryWrites=true&w=majority&ssl=true');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email: {
        type:String,
    },

    intrested: {
        type:String,
    },
});

export default async function handler(req, res) {
  const { name, email,intrested } = req.body;
  const Inv = mongoose.models.Inv || mongoose.model('Inv', UserSchema);
  const inv = new Inv({ name, email,intrested });
  await inv.save();
  res.status(200).json({ message: 'successfully subscribed' });
}