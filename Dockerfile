# Utilizar uma imagem Node
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependência e instalar
COPY package.json package-lock.json ./
RUN yarn install

# Copiar o resto do código
COPY . .

# Expor a porta
EXPOSE 3000 3001 3002 3003
