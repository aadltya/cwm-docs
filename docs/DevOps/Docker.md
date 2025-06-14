# Docker Documentation

## Introduction to Docker
Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and self-contained units that can run anywhere Docker is installed.

## Key Concepts

### 1. Containers
- Isolated environments that package application code and dependencies
- Share the host OS kernel but run in isolation
- Lightweight and fast to start/stop

### 2. Images
- Read-only templates used to create containers
- Built from Dockerfiles
- Stored in registries (like Docker Hub)

### 3. Dockerfile
- Text file containing instructions to build an image
- Each instruction creates a layer in the image
- Example:
```dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Basic Docker Commands

### Container Management
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Start a container
docker start <container_id>

# Stop a container
docker stop <container_id>

# Remove a container
docker rm <container_id>
```

### Image Management
```bash
# List images
docker images

# Build an image
docker build -t <image_name> .

# Pull an image
docker pull <image_name>

# Remove an image
docker rmi <image_name>
```

### Running Containers
```bash
# Run a container
docker run <image_name>

# Run with port mapping
docker run -p 8080:80 <image_name>

# Run in detached mode
docker run -d <image_name>

# Run with environment variables
docker run -e VAR_NAME=value <image_name>
```

## Docker Compose
Docker Compose is a tool for defining and running multi-container applications.

### Basic Usage
```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: password
```

### Common Commands
```bash
# Start services
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs
```

## Best Practices

1. **Use Official Images**
   - Prefer official images from Docker Hub
   - Specify exact versions for stability

2. **Optimize Image Size**
   - Use multi-stage builds
   - Remove unnecessary files
   - Combine RUN commands

3. **Security**
   - Don't run containers as root
   - Scan images for vulnerabilities
   - Use secrets for sensitive data

4. **Networking**
   - Use Docker networks for container communication
   - Expose only necessary ports
   - Use host networking sparingly

## Advanced Topics

### Docker Networking
- Bridge network (default)
- Host network
- Overlay network
- Custom networks

### Docker Volumes
- Named volumes
- Bind mounts
- tmpfs mounts

### Docker Swarm
- Service creation
- Stack deployment
- Scaling services
- Rolling updates

## Troubleshooting

### Common Issues
1. Container won't start
2. Network connectivity problems
3. Volume mounting issues
4. Permission problems

### Debugging Commands
```bash
# View container logs
docker logs <container_id>

# Inspect container
docker inspect <container_id>

# Execute command in running container
docker exec -it <container_id> /bin/bash
```

## Resources
- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker GitHub Repository](https://github.com/docker/docker)