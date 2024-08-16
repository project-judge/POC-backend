import { app } from "./app"
import { env } from "@/env"

app.listen({
  host: '0.0.0.0',
  port: env.PORT,
}).then(()=>{
  console.log("⭐ Server running on port 3333")
  console.log('Documentação disponível em http://localhost:3333/docs');
})