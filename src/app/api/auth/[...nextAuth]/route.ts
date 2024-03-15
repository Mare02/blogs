export async function POST(request: Request) {
  try {
    console.log('request from api:', request);
  } catch (error) {
    console.log(error);
  }
}