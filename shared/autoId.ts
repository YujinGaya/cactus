export default function autoId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 20; i += 1) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  if (id.length !== 20) {
    console.error(`Invalid auto ID: ${id}`);
  }
  return id;
}
