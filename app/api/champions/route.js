import champions from '../../data/Champions';

export async function GET() { 

  const champions_data = champions;
  
  return Response.json({champions_data})
}