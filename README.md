# URL Shortner

A simple url shortner service

### Stack

`Node` and `Express` for backend

`Svelte` for Front end

### Dev
cd into `api/config` and create a `.env` file like the following structure :
```bash
NODE_ENV=development
PORT=3000
MONGO_URI= #put db string here
BASE_URL=http://localhost:3000
```

And then :

```bash
# Install dependencies
cd api && npm install
cd client && npm install

# Run both local servers for dev
cd api && npm run dev # port=3000
cd client && npm run dev # port=5000
```
