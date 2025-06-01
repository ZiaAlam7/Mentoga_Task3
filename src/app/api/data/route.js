import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;


let cached = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;


async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}


const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
});

let Item;
try {
  Item = mongoose.model('Item');
} catch {
  Item = mongoose.model('Item', itemSchema, 'items');
}


export async function GET() {
  try {
    await connectToDatabase();
    const items = await Item.find();
    return Response.json(items); 
  } catch (error) {
    console.error('MongoDB fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
