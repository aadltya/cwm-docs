# Kubernetes Documentation

## Introduction to Kubernetes
Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides a framework to run distributed systems resiliently.

## Core Concepts

### 1. Cluster Architecture
- **Control Plane Components**
  - kube-apiserver: API server that exposes the Kubernetes API
  - etcd: Consistent and highly-available key value store
  - kube-scheduler: Watches for newly created pods and assigns nodes
  - kube-controller-manager: Runs controller processes
  - cloud-controller-manager: Interacts with cloud providers

- **Node Components**
  - kubelet: Agent that runs on each node
  - kube-proxy: Network proxy that maintains network rules
  - Container Runtime: Software responsible for running containers

### 2. Kubernetes Objects

#### Pods
- Smallest deployable units in Kubernetes
- Contains one or more containers
- Share network and storage resources
- Example:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80
```

#### Deployments
- Manages the desired state for Pods and ReplicaSets
- Provides declarative updates
- Example:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
```

#### Services
- Exposes applications running on Pods
- Types:
  - ClusterIP (default)
  - NodePort
  - LoadBalancer
  - ExternalName
- Example:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
  type: ClusterIP
```

## Basic Commands

### Cluster Management
```bash
# Get cluster information
kubectl cluster-info

# Get nodes
kubectl get nodes

# Get all resources
kubectl get all
```

### Pod Management
```bash
# Create a pod
kubectl create -f pod.yaml

# Get pods
kubectl get pods

# Describe pod
kubectl describe pod <pod-name>

# Delete pod
kubectl delete pod <pod-name>
```

### Deployment Management
```bash
# Create deployment
kubectl create -f deployment.yaml

# Get deployments
kubectl get deployments

# Scale deployment
kubectl scale deployment <deployment-name> --replicas=5

# Update deployment
kubectl set image deployment/<deployment-name> <container-name>=<new-image>
```

## Advanced Concepts

### 1. ConfigMaps and Secrets
- **ConfigMaps**: Store non-confidential configuration data
- **Secrets**: Store sensitive information
- Example ConfigMap:
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "mongodb://localhost:27017"
  api_key: "development-key"
```

### 2. Persistent Volumes
- Provides storage resources
- Types:
  - PersistentVolume (PV)
  - PersistentVolumeClaim (PVC)
- Example:
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

### 3. Ingress
- Manages external access to services
- Provides load balancing, SSL termination, and name-based virtual hosting
- Example:
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /app
        pathType: Prefix
        backend:
          service:
            name: app-service
            port:
              number: 80
```

## Best Practices

1. **Resource Management**
   - Set resource requests and limits
   - Use Horizontal Pod Autoscaling
   - Implement resource quotas

2. **Security**
   - Use RBAC (Role-Based Access Control)
   - Implement network policies
   - Regular security audits
   - Use secrets for sensitive data

3. **Monitoring and Logging**
   - Implement health checks
   - Use monitoring tools (Prometheus, Grafana)
   - Centralize logging (ELK Stack)

4. **Deployment Strategies**
   - Rolling updates
   - Blue-green deployments
   - Canary deployments

## Troubleshooting

### Common Issues
1. Pod scheduling failures
2. Container crashes
3. Network connectivity problems
4. Storage issues

### Debugging Commands
```bash
# Get pod logs
kubectl logs <pod-name>

# Execute command in pod
kubectl exec -it <pod-name> -- /bin/bash

# Describe resource
kubectl describe <resource-type> <resource-name>

# Get events
kubectl get events
```

## Resources
- [Kubernetes Official Documentation](https://kubernetes.io/docs/home/)
- [Kubernetes GitHub Repository](https://github.com/kubernetes/kubernetes)
- [Kubernetes Blog](https://kubernetes.io/blog/)
- [Kubernetes Slack](https://slack.k8s.io/)