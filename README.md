# Node.js Express App for Azure App Service

This is a simple Node.js application built with [Express](https://expressjs.com/) that demonstrates deployment to **Azure App Service** using Git. The app responds to requests at the root endpoint with a confirmation message.

## Features

- Lightweight Express server.
- Ready-to-deploy to Microsoft Azure App Service.
- Configurable port using environment variables.

## Prerequisites

Before running or deploying this app, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or newer)
- [Git](https://git-scm.com/)
- An [Azure account](https://azure.microsoft.com/en-us/free/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bl725/sample-azure-node-app.git
   cd sample-azure-node-app.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application locally:**
   ```bash
   npm start
   ```
   Or run directly using Node:
   ```bash
   node app.js
   ```

   The server should be available at [http://localhost:3000](http://localhost:3000).

## Deployment to Azure App Service

1. **Login to Azure:**
   ```bash
   az login
   ```

2. **Create a resource group (optional):**
   ```bash
   az group create --name myResourceGroup --location eastus
   ```

3. **Create an App Service plan and web app:**
   ```bash
   az appservice plan create --name myPlan --resource-group myResourceGroup --sku FREE
   az webapp create --resource-group myResourceGroup --plan myPlan --name <your-app-name> --runtime "NODE|14-lts"
   ```

4. **Deploy using Git:**
   ```bash
   az webapp deployment source config-local-git --name <your-app-name> --resource-group myResourceGroup
   ```
   Copy the Git URL returned by the command above and add it as a remote, then push:

   ```bash
   git remote add azure <deployment-git-url>
   git push azure main
   ```

   Replace `main` with your branch name if different.

## Environment Variables

| Variable | Description               | Default |
|-----------|---------------------------|----------|
| `PORT`    | Port to run the server on | `3000`  |

## License

This project is open-source and available under the [MIT License](LICENSE).

